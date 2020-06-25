import { ValidateResponse } from "./ValidateResponse";
import { ServiceProvider } from "./ServiceProvider";

export class HttpService {
  private baseUrl: string;
  private serviceProvider: ServiceProvider;

  constructor(serviceProvider: ServiceProvider) {
    this.baseUrl = window.location.origin;
    this.serviceProvider = serviceProvider;
  }

  Request = async (
    method: string,
    endpoint: string,
    payload: JSON | null = null,
  ) => {
    const authHeaders = await this.GetAuthHeaders();
    return fetch(`${this.baseUrl}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...authHeaders,
      },
      body: payload ? JSON.stringify(payload) : null,
    })
      .then((response: Response) => ValidateResponse(response))
      .catch((error) => { throw error; })
      .then(response => response);
  }

  RequestPublic = async (
    method: string,
    endpoint: string,
    payload: JSON | null = null,
  ) => {
    return fetch(`${this.baseUrl}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload ? JSON.stringify(payload) : null,
    })
      .then((response: Response) => ValidateResponse(response))
      .catch((error) => { throw error; })
      .then(response => response);
  }

  GetAuthHeaders = async (): Promise<HeadersInit> => {
    const authService = await this.serviceProvider.AuthService;
    const token = authService ? await authService.GetAccessToken() : '';
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      //'Authorization': `Bearer asd`
      'Authorization': `Bearer ${token}`
    };
  }
}