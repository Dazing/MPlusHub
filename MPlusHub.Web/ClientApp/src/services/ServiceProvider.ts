import { HttpService } from "./HttpService";
import { AuthService } from "./AuthService";

export class ServiceProvider {
  HttpService: HttpService | null = null;
  AuthService: AuthService | null = null;

  constructor(
  ) {
  }
  
}
