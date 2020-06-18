import { UserAgentApplication } from "msal";


const tokenRequest = {
  scopes: ['https://volvocars.onmicrosoft.com/6ef100f0-e890-469e-bcf1-c3a75bb0bef1/user_impersonation']
};

export default class AuthService {
  constructor() {
    var msalConfig = {
      auth: {
        clientId: 'c5dfc78c-3bc2-4e46-b433-648ab24890d8',
        authority: 'https://login.microsoftonline.com/81fa766e-a349-4867-8bf4-ab35e250a08f',
        redirectUri: `${window.location.protocol}//${window.location.host}/`,
      },
    };

    this.userApp = new UserAgentApplication(msalConfig);
    this.userApp.handleRedirectCallback(() => false)
  }

  static getCurrent = () => {
    if (!AuthService.authService) {
      AuthService.authService = new AuthService();
    }
    return AuthService.authService;
  }

  login = async () => {
    if (window.location.href.indexOf('id_token') >= 0) {
      return '';
    }
    const userAcc = this.userApp.getAccount();
    if (!userAcc) {
      this.userApp.loginRedirect(tokenRequest);
    } else {
      return userAcc;
    }
  }

  getAccessToken = async () => {
    const token = await this.userApp.acquireTokenSilent(tokenRequest);
    return token.accessToken;
  }

  getAuthHeaders = async () => {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${await this.getAccessToken()}`
    };
  }

};
