using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NhlStats.Api.Context;
using NhlStats.Api.Entities;

namespace NhlStats.Api.Controllers
{
    public class MatchController : ApiController
    {
        [HttpPost]
        [Route("api/matches/add")]
        public HttpResponseMessage Post([FromBody] Match match)
        {
            if (match == null)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, new { Message = "Bad request: Match cannot be null." });
            }
            using (var db = new NhlContext())
            {
                db.Matches.Add(match);


                var playerOne = db.Players.SingleOrDefault(b => b.PlayerId == match.PlayerOne);
                var playerTwo = db.Players.SingleOrDefault(b => b.PlayerId == match.PlayerTwo);

                if (playerOne == null || playerTwo == null)
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest, new { Message = "Bad request: Players cannot be null." });
                }

                if (playerOne == playerTwo)
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest, new { Message = "Bad request: Players cannot be the same." });
                }

                if (match.PlayerOneScore > match.PlayerTwoScore)
                {
                    playerOne.Wins = playerOne.Wins + 1;
                    playerTwo.Losses = playerTwo.Losses + 1;
                }
                else if (match.PlayerOneScore < match.PlayerTwoScore)
                {
                    playerTwo.Wins = playerTwo.Wins + 1;
                    playerOne.Losses = playerOne.Losses + 1;
                }

                playerOne.Goals += match.PlayerOneScore;
                playerTwo.Goals += match.PlayerTwoScore;

                db.SaveChanges();
                return Request.CreateResponse(HttpStatusCode.OK, new { Message = "Successfully added match!" });
            }
        }


        [HttpGet]
        [Route("api/matches/getall")]
        public HttpResponseMessage GetAll()
        {
            using (var db = new NhlContext())
            {
                var query = (from b in db.Matches
                             select b).OrderByDescending(x => x.MatchId);

                foreach (var match in query)
                {
                    match.Player = db.Players.SingleOrDefault(b => b.PlayerId == match.PlayerOne);
                    match.Player.Matches = null;
                    match.Player.Matches1 = null;

                    match.Player1 = db.Players.SingleOrDefault(b => b.PlayerId == match.PlayerTwo);
                    match.Player1.Matches = null;
                    match.Player1.Matches1 = null;

                    match.Team = db.Teams.SingleOrDefault(b => b.TeamId == match.TeamOne);
                    match.Team.Matches = null;
                    match.Team.Matches1 = null;

                    match.Team1 = db.Teams.SingleOrDefault(b => b.TeamId == match.TeamTwo);
                    match.Team1.Matches = null;
                    match.Team1.Matches1 = null;
                }

                var matches = query.OrderByDescending(x => x.MatchId).ToList();

                if (matches.Count == 0)
                {
                    return Request.CreateResponse(HttpStatusCode.ExpectationFailed, new { Message = "Expecation failed: There are no saved matches." });
                }

                return Request.CreateResponse(HttpStatusCode.OK, new { content = matches });
            }
        }

        [HttpGet]
        [Route("api/matches/getAllByPlayerId/{playerId}")]
        public HttpResponseMessage GetAllByPlayerId(string playerId)
        {

            int id;
            if (int.TryParse(playerId, out id))
            {
                Request.CreateResponse(HttpStatusCode.BadRequest,
                    new { message = "Bad Request: Could not parse PlayerId." });
            }

            using (var db = new NhlContext())
            {
                var query = (from b in db.Matches
                             where b.Player.PlayerId == id || b.Player1.PlayerId == id
                             select b).OrderByDescending(x => x.MatchId);

                foreach (var match in query)
                {
                    match.Player = db.Players.SingleOrDefault(b => b.PlayerId == match.PlayerOne);
                    match.Player.Matches = null;
                    match.Player.Matches1 = null;

                    match.Player1 = db.Players.SingleOrDefault(b => b.PlayerId == match.PlayerTwo);
                    match.Player1.Matches = null;
                    match.Player1.Matches1 = null;

                    match.Team = db.Teams.SingleOrDefault(b => b.TeamId == match.TeamOne);
                    match.Team.Matches = null;
                    match.Team.Matches1 = null;

                    match.Team1 = db.Teams.SingleOrDefault(b => b.TeamId == match.TeamTwo);
                    match.Team1.Matches = null;
                    match.Team1.Matches1 = null;
                }

                var matches = query.OrderByDescending(x => x.MatchId).ToList();

                if (matches == null || matches.Count == 0)
                {
                    return Request.CreateResponse(HttpStatusCode.ExpectationFailed, new { Message = "Expecation failed: There are no saved matches." });
                }

                return Request.CreateResponse(HttpStatusCode.OK, new { content = matches });
            }
        }
    }
}