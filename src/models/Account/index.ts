export interface IAccount {
  email: string;
  created: Date;
  type: "professional" | "user";
}

export class Account implements IAccount {
  email!: string;
  created!: Date;
  type!: "professional" | "user";

  constructor(iAccount: IAccount) {
    this.fromInterface(iAccount);
  }

  fromInterface(iAccount: IAccount) {
    this.email = iAccount.email;
    this.created = iAccount.created;
    this.type = iAccount.type;
  }
}
