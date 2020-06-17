using Microsoft.EntityFrameworkCore;
using MPlusHub.Core.Models.DBModels;

namespace MPlusHub.Core
{
    public class MPlusHubContext : DbContext
    {
        public MPlusHubContext(DbContextOptions<MPlusHubContext> options) : base(options)
        {
        }

        public DbSet<MPlusTeam> MPlusTeams { get; set; }
        public DbSet<MPlusTeamMember> MPlusTeamMembers { get; set; }
    }
}