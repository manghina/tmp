export enum RequestStatus {
  EXPIRING = "EXPIRING",
  AWAIT_USER_MESSAGE = "AWAIT_USER_MESSAGE",
  AWAIT_AI_MESSAGE = "AWAIT_AI_MESSAGE",
  SEARCHING_FOR_PROFESSIONAL = "SEARCHING_FOR_PROFESSIONAL",
  AWAIT_PROFESSIONAL_ACCEPTANCE = "AWAIT_PROFESSIONAL_ACCEPTANCE",
  PAYMENT_DUE = "PAYMENT_DUE",
  LEAVE_A_REVIEW = "LEAVE_A_REVIEW",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
  EXPIRED = "EXPIRED",
}
export interface IRequest {
  _id: string;
  status: RequestStatus;
  description: string;
}

export class Request implements IRequest {
  _id: string;
  status: RequestStatus;
  description: string;

  constructor(iRequest: IRequest) {
    this._id = iRequest._id;
    this.status = iRequest.status;
    this.description = iRequest.description;
  }
}
