namespace NhlStats.Api.Entities
{
    public class Match
    {
        public int MatchId { get; set; }

        public int PlayerOne { get; set; }

        public int TeamOne { get; set; }

        public int PlayerOneScore { get; set; }

        public int PlayerTwo { get; set; }

        public int TeamTwo { get; set; }

        public int PlayerTwoScore { get; set; }

        public Player Player { get; set; }

        public Player Player1 { get; set; }

        public Team Team { get; set; }

        public Team Team1 { get; set; }
    }
}