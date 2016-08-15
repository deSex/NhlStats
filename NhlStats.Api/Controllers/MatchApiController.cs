using System.Collections.Generic;
using System.Web.Http;
using NhlStats.Api.Context;
using NhlStats.Api.Entities;

namespace NhlStats.Api.Controllers
{
    public class MatchApiController : ApiController
    {
        [HttpGet]
        [Route("api/matches/getall")]
        public bool Post([FromBody] Match match)
        {
            return false;
        }

        [HttpGet]
        [Route("api/matches/getall")]
        public IEnumerable<Match> GetAll()
        {
            return null;
        }
    }
}