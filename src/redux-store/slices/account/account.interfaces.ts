import { IUser } from "@app/models/User";
import { IAccount } from "@app/models/Account";
import { IProfessional } from "@app/models/Professional";

export interface AccountState {
  account: IAccount | null;
  userMe: IUser | null;
  professionalMe: IProfessional | null;
  cookie: {
    name: string;
    value: string;
  } | null;
}
