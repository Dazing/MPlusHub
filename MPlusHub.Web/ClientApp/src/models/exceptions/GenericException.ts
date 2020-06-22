import { IException } from "./IException";

export class GenericException implements IException {
  message: string;
  name: string = 'Generic Exception';

  constructor(message: string) {
    this.message = message
      ? message
      : 'An unknown Error encountered.'
  }
}