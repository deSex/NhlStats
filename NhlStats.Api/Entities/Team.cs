using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace NhlStats.Api.Entities
{
    public class Team
    {
        [SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Team()
        {
            Matches = new HashSet<Match>();
        }

        public int TeamId { get; set; }

        [Required]
        [StringLength(1)]
        public string Name { get; set; }

        [Required]
        [StringLength(3)]
        public string ShortName { get; set; }

        [Required]
        [StringLength(1)]
        public string EmblemUrl { get; set; }

        [SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public ICollection<Match> Matches { get; set; }

    }
}