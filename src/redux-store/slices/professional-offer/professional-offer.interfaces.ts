import { IProfessionalOffer } from "@app/models/ProfessionalOffer";

export interface ProfessionalOfferState {
  list: IProfessionalOffer[];
  currentProfessionalOffer: IProfessionalOffer | null;
}
