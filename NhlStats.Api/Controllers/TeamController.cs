using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using NhlStats.Api.Context;
using NhlStats.Api.Entities;

namespace NhlStats.Api.Controllers
{
    public class TeamController : ApiController
    {

        [HttpGet]
        [Route("api/teams/getall")]
        public IEnumerable<Team> GetAll()
        {
            using (var db = new NhlContext())
            {
                var query = (from b in db.Teams
                             orderby b.Name
                             select b).ToList();

                return query;
            }
        }
    }
}