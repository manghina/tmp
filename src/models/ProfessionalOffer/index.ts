import { IProfessionalSummary } from "@app/models/Professional";
import { IRequestSummary } from "@app/models/Request";
import { Slot } from "@app/models/Slot";

export enum ProfessionalOfferStatus {
  Pending = "Pending",
  Accepted = "Accepted",
  Refused = "Refused",
  readyToBeAccepted = "readyToBeAccepted",
}

export type IProfessionalOfferSummary = Pick<
  IProfessionalOffer,
  "_id" | "request" | "professional" | "created"
>;

export type IProfessionalOffer = {
  _id: string;
  slots?: Slot[];
  request: IRequestSummary;
  professional: IProfessionalSummary;
  status: ProfessionalOfferStatus;
  selectedSlotIndex?: string;
  created: Date;
  v: number;
};

export class ProfessionalOffer implements IProfessionalOffer {
  _id: string;
  slots?: Slot[];
  request: IRequestSummary;
  professional: IProfessionalSummary;
  status: ProfessionalOfferStatus;
  selectedSlotIndex?: string;
  created: Date;
  v: number;

  constructor(iProfessionalOffer: IProfessionalOffer) {
    this._id = iProfessionalOffer._id;
    this.slots = iProfessionalOffer.slots ?? [];
    this.request = iProfessionalOffer.request;
    this.professional = iProfessionalOffer.professional;
    this.status = iProfessionalOffer.status;
    this.selectedSlotIndex = iProfessionalOffer.selectedSlotIndex;
    this.created = iProfessionalOffer.created;
    this.v = iProfessionalOffer.v;
  }
}
