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
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ebrahim.IssueTracking.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("CorsPolicy")]
    [Authorize]
    [Produces("application/json")]
    public class TiketController : Controller
    {

        private readonly ITiketsService _tiketsService;
        private readonly IUnitOfWork _uow;

        public TiketController(ITiketsService tiketsService, IUnitOfWork uow)
        {
            _tiketsService = tiketsService;
            _tiketsService.CheckArgumentIsNull(nameof(tiketsService));

            _uow = uow;
            _uow.CheckArgumentIsNull(nameof(_uow));
        }

        /// <summary>
        ///  نمایش لیست تیکت ها
        /// </summary>
        /// <param name="queryModel">قالب ویژگی های دریافتی لیست مانند فیلتر های و مرتب سازی ها</param>
        /// <returns>لیست تیکت ها به همراه شمارش تمام تیکت ها</returns>
        /// <remarks>
        ///این یک مثال برای آموزش است \
        /// PATCH /authors/id \
        /// [ \
        ///     { \
        ///       "op": "replace", \
        ///       "path": "/firstname", \
        ///       "value": "new first name" \
        ///       } \
        /// ] \
        /// </remarks>
        /// <response code="404">شما دسترسی به تیکت ها ندارید</response>
        /// <response code="400">در اطلاعات ارسالی شما مشکلی وجود دارد</response>
        /// <response code="200">موفق</response>
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [HttpGet("[action]")]
        public async Task<PagedQueryResult<Tiket>> GetPagedTikets(TiketQueryViewModel queryModel)
        {

            return await _tiketsService.TiketPagedList(queryModel);
        }
    }
}