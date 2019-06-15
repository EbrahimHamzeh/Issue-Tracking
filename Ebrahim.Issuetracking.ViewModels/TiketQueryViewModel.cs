using System;
using Ebrahim.issueTracking.Common;

namespace Ebrahim.Issuetracking.ViewModels {
    public class TiketQueryViewModel : IPagedQueryModel {
        /// <summary>
        /// مرتب کردن بر اساس
        /// </summary>
        public string SortBy { get; set; }
        public bool IsAscending { get; set; }
        public int Page { get; set; }
        public int PageSize { get; set; }
    }
}