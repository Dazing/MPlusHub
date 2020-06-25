using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Mappers;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;

namespace MPlusHub.Identity.Extensions
{
    public static class AppExtensions
    {
        public static void SeedDevelopmentIdentityConfig(this IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetRequiredService<ConfigurationDbContext>();

                if (!context.Clients.Any())
                {
                    foreach (var client in DevelopmentIdentityConfiguration.GetClients())
                        context.Clients.Add(client.ToEntity());

                    context.SaveChanges();
                }

                if (!context.IdentityResources.Any())
                {
                    foreach (var resource in DevelopmentIdentityConfiguration.GetIdentityResources())
                        context.IdentityResources.Add(resource.ToEntity());

                    context.SaveChanges();
                }

                if (!context.ApiResources.Any())
                {
                    foreach (var resource in DevelopmentIdentityConfiguration.GetApis())
                        context.ApiResources.Add(resource.ToEntity());

                    context.SaveChanges();
                }
            }

        }

    }
}
