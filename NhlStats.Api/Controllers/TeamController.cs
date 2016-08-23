using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NhlStats.Api.Context;

namespace NhlStats.Api.Controllers
{
    public class TeamController : ApiController
    {
        [HttpGet]
        [Route("api/teams/getall")]
        public HttpResponseMessage GetAll()
        {
            using (var db = new NhlContext())
            {
                var teams = (from b in db.Teams
                             orderby b.Name
                             select b).ToList();

                return Request.CreateResponse(HttpStatusCode.OK, new { content = teams });
            }
        }
    }
}