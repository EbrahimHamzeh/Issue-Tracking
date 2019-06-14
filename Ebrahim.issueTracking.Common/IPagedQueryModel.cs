using System;

namespace Ebrahim.issueTracking.Common {
    public interface IPagedQueryModel {
        string SortBy { get; set; }
        bool IsAscending { get; set; }
        int Page { get; set; }
        int PageSize { get; set; }
    }
}