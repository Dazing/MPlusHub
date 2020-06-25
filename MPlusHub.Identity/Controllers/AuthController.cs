using IdentityServer4.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using MPlusHub.Core.Models.DBModels;
using MPlusHub.Core.Models.ResponseModels;
using System.Security.Claims;
using System.Threading.Tasks;

namespace MPlusHub.Identity.Controllers
{
    public class AuthController : Controller
    {
        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;
        private readonly IIdentityServerInteractionService _interactionService;

        public AuthController(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            IIdentityServerInteractionService interactionService)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _interactionService = interactionService;
        }

        [HttpGet]
        public async Task<IActionResult> Logout(string logoutId)
        {
            await _signInManager.SignOutAsync();

            var logoutRequest = await _interactionService.GetLogoutContextAsync(logoutId);

            if (string.IsNullOrEmpty(logoutRequest.PostLogoutRedirectUri))
            {
                return RedirectToAction("Index", "Home");
            }

            return Redirect(logoutRequest.PostLogoutRedirectUri);
        }

        [HttpGet]
        public async Task<IActionResult> Login(string returnUrl)
        {
            var externalProviders = await _signInManager.GetExternalAuthenticationSchemesAsync();
            return View(new LoginResponse
            {
                ReturnUrl = returnUrl,
            });
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginResponse vm)
        {
            // check if the model is valid

            var result = await _signInManager.PasswordSignInAsync(vm.Username, vm.Password, false, false);

            if (result.Succeeded)
            {
                return Redirect(vm.ReturnUrl);
            }
            else if (result.IsLockedOut)
            {

            }

            return View();
        }

        [HttpGet]
        public IActionResult Register(string returnUrl)
        {
            return View(new RegisterResponse { ReturnUrl = returnUrl });
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterResponse vm)
        {
            if (!ModelState.IsValid)
            {
                return View(vm);
            }

            var user = new User(vm.Username);
            var result = await _userManager.CreateAsync(user, vm.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, false);

                return Redirect(vm.ReturnUrl);
            }

            return View();
        }
    }
}
