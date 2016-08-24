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

            if (id == null)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, new { Message = "Bad Request: Failed to parse PlayerId." });
            }

            using (var db = new NhlContext())
            {
                var player = db.Players.SingleOrDefault(b => b.PlayerId == id);
                var matches = (from b in db.Matches
                               where b.PlayerOne == player.PlayerId || b.PlayerTwo == player.PlayerId
                               select b).OrderByDescending(x => x.MatchId).ToList();

                foreach (var match in matches)
                {
                    match.Player = db.Players.SingleOrDefault(x => x.PlayerId == match.PlayerOne);
                    match.Player1 = db.Players.SingleOrDefault(x => x.PlayerId == match.PlayerTwo);

                    match.Team = db.Teams.SingleOrDefault(x => x.TeamId == match.TeamOne);
                    match.Team1 = db.Teams.SingleOrDefault(x => x.TeamId == match.TeamTwo);
                }

                player.Matches = matches;

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