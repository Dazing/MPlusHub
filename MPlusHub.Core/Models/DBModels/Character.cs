using System.Collections.Generic;

namespace MPlusHub.Core.Models.DBModels
{
    public class Character
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Region { get; set; }

        public string Server { get; set; }

        public User User { get; set; }

    }
}