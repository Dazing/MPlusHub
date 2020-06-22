import { HttpService } from "./HttpService";

export class ServiceProvider {
  HttpService: HttpService;

  constructor(
    httpService: HttpService,
  ) {
    this.HttpService = httpService;
  }
}
