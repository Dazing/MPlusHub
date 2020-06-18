using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Queue;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MPlusHub.Core.Contexts;
using System;

[assembly: FunctionsStartup(typeof(MPlusHub.Service.Startup))]
namespace MPlusHub.Service
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            builder.Services.AddDbContext<MPlusHubContext>(
                (IServiceProvider serviceProvider, DbContextOptionsBuilder options) => 
                {
                    var configuration = serviceProvider.GetRequiredService<IConfiguration>();
                    options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
                }
            );

            builder.Services.AddScoped<CloudQueueClient>((IServiceProvider serviceProvider) =>
            {
                var configuration = serviceProvider.GetRequiredService<IConfiguration>();
                CloudStorageAccount storageAccount = CloudStorageAccount.Parse(configuration.GetConnectionString("AzureStorage"));
                return storageAccount.CreateCloudQueueClient();
            });

        }
    }
}
