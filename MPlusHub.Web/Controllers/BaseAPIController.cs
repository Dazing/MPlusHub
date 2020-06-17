using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Filters;

namespace MPlusHub.Web.Controllers
{
    public abstract class BaseAPIController : Controller
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);

            if (!ModelState.IsValid)
            {
                // Return bad request when model state is not valid
                context.Result = BadRequest("The data provided in the request to the server is invalid, please send a valid request.");
            }
        }

        protected ActionResult<T> TryExecute<T>(Func<T> command)
        {
            try
            {
                return this.Ok(command());
            }
            catch (InvalidOperationException ex)
            {
                return this.BadRequest(ex.Message);
            }
            catch (KeyNotFoundException ex)
            {
                return this.NotFound(ex.Message);
            }
            catch (Exception e)
            {
                return this.StatusCode(500, e.Message);
            }
        }

        protected ActionResult TryExecute(Action command)
        {
            try
            {
                command();
                return Ok();
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (InvalidOperationException ex)
            {
                return this.BadRequest(ex.Message);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        protected async Task<ActionResult<T>> TryExecute<T>(Func<Task<T>> command)
        {
            try
            {
                return this.Ok(await command());
            }
            catch (InvalidOperationException ex)
            {
                return this.BadRequest(ex.Message);
            }
            catch (KeyNotFoundException ex)
            {
                return this.NotFound(ex.Message);
            }
            catch (Exception e)
            {
                return this.StatusCode(500, e.Message);
            }
        }

        protected async Task<ActionResult> TryExecute(Func<Task> command)
        {
            try
            {
                await command();
                return Ok();
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (InvalidOperationException ex)
            {
                return this.BadRequest(ex.Message);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}