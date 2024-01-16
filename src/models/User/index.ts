export interface IUser {
  name: string;
  lastname: string;
  email: string;
  birthDate: string;
  accountId: string;
}

export class User implements IUser {
  name: string;
  lastname: string;
  email: string;
  birthDate: string;
  accountId: string;

  constructor(iUser: IUser) {
    this.name = iUser.name;
    this.lastname = iUser.lastname;
    this.email = iUser.email;
    this.birthDate = iUser.birthDate;
    this.accountId = iUser.accountId;
  }
}
