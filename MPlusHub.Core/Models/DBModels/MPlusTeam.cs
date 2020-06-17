using System.Collections.Generic;

namespace MPlusHub.Core.Models.DBModels
{
    public class MPlusTeam
    {
        public int Id { get; set; }

        public string TeamName { get; set; }

        public List<MPlusTeamMember> TeamMembers { get; set; }
    }
}