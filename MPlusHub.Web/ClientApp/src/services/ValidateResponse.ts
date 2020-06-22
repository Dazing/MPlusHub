import { BadRequestException } from "../models/exceptions/BadRequestException";
import { ServerErrorException } from "../models/exceptions/ServerErrorException";
import { NotFoundException } from "../models/exceptions/NotFoundException";
import { GenericException } from "../models/exceptions/GenericException";


export const GenerateException = (response: Response, errorBody: string) => {
  switch (response.status) {
    case 400:
      return new BadRequestException(errorBody);
    case 404:
      return new NotFoundException(errorBody);
    case 500:
      return new ServerErrorException(errorBody);
    default:
      return new GenericException(errorBody);
  }
};

export const ValidateResponse = (response: Response) => {
  if (!response.ok) {
    return response.text().then((errorBody) => {
      throw GenerateException(response, errorBody);
    });
  }
  return response.json();
};
