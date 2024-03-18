import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface PatchPasswordsParams {
  email: string;
  newPassword: string;
  otpCode: string;
}
export interface PatchPasswordsResponseData {
  message: string;
}
export default apiActionBuilder<
  PatchPasswordsParams,
  ApiSuccessAction<PatchPasswordsResponseData, PatchPasswordsParams>,
  ApiFailAction<PatchPasswordsParams>
>(
  "apis/accounts/passwords/patch",
  (
    params: PatchPasswordsParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PatchPasswordsParams>(
      {
        path: "/accounts/password",
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
