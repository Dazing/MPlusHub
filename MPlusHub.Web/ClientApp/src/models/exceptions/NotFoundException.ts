import { IException } from "./IException";

export class NotFoundException implements IException {
  message: string;
  name: string = 'Resource not found';

  constructor(message: string) {
    this.message = message
      ? message
      : 'The requested resource was not found.'
  }
}