export interface IUser {
  name: string;
  lastName: string;
  email: string;
  birthDate: string;
  accountId: string;
}

export class User implements IUser {
  name: string;
  lastName: string;
  email: string;
  birthDate: string;
  accountId: string;

  constructor(iUser: IUser) {
    this.name = iUser.name;
    this.lastName = iUser.lastName;
    this.email = iUser.email;
    this.birthDate = iUser.birthDate;
    this.accountId = iUser.accountId;
  }
}
