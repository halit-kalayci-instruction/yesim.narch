using Microsoft.Extensions.Configuration;
using TableDependency.SqlClient;

namespace Application.DatabaseSubscriptions
{
    public class DatabaseSubscription<T> : IDatabaseSubscription where T:class,new()
    {
        
        IConfiguration _configuration;
        public DatabaseSubscription(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        SqlTableDependency<T> _tableDependency;
        public void Configure(string tableName)
        {
            _tableDependency = new SqlTableDependency<T>(_configuration.GetConnectionString("BaseDb"), tableName);

            _tableDependency.OnChanged += (sender, e) => 
            { 
            
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
