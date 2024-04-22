import { IMedia, Media } from "@app/models/Media";
import { Modify } from "@app/models/common/TSUtility";

export interface IUser {
  name: string;
  lastName: string;
  email: string;
  birthDate: string;
  accountId: string;
  profileImage?: IMedia;
}

export class User implements Modify<IUser, { profileImage?: Media }> {
  name: string;
  lastName: string;
  email: string;
  birthDate: string;
  accountId: string;
  profileImage?: Media;

  constructor(iUser: IUser) {
    this.name = iUser.name;
    this.lastName = iUser.lastName;
    this.email = iUser.email;
    this.birthDate = iUser.birthDate;
    this.accountId = iUser.accountId;
    this.profileImage = iUser.profileImage
      ? new Media(iUser.profileImage)
      : undefined;
  }
}
