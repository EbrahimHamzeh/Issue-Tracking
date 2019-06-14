using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Ebrahim.issueTracking.Common;
using Ebrahim.Issuetracking.ViewModels;
using Ebrahim.IssueTracking.DataLayer.Context;
using Ebrahim.IssueTracking.DomainCkasses;
using Ebrahim.IssueTracking.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Ebrahim.IssueTracking.WebAPI.Controllers {
    [Route ("api/[controller]")]
    [EnableCors("CorsPolicy")]
    [Authorize]
    public class TiketController : Controller {

        private readonly ITiketsService _tiketsService;
        private readonly IUnitOfWork _uow;

        public TiketController (ITiketsService tiketsService, IUnitOfWork uow) {
            _tiketsService = tiketsService;
            _tiketsService.CheckArgumentIsNull (nameof (tiketsService));

            _uow = uow;
            _uow.CheckArgumentIsNull (nameof (_uow));
        }

        [HttpGet ("[action]")]
        public async Task<PagedQueryResult<Tiket>> GetPagedTikets (TiketQueryViewModel queryModel) {

            return await _tiketsService.TiketPagedList (queryModel);
        }
    }
}