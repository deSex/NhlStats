using System.Data.Entity;
using NhlStats.Api.Entities;

namespace NhlStats.Api.Context
{
    public class NhlContext : DbContext
    {
        public NhlContext(): base("name=NhlContext"){}

        public virtual DbSet<Match> Matches { get; set; }
        public virtual DbSet<Player> Players { get; set; }
        public virtual DbSet<Team> Teams { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

        }
    }
}