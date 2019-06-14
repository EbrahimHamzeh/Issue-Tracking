using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Ebrahim.issueTracking.Common {
    public static class IQueryableExtensions {
        public static IQueryable<T> ApplyPaging<T> (
            this IQueryable<T> query, IPagedQueryModel model) {
            if (model.Page <= 0) {
                model.Page = 1;
            }

            if (model.PageSize <= 0) {
                model.PageSize = 10;
            }

            return query.Skip ((model.Page - 1) * model.PageSize).Take (model.PageSize);
        }

        public static IQueryable<T> ApplyOrdering<T> (
            this IQueryable<T> query,
            IPagedQueryModel model,
            IDictionary<string, Expression<Func<T, object>>> columnsMap) {
            if (string.IsNullOrWhiteSpace (model.SortBy) || !columnsMap.ContainsKey (model.SortBy)) {
                return query;
            }

            if (model.IsAscending) {
                return query.OrderBy (columnsMap[model.SortBy]);
            } else {
                return query.OrderByDescending (columnsMap[model.SortBy]);
            }
        }
    }
}