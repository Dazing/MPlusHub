using System;
using System.Collections.Generic;
using System.Text;

namespace MPlusHub.Core.Models.DBModels
{
    public class Instance
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public Expansion Expansion { get; set; }
    }
}
