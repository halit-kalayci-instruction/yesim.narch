using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Security.Extensions;

namespace Application.Hubs
{
    [Authorize]
    public class NotificationHub : Hub
    {
        public override async Task OnConnectedAsync()
        {
            var roles = Context.User.ClaimRoles();
            foreach (var role in roles)
            {
                await Groups.AddToGroupAsync(Context.ConnectionId, role);
            }
            base.OnConnectedAsync();
        }

        public async Task JoinGroup(string groupName)
        {
           await Groups.AddToGroupAsync(Context.ConnectionId, groupName);

           // Gruptaki tüm elemanlar => Group()
           // Gruptaki çağrıyı yapan client dışındaki tüm elemanlar => OthersInGroup
           await Clients.Group(groupName).SendAsync("NewUser", Context.ConnectionId + " has joined to group");
        }

        public async Task SendMessage(SendNotificationModel message)
        {
            await Clients.Group(message.Group).SendAsync("MessageReceived", message.Message);
        }
    }

    public class SendNotificationModel
    {
        public string Group { get; set; }
        public string Message { get; set; }
    }
}
