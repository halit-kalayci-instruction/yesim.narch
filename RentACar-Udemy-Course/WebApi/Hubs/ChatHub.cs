using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;

namespace WebApi.Hubs
{
    [Authorize(Roles = "Admin")]
    public class ChatHub : Hub
    {
        List<string> messages;
        static List<string> clients = new List<string>();
        public override Task OnConnectedAsync()
        {
            var context = Context;
            // Caller => sadece sunucuyu çağıran client'ı işaret et
            if(!clients.Any(i=>i == context.ConnectionId))
                clients.Add(context.ConnectionId);
            Clients.All.SendAsync("NewConnection", clients);
            Clients.Caller.SendAsync("ConnectedToHub", context.ConnectionId);
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(Exception? exception)
        {
            clients.Remove(Context.ConnectionId);
            Clients.All.SendAsync("NewConnection", clients);
            return base.OnDisconnectedAsync(exception);
        }

        public async Task SendMessage(string message)
        {
            await Clients.All.SendAsync("MessageReceived", message);
        }
    }
}
