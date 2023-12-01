using Application.Hubs;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Configuration;
using TableDependency.SqlClient;

namespace Application.DatabaseSubscriptions
{
    public class DatabaseSubscription<T> : IDatabaseSubscription where T:class,new()
    {
        
        IConfiguration _configuration;
        IHubContext<NotificationHub> _notificationHub;
        public DatabaseSubscription(IConfiguration configuration, IHubContext<NotificationHub> notificationHub)
        {
            _configuration = configuration;
            _notificationHub = notificationHub;
        }


        SqlTableDependency<T> _tableDependency;
        public void Configure(string tableName)
        {
            _tableDependency = new SqlTableDependency<T>(_configuration.GetConnectionString("RentACar"), tableName);

            _tableDependency.OnChanged += async (sender, e) => 
            {
                // SOFT DELETE => Update
                await _notificationHub.Clients.All.SendAsync("NewBrandAdded", e.Entity);
            };

            _tableDependency.OnError += (sender, e) => 
            {

            };

            _tableDependency.Start();
        }

        // deconstructor
        ~DatabaseSubscription()
        {
            _tableDependency.Stop();
        }
    }
}
