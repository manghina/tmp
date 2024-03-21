import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IAccount } from "../../../../models/Account";

export interface PostAccountsParams {
  email: string;
  password: string;
}
export interface PostAccountsResponseData {
  account: IAccount;
}
export default apiActionBuilder<
  PostAccountsParams,
  ApiSuccessAction<PostAccountsResponseData, PostAccountsParams>,
  ApiFailAction<PostAccountsParams>
>(
  "apis/accounts/post",
  (params: PostAccountsParams, options?: ApiRequestPayloadBuilderOptions) => ({
    payload: apiRequestPayloadBuilder<PostAccountsParams>(
      {
        path: "/accounts",
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
