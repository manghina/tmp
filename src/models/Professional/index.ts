import { Specialization } from "@app/models/common/DoctorCommon";

export interface IProfessional {
  _id: string;
  accountId: string;
  name: string;
  lastname: string;
  birthDate: string;
  email: string;
  phones: string[];
  specializations: Specialization[];
  city: string;
  alboId: string;
  created: Date;
  v: number;
}

export class Professional implements IProfessional {
  _id!: string;
  accountId!: string;
  name!: string;
  lastname!: string;
  birthDate!: string;
  email!: string;
  phones!: string[];
  specializations!: Specialization[];
  city!: string;
  alboId!: string;
  created!: Date;
  v!: number;

  constructor(professional: IProfessional) {
    this.fromInterface(professional);
  }

  fromInterface(professional: IProfessional) {
    this._id = professional._id;
    this.accountId = professional.accountId;
    this.name = professional.name;
    this.lastname = professional.lastname;
    this.birthDate = professional.birthDate;
    this.email = professional.email;
    this.phones = professional.phones;
    this.specializations = professional.specializations;
    this.city = professional.city;
    this.alboId = professional.alboId;
    this.created = professional.created;
    this.v = professional.v;
  }
}
