using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;
using System.Collections.Generic;

namespace MPlusHub.Identity
{
    public static class DevelopmentIdentityConfiguration
    {
        public static IEnumerable<IdentityResource> GetIdentityResources() =>
            new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
            };

        public static IEnumerable<ApiResource> GetApis() =>
            new List<ApiResource> { new ApiResource("MPlusHubAPI"),};

        public static IEnumerable<Client> GetClients() =>
            new List<Client> {
                new Client {
                    ClientId = "MPlusHub.Web",

                    AllowedGrantTypes = GrantTypes.Code,
                    RequirePkce = true,
                    RequireClientSecret = false,

                    RedirectUris = { "https://localhost:44359" },
                    PostLogoutRedirectUris = { "https://localhost:44359" },
                    AllowedCorsOrigins = { "https://localhost:44359" },

                    AllowedScopes = {
                        IdentityServerConstants.StandardScopes.OpenId,
                        "MPlusHubAPI",
                    },

                    AllowAccessTokensViaBrowser = true,
                    AllowOfflineAccess = true,
                    RequireConsent = false,
                },

            };
    }
}
