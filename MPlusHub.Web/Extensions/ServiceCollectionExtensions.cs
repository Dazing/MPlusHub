using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MPlusHub.Web.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static void AddMPHAuthentication(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAuthentication("Bearer")
                .AddJwtBearer("Bearer", config =>
                {
                    config.Authority = configuration["Authentication:Authority"];
                    config.Audience = configuration["Authentication:Audience"];
                });
        }
    }
}
