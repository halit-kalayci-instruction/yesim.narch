using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Hubs
{
    public class NotificationHub : Hub
    {
        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }

        public async Task JoinGroup(string groupName)
        {
           await Groups.AddToGroupAsync(Context.ConnectionId, groupName);

           // Gruptaki tüm elemanlar => Group()
           // Gruptaki çağrıyı yapan client dışındaki tüm elemanlar => OthersInGroup
           await Clients.Group(groupName).SendAsync("NewUser", Context.ConnectionId + " has joined to group");
        }
    }
}
// 3:45