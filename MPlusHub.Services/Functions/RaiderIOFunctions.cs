using System;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using STAMP.Core.Services;
using STAMP.Core.Models.DBModels;
using System.Collections.Generic;
using System.Linq;
using STAMP.Core.Common;
using STAMP.Service.Utilities;
using System.Collections;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

namespace STAMP.Service.Functions
{
    public class ElevationFunctions
    {
        private readonly IConfiguration _configuration;

        public ElevationFunctions(IConfiguration configuration, )
        {
            _configuration = configuration;
        }

        [FunctionName("QueueRaiderIOSync")]
        public async Task QueueRaiderIOSync(
            [TimerTrigger("*/30 * * * *")]TimerInfo timer,
            ILogger logger
        )
        {

        }

        [FunctionName("ProcessRaiderIOSync")]
        public void ProcessRaiderIOSync(
            [QueueTrigger("")]int characterId,
            ILogger logger
        )
        {
            /*
                var char = _characterRepository.GetCharacterById(characterId);
                var updatedRaiderIoProfile = await _raiderIOService.GetCharacterProfile(char);
                _characterRepository.UpdateCharacterWithRaiderIO(updatedRaiderIoProfile);
            */
        }
    }
}
