using Application.Features.Auth.Commands.Login;
using Core.Application.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : BaseController
    {

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] UserForLoginDto userForLoginDto)
        {
            LoginCommand loginCommand = new() 
            { 
                UserForLoginDto = userForLoginDto, 
                IpAddress = getIpAddress() 
            };

            LoggedResponse result = await Mediator.Send(loginCommand);

            // Set RT to cookie

            return Ok(result.ToHttpResponse());
        }
    }
}
