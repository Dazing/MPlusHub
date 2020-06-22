import { ValidateResponse } from "./ValidateResponse";

export class HttpService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = window.location.origin;
  }

  Request = (method: string, endpoint: string, payload: string) => fetch(`${this.baseUrl}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(this.GetAuthHeaders()),
    },
    body: payload ? JSON.stringify(payload) : null,
  })
    .then((response: Response ) => ValidateResponse(response))
    .catch((error) => { throw error; })
    .then(response => response)

  GetAccessToken = (): string => {
    const accessToken = '';
    return accessToken;
  }

  GetAuthHeaders = (): HeadersInit => {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${this.GetAccessToken()}`
    };
  }
}