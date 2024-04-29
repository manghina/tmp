export type IUserSummary = Pick<
  IUser,
  "_id" | "name" | "lastName" | "email" | "profilePictureUrl"
>;

export interface IUser {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  birthDate: string;
  accountId: string;
  profilePictureUrl?: string;
}

export class User implements IUser {
  _id: string;
  name: string;
  lastName: string;
  email: string;
  birthDate: string;
  accountId: string;
  profilePictureUrl?: string;

  constructor(iUser: IUser) {
    this._id = iUser._id;
    this.name = iUser.name;
    this.lastName = iUser.lastName;
    this.email = iUser.email;
    this.birthDate = iUser.birthDate;
    this.accountId = iUser.accountId;
    this.profilePictureUrl = iUser.profilePictureUrl;
  }
}
