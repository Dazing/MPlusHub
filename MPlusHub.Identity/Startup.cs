using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Mappers;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using MPlusHub.Core.Contexts;
using MPlusHub.Core.Models.DBModels;
using MPlusHub.Identity.Extensions;
using System.Linq;

namespace MPlusHub.Identity
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var defaultConnection = Configuration.GetConnectionString("DefaultConnection");
            services.AddDbContext<MPlusHubContext>(options =>
            {
                options.UseSqlServer(defaultConnection);
            });

             services.AddIdentity<User, IdentityRole>(config =>
            {
                config.Password.RequiredLength = 4;
                config.Password.RequireDigit = false;
                config.Password.RequireNonAlphanumeric = false;
                config.Password.RequireUppercase = false;
            })
                .AddEntityFrameworkStores<MPlusHubContext>()
                .AddDefaultTokenProviders();

            services.ConfigureApplicationCookie(config =>
            {
                config.Cookie.Name = "MPlusHub.Identity";
                config.LoginPath = "/Auth/Login";
                config.LogoutPath = "/Auth/Logout";
            });

            var assembly = typeof(Startup).Assembly.GetName().Name;
            
            services.AddIdentityServer()
                .AddAspNetIdentity<User>()
                .AddConfigurationStore(options => // (clients, resources)
                {
                    options.ConfigureDbContext = builder =>
                        builder.UseSqlServer(defaultConnection,
                            sql => sql.MigrationsAssembly("MPlusHub.Core"));
                })
                .AddOperationalStore(options => // (codes, tokens, consents)
                {
                    options.ConfigureDbContext = builder =>
                        builder.UseSqlServer(defaultConnection,
                            sql => sql.MigrationsAssembly("MPlusHub.Core"));

                    options.EnableTokenCleanup = true;
                    options.TokenCleanupInterval = 30;
                })
                .AddDeveloperSigningCredential();


            services.AddAuthentication()
                .AddIdentityServerJwt();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1.0", new OpenApiInfo { Title = "MPlusHub Identity", Version = "v1.0" });
            });

            services.AddControllersWithViews();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.SeedDevelopmentIdentityConfig();

                app.UseDeveloperExceptionPage();

                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1.0/swagger.json", "MPlusHub Identity");
                });
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseIdentityServer();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });
        }
    }
}
