import { IUser } from "@app/models/User";

export interface UserState {
  me: IUser;
  cookie: {
    name: string;
    value: string;
  } | null;
}
