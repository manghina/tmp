import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IAccount } from "../../../../models/Account";

export interface PostAccountsSessionsParams {
  email: string;
  password: string;
  isSigningUp?: boolean;
}
export interface PostAccountsSessionsResponseData {
  account: IAccount;
  cookie: {
    name: string;
    value: string;
  };
}
export default apiActionBuilder<
  PostAccountsSessionsParams,
  ApiSuccessAction<
    PostAccountsSessionsResponseData,
    PostAccountsSessionsParams
  >,
  ApiFailAction<PostAccountsSessionsParams>
>(
  "apis/accounts/sessions/post",
  (
    params: PostAccountsSessionsParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PostAccountsSessionsParams>(
      {
        path: "/accounts/sessions",
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
