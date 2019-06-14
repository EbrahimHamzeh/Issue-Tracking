using System;

namespace Ebrahim.IssueTracking.DomainCkasses {
    public class Tiket {
        public int Id { set; get; }
        public string Title { set; get; }
        public string Content { set; get; }
        public DateTime Date { get; set; }

        public TiketStatus Status { get; set; }
    }

    public enum TiketStatus {
        Open,
        Close
    }
}