using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using NhlStats.Api.Context;
using NhlStats.Api.Entities;

namespace NhlStats.Api.Controllers
{
    public class PlayerController : ApiController
    {
        [HttpGet]
        [Route("api/players/getall")]
        public IEnumerable<Player> GetAll()
        {
            using (var db = new NhlContext())
            {
                var query = (from b in db.Players
                    orderby b.Name
                    select b).ToList();

                return query;
            }
        }
    }
}