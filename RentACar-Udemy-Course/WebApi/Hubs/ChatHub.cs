using Microsoft.AspNetCore.SignalR;

namespace WebApi.Hubs
{
    public class ChatHub : Hub
    {
        public override Task OnConnectedAsync()
        {
            var context = Context;
            return base.OnConnectedAsync();
        }

        public async Task SendMessage(string message)
        {
            await Clients.All.SendAsync("MessageReceived", "Yeni mesaj geldi!");
        }
    }
}
