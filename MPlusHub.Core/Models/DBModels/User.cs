using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace MPlusHub.Core.Models.DBModels
{
    public class User : IdentityUser
    {

        public List<Character> Characters { get; set; }

    }
}