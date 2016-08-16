using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;

namespace NhlStats.Api.Entities
{
    public class Player
    {
        [SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Player()
        {
            Matches = new HashSet<Match>();
        }

        public int PlayerId { get; set; }

        public string Name { get; set; }

        public int? Wins { get; set; }

        public int? Losses { get; set; }

        [SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<Match> Matches { get; set; }
    }
}