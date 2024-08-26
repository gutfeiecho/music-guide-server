export class ResultWrapper {
  status: number;
  message: string;
  data: null | Object;
  constructor(status, message, data) {
    this.status = status;
    this.message = message;
    this.data = data;
  }

  static success(data = null, message = 'Success') {
    return new ResultWrapper(200, message, data);
  }

  static created(data = null, message = 'Created') {
    return new ResultWrapper(201, message, data);
  }

  static badRequest(message = 'Bad Request') {
    return new ResultWrapper(400, message, null);
  }

  static unauthorized(message = 'Unauthorized') {
    return new ResultWrapper(401, message, null);
  }

  static notFound(message = 'Not Found') {
    return new ResultWrapper(404, message, null);
  }

  static internalServerError(message = 'Internal Server Error') {
    return new ResultWrapper(500, message, null);
  }
}