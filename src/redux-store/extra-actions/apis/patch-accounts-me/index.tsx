import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IAccount } from "@app/models/Account";

export interface PatchAccountMeParams {
  emailVerificationToken: string;
}
export interface PatchAccountsMeResponseData {
  account: IAccount;
}
export default apiActionBuilder<
  PatchAccountMeParams,
  ApiSuccessAction<PatchAccountsMeResponseData, PatchAccountMeParams>,
  ApiFailAction<PatchAccountMeParams>
>(
  "apis/accounts/me/patch",
  (
    params: PatchAccountMeParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PatchAccountMeParams>(
      {
        path: "/accounts/me",
        method: HttpMethod.PATCH,
        body: params,
      },
      options ?? {
        requestDelay: 0,
      },
      params,
    ),
  }),
);
