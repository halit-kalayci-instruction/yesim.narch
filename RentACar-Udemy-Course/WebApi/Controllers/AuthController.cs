using Application.Features.Auth.Commands.Login;
using Application.Features.Auth.Commands.RefreshToken;
using Application.Features.Auth.Commands.Register;
using Core.Application.Dtos;
using Core.Security.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : BaseController
    {

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] UserForLoginDto userForLoginDto)
        {
            LoginCommand loginCommand = new() 
            { 
                UserForLoginDto = userForLoginDto, 
                IpAddress = getIpAddress() 
            };

            LoggedResponse result = await Mediator.Send(loginCommand);

            setRefreshTokenToCookie(result.RefreshToken);

            return Ok(result.ToHttpResponse());
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] UserForRegisterDto userForRegisterDto)
        {
            RegisterCommand registerCommand = new() { UserForRegisterDto = userForRegisterDto, IpAddress = getIpAddress() };
            RegisteredResponse result = await Mediator.Send(registerCommand);

            setRefreshTokenToCookie(result.RefreshToken);

            return Created(uri: "", result.AccessToken);
        }

        [HttpGet("RefreshToken")]
        public async Task<IActionResult> RefreshToken()
        {
            RefreshTokenCommand refreshTokenCommand = new() { RefreshToken = getRefreshTokenFromCookies(), IpAddress = getIpAddress() };
            RefreshedTokensResponse result = await Mediator.Send(refreshTokenCommand);
            setRefreshTokenToCookie(result.RefreshToken);
            return Created(uri: "", result.AccessToken);
        }


        private string getRefreshTokenFromCookies() =>
            Request.Cookies["refreshToken"] ?? throw new ArgumentException("Refresh token is not found in request cookies.");

        private void setRefreshTokenToCookie(RefreshToken refreshToken)
        {
            CookieOptions cookieOptions = new() { HttpOnly = true, Expires = DateTime.UtcNow.AddDays(7) };
            Response.Cookies.Append(key: "refreshToken", refreshToken.Token, cookieOptions);
        }
    }
}
