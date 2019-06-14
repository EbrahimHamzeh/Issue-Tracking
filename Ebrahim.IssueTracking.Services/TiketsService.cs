using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Ebrahim.issueTracking.Common;
using Ebrahim.Issuetracking.ViewModels;
using Ebrahim.IssueTracking.DataLayer.Context;
using Ebrahim.IssueTracking.DomainCkasses;
using Microsoft.EntityFrameworkCore;

namespace Ebrahim.IssueTracking.Services {
    public interface ITiketsService {
        Task<Tiket> GetTiketAsync (int id);
        Task<List<Tiket>> GetTiketsAsync ();
        Task<Tiket> AddTiketAsync (Tiket tiket);
        Task UpdateTiketAsync (Tiket tiket);
        Task DeleteTiketAsync (Tiket tiket);
        Task<PagedQueryResult<Tiket>> TiketPagedList (TiketQueryViewModel queryModel);
    }

    public class TiketsService : ITiketsService {

        private readonly IUnitOfWork _uow;
        private readonly DbSet<Tiket> _tikets;

        public TiketsService (IUnitOfWork uow) {
            _uow = uow;
            _uow.CheckArgumentIsNull (nameof (_uow));

            _tikets = _uow.Set<Tiket> ();
        }

        public async Task<Tiket> AddTiketAsync (Tiket tiket) {
            var tiketEntry = _tikets.Add (tiket);
            await _uow.SaveChangesAsync ();
            return tiketEntry.Entity;
        }

        public async Task DeleteTiketAsync (Tiket tiket) {
            _tikets.Remove (tiket);
            await _uow.SaveChangesAsync ();
        }

        public Task<Tiket> GetTiketAsync (int id) {
            return _tikets.FirstOrDefaultAsync (i => i.Id == id);
        }

        public Task<List<Tiket>> GetTiketsAsync () {
            return _tikets.OrderBy (tiket => tiket.Date).ToListAsync ();
        }

        public Task UpdateTiketAsync (Tiket tiket) {
            return Task.CompletedTask;
        }

        public async Task<PagedQueryResult<Tiket>> TiketPagedList (TiketQueryViewModel queryModel) {
            var pagedResult = new PagedQueryResult<Tiket> ();

            var query = _tikets.AsQueryable ();

            //TODO: Apply Filtering ... .where(p => p....) ...

            var columnsMap = new Dictionary<string, Expression<Func<Tiket, object>>> () {
                    ["title"] = p => p.Title, ["date"] = p => p.Date, ["status"] = p => p.Status
                };

            query = query.ApplyOrdering (queryModel, columnsMap);

            pagedResult.TotalItems = query.Count ();
            query = query.ApplyPaging (queryModel);
            pagedResult.Items = await query.ToListAsync ();
            return pagedResult;
        }
    }
}