using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MPlusHub.Web.Controllers
{
    [Authorize]
    [ApiController]
    [Route("/api/mplusteam")]
    public class MPlusTeamAPIController : BaseAPIController
    {
        
        public MPlusTeamAPIController()
        {
            
        }

        [HttpGet]
        public string GetTeams()
        {
            return "Teams!";
        }
    }
}