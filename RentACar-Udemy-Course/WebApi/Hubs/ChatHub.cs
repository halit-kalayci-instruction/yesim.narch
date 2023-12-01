using Microsoft.AspNetCore.SignalR;

namespace WebApi.Hubs
{
    public class ChatHub : Hub
    {
        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }
    }
}
