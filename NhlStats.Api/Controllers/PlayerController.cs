using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NhlStats.Api.Context;
using NhlStats.Api.Entities;

namespace NhlStats.Api.Controllers
{
    public class PlayerController : ApiController
    {
        [HttpGet]
        [Route("api/players/getall")]
        public HttpResponseMessage GetAll()
        {
            using (var db = new NhlContext())
            {
                var players = (from b in db.Players
                               orderby b.Name
                               select b).ToList();

                return Request.CreateResponse(HttpStatusCode.OK, new { content = players });
            }
        }

        [HttpGet]
        [Route("api/players/get/{playerId}")]
        public HttpResponseMessage Get(string playerId)
        {
            if (string.IsNullOrEmpty(playerId))
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, new { Message = "Bad Request: PlayerId cannot be null." });
            }

            int id;
            int.TryParse(playerId, out id);

            if (id <= 0)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, new { Message = "Bad Request: Invalid PlayerId." });
            }

            using (var db = new NhlContext())
            {
                var player = db.Players.SingleOrDefault(b => b.PlayerId == id);
                return Request.CreateResponse(HttpStatusCode.OK, new { content = player });
            }
        }

        [HttpPost]
        [Route("api/players/add")]
        public HttpResponseMessage Post([FromBody] Player player)
        {
            if (player == null)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, new {message = "Bad Request: Player cannot be null."});
            }
            using (var db = new NhlContext())
            {
                db.Players.Add(player);
                db.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, new { message = "OK: Player successfully added." });
            }
        }
    }
}