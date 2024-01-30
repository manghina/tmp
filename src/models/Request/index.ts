import { IMessage } from "../Message";

export enum ChatStatus {
  PROCESSING = "processing",
  WAITING_USER_INPUT = "waiting-user-input",
}

export enum RequestStatus {
  COLLECTING_INFORMATION = "collecting-information",
  PROFESSIONAL_OFFERS_CREATED = "professional_offers_created",
}

export interface IRequest {
  _id: string;
  user: {
    _id: string;
    name: string;
    lastname: string;
    email: string;
  };
  chatStatus: ChatStatus;
  currentStatus: RequestStatus;
  messages?: IMessage[];
}

export class Request implements IRequest {
  _id: string;
  user: {
    _id: string;
    name: string;
    lastname: string;
    email: string;
  };
  chatStatus: ChatStatus;
  currentStatus: RequestStatus;
  messages?: IMessage[];

  constructor(iRequest: IRequest) {
    this._id = iRequest._id;
    this.user = iRequest.user;
    this.chatStatus = iRequest.chatStatus;
    this.currentStatus = iRequest.currentStatus;
    this.messages = iRequest.messages;
  }

  toInterface(): IRequest {
    return {
      _id: this._id,
      user: this.user,
      chatStatus: this.chatStatus,
      currentStatus: this.currentStatus,
      messages: this.messages,
    };
  }
}
