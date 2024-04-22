import { IMedia, Media } from "@app/models/Media";
import { Modify } from "@app/models/common/TSUtility";

export interface IUser {
  name: string;
  lastName: string;
  email: string;
  birthDate: string;
  accountId: string;
  media?: IMedia;
}

export class User implements Modify<IUser, { media?: Media }> {
  name: string;
  lastName: string;
  email: string;
  birthDate: string;
  accountId: string;
  media?: Media;

  constructor(iUser: IUser) {
    this.name = iUser.name;
    this.lastName = iUser.lastName;
    this.email = iUser.email;
    this.birthDate = iUser.birthDate;
    this.accountId = iUser.accountId;
    this.media = iUser.media ? new Media(iUser.media) : undefined;
  }
}
