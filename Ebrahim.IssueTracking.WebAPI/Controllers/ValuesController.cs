using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Ebrahim.IssueTracking.Services.UserIdentity;
using Microsoft.AspNetCore.Mvc;
using Ebrahim.issueTracking.Common;

namespace Ebrahim.IssueTracking.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IUsersService _usersService;
        public ValuesController(IUsersService usersService)
        {
            _usersService = usersService;
            _usersService.CheckArgumentIsNull(nameof(usersService));
        }

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var user = await _usersService.FindUserAsync(1);

            if (user.Username == "admin")
            {
                return Ok("همه چیز ارومه");
            }

            else
            {
                return NotFound();
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
