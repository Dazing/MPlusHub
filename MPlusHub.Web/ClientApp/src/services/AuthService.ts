import { ServiceProvider } from './ServiceProvider'
import Oidc, { UserManager, WebStorageStateStore, UserManagerSettings } from 'oidc-client';
import { ApplicationName, Authorities } from '../commons/AuthConstants';

export class AuthService {
  private userManager: UserManager | null = null;
  private serviceProvider: ServiceProvider;

  constructor(serviceProvider: ServiceProvider) {
    this.serviceProvider = serviceProvider;
    this.EnsureUserManager();

    if (window.location.search.includes('code=')) {
      this.userManager?.signinRedirectCallback(window.location.href).then(user => {
        console.log("signinRedirectCallback", user);
        window.history.replaceState({}, document.title, `${window.location.origin}${window.location.pathname}`);
      }).catch(function (err) {
        console.debug('User not logged', err);
      });
    }
  }

  public Login = async (): Promise<void> => {
    await this.EnsureUserManager();

    if (this.userManager) {
      await this.userManager.signinRedirect(); // ! args left out
    }
  }

  public GetAccessToken = async (): Promise<string> => {
    await this.EnsureUserManager();

    this.userManager?.getUser().then(_ => {
      console.log(_);
    })

    const user = this.userManager
      ? await this.userManager.getUser()
      : null;

    return user ? user.access_token : '';
  }

  public EnsureUserManager = async () => {
    const authority = window.location.host.includes('localhost')
      ? Authorities.Localhost
      : Authorities.Production;

    if (!this.userManager) {
      const settings = {
        userStore: new Oidc.WebStorageStateStore({ store: window.localStorage }),
        authority,
        client_id: ApplicationName,
        redirect_uri: `https://${window.location.host}`,
        post_logout_redirect_uri: `https://${window.location.host}/`,
        response_type: "code",
        scope: "MPlusHubAPI",
      };
      this.userManager = new UserManager(settings);

      this.userManager.events.addUserSignedOut(async () => {
        if (this.userManager) await this.userManager.removeUser();
      });
      this.userManager.events.addAccessTokenExpired(async () => {
        if (this.userManager) await this.userManager.signinSilent()
      });
    }
    return;
  }
}