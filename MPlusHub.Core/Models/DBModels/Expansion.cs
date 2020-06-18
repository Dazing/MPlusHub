using System;
using System.Collections.Generic;
using System.Text;

namespace MPlusHub.Core.Models.DBModels
{
    public class Expansion
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Patch { get; set; }

        public List<Instance> Instances { get; set; }
    }
}
