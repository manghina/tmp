import { IProfessionalOffer } from "@app/models/ProfessionalOffer";

export interface ProfessionalOfferState {
  activeList: IProfessionalOffer[];
  archivedList: IProfessionalOffer[];
  archivedPage: number;
  archivedPerPage: number;
  archivedTotalCount: number | null;
  currentProfessionalOffer: IProfessionalOffer | null;
}
