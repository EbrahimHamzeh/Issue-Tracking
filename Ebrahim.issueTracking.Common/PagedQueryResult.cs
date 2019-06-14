using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ebrahim.issueTracking.Common {
    public class PagedQueryResult<T> {
        public int TotalItems { get; set; }
        public List<T> Items { get; set; }
    }
}