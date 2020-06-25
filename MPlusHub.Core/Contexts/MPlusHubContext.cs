using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using MPlusHub.Core.Models.DBModels;

namespace MPlusHub.Core.Contexts
{
    public class MPlusHubContext : IdentityDbContext<User>
    {
        public MPlusHubContext(DbContextOptions<MPlusHubContext> options) : base(options)
        {
        }

        public DbSet<MPlusTeam> MPlusTeams { get; set; }
    }
}