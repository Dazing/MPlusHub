using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MPlusHub.Core.Models.DBModels;

namespace MPlusHub.Core.Contexts
{
    public class MPlusHubContext : ApiAuthorizationDbContext<User>
    {
        public MPlusHubContext(DbContextOptions<MPlusHubContext> options, IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        public DbSet<MPlusTeam> MPlusTeams { get; set; }
    }
}