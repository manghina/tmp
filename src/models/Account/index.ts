import { Flags } from "@app/models/Flags";

export interface IAccount {
  _id: string;
  email: string;
  emailVerified: boolean;
  type: "professional" | "user";
  flags?: {
    [key in Flags]?: boolean;
  };
}

export class Account implements IAccount {
  _id: string;
  email: string;
  emailVerified: boolean;
  type: "professional" | "user";
  flags?: {
    [key in Flags]?: boolean;
  };

  constructor(iAccount: IAccount) {
    this._id = iAccount._id;
    this.email = iAccount.email;
    this.emailVerified = iAccount.emailVerified;
    this.type = iAccount.type;
  }
}
