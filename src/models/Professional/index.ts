import { Specialization } from "src/models/common/DoctorCommon";
import { IMedia, Media } from "@app/models/Media";
import { Modify } from "@app/models/common/TSUtility";

export interface IProfessional {
  _id: string;
  accountId: string;
  name: string;
  lastName: string;
  birthDate: string;
  email: string;
  phones: string[];
  specializations: Specialization[];
  city: string;
  alboId: string;
  created: Date;
  profilePictureUrl?: string;
  v: number;
}

export type IProfessionalSummary = Pick<
  IProfessional,
  "_id" | "name" | "lastName" | "email" | "specializations"
>;

export class Professional
  implements Modify<IProfessional, { profilePicture?: Media }>
{
  _id!: string;
  accountId!: string;
  name!: string;
  lastName!: string;
  birthDate!: string;
  email!: string;
  phones!: string[];
  specializations!: Specialization[];
  city!: string;
  alboId!: string;
  created!: Date;
  profilePictureUrl?: string;
  v!: number;

  constructor(iProfessional: IProfessional) {
    this.fromInterface(iProfessional);
  }

  fromInterface(iProfessional: IProfessional) {
    this._id = iProfessional._id;
    this.accountId = iProfessional.accountId;
    this.name = iProfessional.name;
    this.lastName = iProfessional.lastName;
    this.birthDate = iProfessional.birthDate;
    this.email = iProfessional.email;
    this.phones = iProfessional.phones;
    this.specializations = iProfessional.specializations;
    this.city = iProfessional.city;
    this.alboId = iProfessional.alboId;
    this.profilePictureUrl = iProfessional.profilePictureUrl;
    this.created = iProfessional.created;
    this.v = iProfessional.v;
  }
}
