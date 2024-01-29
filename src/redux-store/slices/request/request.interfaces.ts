import { IRequest } from "@app/models/Request";

export interface RequestsState {
  list: IRequest[];
  currentRequest: IRequest | null;
  isPolling: boolean;
}
