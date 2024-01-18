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
  recoveryPasswordToken: string;
}
export interface PatchPasswordsResponseData {
  message: string;
}
export default apiActionBuilder<
  PatchPasswordsParams,
  ApiSuccessAction<PatchPasswordsParams, PatchPasswordsParams>,
  ApiFailAction<PatchPasswordsParams>
>(
  "apis/accounts/patch",
  (
    params: PatchPasswordsParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PatchPasswordsParams>(
      {
        path: "/password",
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
