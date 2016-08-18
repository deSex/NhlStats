using System.ComponentModel.DataAnnotations.Schema;
namespace NhlStats.Api.Entities
{
    public class Match
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MatchId { get; set; }

        public int PlayerOne { get; set; }

        public int TeamOne { get; set; }

        public int PlayerOneScore { get; set; }

        public int PlayerTwo { get; set; }

        public int TeamTwo { get; set; }

        public int PlayerTwoScore { get; set; }
    }
}