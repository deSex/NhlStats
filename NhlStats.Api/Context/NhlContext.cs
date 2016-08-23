using System.Data.Entity;
using NhlStats.Api.Entities;

namespace NhlStats.Api.Context
{
    public class NhlContext : DbContext
    {
        public NhlContext()
            : base("name=NhlContext")
        {
        }

        public virtual DbSet<Match> Matches { get; set; }
        public virtual DbSet<Player> Players { get; set; }
        public virtual DbSet<Team> Teams { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Player>()
                .HasMany(e => e.Matches)
                .WithRequired(e => e.Player)
                .HasForeignKey(e => e.PlayerOne)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Player>()
                .HasMany(e => e.Matches1)
                .WithRequired(e => e.Player1)
                .HasForeignKey(e => e.PlayerTwo)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Team>()
                .HasMany(e => e.Matches)
                .WithRequired(e => e.Team)
                .HasForeignKey(e => e.TeamOne)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Team>()
                .HasMany(e => e.Matches1)
                .WithRequired(e => e.Team1)
                .HasForeignKey(e => e.TeamTwo)
                .WillCascadeOnDelete(false);
        }
    }
}