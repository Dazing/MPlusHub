import { IException } from "./IException";

export class BadRequestException implements IException {
  message: string;
  name: string = 'Bad Request';

  constructor(message: string) {
    this.message = message
      ? message
      : 'A invalid request was made.'
  }
}