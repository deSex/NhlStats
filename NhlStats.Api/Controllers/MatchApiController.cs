using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using NhlStats.Api.Context;
using NhlStats.Api.Entities;

namespace NhlStats.Api.Controllers
{
    public class MatchApiController : ApiController
    {
        [HttpPost]
        [Route("api/matches/create")]
        public bool Post([FromBody] Match match)
        {
            return false;
        }


        [HttpGet]
        [Route("api/matches/getall")]
        public IEnumerable<Match> GetAll()
        {
            using (var db = new NhlContext())
            {
                var query = (from b in db.Matches
                    select b).OrderByDescending(x => x.MatchId).ToList();

                return query;
            }
        }
    }
}