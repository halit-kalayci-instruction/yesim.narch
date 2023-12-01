using Microsoft.AspNetCore.SignalR;

namespace WebApi.Hubs
{
    public class ChatHub : Hub
    {
        public override Task OnConnectedAsync()
        {
            var context = Context;
            // Caller => sadece sunucuyu çağıran client'ı işaret et
            Clients.Caller.SendAsync("ConnectedToHub", context.ConnectionId);
            return base.OnConnectedAsync();
        }

        public async Task SendMessage(string message)
        {
            await Clients.All.SendAsync("MessageReceived", message);
        }
    }
}
