using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DatabaseSubscriptions.Middleware
{
    public static class DatabaseSubscriptionMiddleware
    {
        public static void UseDatabaseSubscription<T>(this IApplicationBuilder builder, string tableName)
            where T: class,IDatabaseSubscription
        {
            var subscription = builder.ApplicationServices.GetService(typeof(T)) as T;

            subscription?.Configure(tableName);
        }
    }
}
