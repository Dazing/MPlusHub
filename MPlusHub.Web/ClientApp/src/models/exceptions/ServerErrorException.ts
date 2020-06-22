import { IException } from "./IException";

export class ServerErrorException implements IException {
  message: string;
  name: string = 'Server Error';

  constructor(message: string) {
    this.message = message
      ? message
      : 'A Server Error occured, please try again later.'
  }
}