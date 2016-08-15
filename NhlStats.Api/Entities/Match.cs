namespace NhlStats.Api.Context
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Match
    {
        public int MatchId { get; set; }

        public int PlayerOne { get; set; }

        public int TeamOne { get; set; }

        public int PlayerOneScore { get; set; }

        public int PlayerTwo { get; set; }

        public int TeamTwo { get; set; }

        public int PlayerTwoScore { get; set; }

        public virtual Player Player { get; set; }

        public virtual Player Player1 { get; set; }

        public virtual Team Team { get; set; }

        public virtual Team Team1 { get; set; }
    }
}
