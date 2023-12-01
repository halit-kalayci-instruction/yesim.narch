using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DatabaseSubscriptions
{
    public interface IDatabaseSubscription
    {
        void Configure(string tableName);
    }
}
