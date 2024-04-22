import { IMedia, Media } from "@app/models/Media";
import { Modify } from "@app/models/common/TSUtility";

export interface IUser {
  name: string;
  lastName: string;
  email: string;
  birthDate: string;
  accountId: string;
  profilePictureUrl?: string;
}

export class User implements Modify<IUser, { profilePicture?: Media }> {
  name: string;
  lastName: string;
  email: string;
  birthDate: string;
  accountId: string;
  profilePictureUrl?: string;

  constructor(iUser: IUser) {
    this.name = iUser.name;
    this.lastName = iUser.lastName;
    this.email = iUser.email;
    this.birthDate = iUser.birthDate;
    this.accountId = iUser.accountId;
    this.profilePictureUrl = iUser.profilePictureUrl;
  }
}
