using System;
using System.Collections.Generic;
using System.Text;

namespace MPlusHub.Core.Models.ResponseModels
{
    public class LoginResponse
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string ReturnUrl { get; set; }
    }
}
