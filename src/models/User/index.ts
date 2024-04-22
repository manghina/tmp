import { IMedia, Media } from "@app/models/Media";
import { Modify } from "@app/models/common/TSUtility";

export interface IUser {
  name: string;
  lastName: string;
  email: string;
  birthDate: string;
  accountId: string;
  profilePicture?: IMedia;
}

export class User implements Modify<IUser, { profilePicture?: Media }> {
  name: string;
  lastName: string;
  email: string;
  birthDate: string;
  accountId: string;
  profilePicture?: Media;

  constructor(iUser: IUser) {
    this.name = iUser.name;
    this.lastName = iUser.lastName;
    this.email = iUser.email;
    this.birthDate = iUser.birthDate;
    this.accountId = iUser.accountId;
    this.profilePicture = iUser.profilePicture
      ? new Media(iUser.profilePicture)
      : undefined;
  }
}
