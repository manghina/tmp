import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IUser } from "../../../../models/User";
import { IAccount } from "../../../../models/Account";

export interface PostUsersParams {
  name: string;
  lastName: string;
  birthDate: string;
}
export interface PostUsersResponseData {
  account: IAccount;
  user: IUser;
}
export default apiActionBuilder<
  PostUsersParams,
  ApiSuccessAction<PostUsersResponseData, PostUsersParams>,
  ApiFailAction<PostUsersParams>
>(
  "apis/users/post",
  (params: PostUsersParams, options?: ApiRequestPayloadBuilderOptions) => ({
    payload: apiRequestPayloadBuilder<PostUsersParams>(
      {
        path: "/users",
        method: HttpMethod.POST,
        body: params,
      },
      options ?? {
        requestDelay: 0,
      },
      params,
    ),
  }),
);
