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
        [Route("api/matches/add")]
        public bool Post([FromBody] Match match)
        {
            if(match == null)
            {
                return false;
            }
            using (var db = new NhlContext())
            {
                db.Matches.Add(match);
                db.SaveChanges();
                return true;
            }
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