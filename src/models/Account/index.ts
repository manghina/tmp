export interface IAccount {
  _id: string;
  email: string;
  emailVerified: boolean;
  type: "professional" | "user";
}

export class Account implements IAccount {
  _id: string;
  email: string;
  emailVerified: boolean;
  type: "professional" | "user";

  constructor(iAccount: IAccount) {
    this._id = iAccount._id;
    this.email = iAccount.email;
    this.emailVerified = iAccount.emailVerified;
    this.type = iAccount.type;
  }
}
