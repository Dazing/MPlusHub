using System.Collections.Generic;

namespace MPlusHub.Core.Models.DBModels
{
    public class MPlusTeamMember
    {
        public int Id { get; set; }

        public string CharacterName { get; set; }

        public MPlusTeam MPlusTeam { get; set; }

    }
}