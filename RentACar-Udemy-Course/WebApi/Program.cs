using Application;
using Core.CrossCuttingConcerns.Exceptions.Extensions;
using Core.Security;
using Core.Security.Encryption;
using Core.Security.JWT;
using Core.WebAPI.Extensions.Swagger;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Persistence;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddApplicationServices();
builder.Services.AddSecurityServices();
builder.Services.AddPersistenceServices(builder.Configuration);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddHttpContextAccessor();

// appSettings.json'dan tokenoptions'ý oku
const string tokenOptionsConfigurationSection = "TokenOptions";
TokenOptions tokenOptions =
    builder.Configuration.GetSection(tokenOptionsConfigurationSection).Get<TokenOptions>()
    ?? throw new InvalidOperationException($"\"{tokenOptionsConfigurationSection}\" section cannot found in configuration.");

builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = tokenOptions.Issuer,
            ValidAudience = tokenOptions.Audience,
            IssuerSigningKey = SecurityKeyHelper.CreateSecurityKey(tokenOptions.SecurityKey),
        };
    });

builder.Services.AddSwaggerGen(opt =>
{
    opt.AddSecurityDefinition(
        name: "Bearer",
        securityScheme: new OpenApiSecurityScheme
        {
            Name = "Authorization",
            Type = SecuritySchemeType.Http,
            Scheme = "Bearer",
            BearerFormat = "JWT",
            In = ParameterLocation.Header,
            Description =
                "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer YOUR_TOKEN\". \r\n\r\n"
                + "`Enter your token in the text input below.`"
        }
    );
    opt.OperationFilter<BearerSecurityRequirementOperationFilter>();
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

if(app.Environment.IsProduction())
app.ConfigureCustomExceptionMiddleware();

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
