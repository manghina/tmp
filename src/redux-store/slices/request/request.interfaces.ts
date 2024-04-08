import { IRequest } from "@app/models/Request";
import { IProfessionalOffer } from "@app/models/ProfessionalOffer";

export interface RequestsState {
  list: IRequest[];
  currentRequest: IRequest | null;
  currentRequestProfessionalOffers?: IProfessionalOffer[] | null;
  isPolling: boolean;
}
