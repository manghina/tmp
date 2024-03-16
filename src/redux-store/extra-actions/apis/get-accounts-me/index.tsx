import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IAccount } from "@app/models/Account";

export interface GetAccountsMeParams {}
export interface GetAccountsMeResponseData {
  account: IAccount;
}
export default apiActionBuilder<
  GetAccountsMeParams,
  ApiSuccessAction<GetAccountsMeResponseData, GetAccountsMeParams>,
  ApiFailAction<GetAccountsMeParams>
>(
  "apis/accounts/me/get",
  (params: GetAccountsMeParams, options?: ApiRequestPayloadBuilderOptions) => ({
    payload: apiRequestPayloadBuilder<GetAccountsMeParams>(
      {
        path: "/accounts/me",
        method: HttpMethod.GET,
      },
      options ?? {
        requestDelay: 0,
      },
      params,
    ),
  }),
);
