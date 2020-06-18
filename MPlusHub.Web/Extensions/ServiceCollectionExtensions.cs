using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.DependencyInjection;
using MPlusHub.Core.Contexts;
using MPlusHub.Core.Models.DBModels;

namespace MPlusHub.Web.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static void AddMPHAuthentication(this IServiceCollection services)
        {
            services.AddDefaultIdentity<User>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddEntityFrameworkStores<MPlusHubContext>();

            services.AddIdentityServer()
                .AddApiAuthorization<User, MPlusHubContext>();

            services.AddAuthentication()
                .AddIdentityServerJwt();
        }
    }
}
