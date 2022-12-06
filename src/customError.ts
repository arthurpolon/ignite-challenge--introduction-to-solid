interface ICustomErrorConstructor {
  status: number;
  message: string;
}

export class CustomError {
  status: number;
  message: string;

  constructor({ status, message }: ICustomErrorConstructor) {
    this.status = status;
    this.message = message;
  }
}
