import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface PostRecoveryPasswordTokensParams {
  email: string;
}
export interface PostRecoveryPasswordTokensResponseData {
  message: string;
}
export default apiActionBuilder<
  PostRecoveryPasswordTokensParams,
  ApiSuccessAction<
    PostRecoveryPasswordTokensResponseData,
    PostRecoveryPasswordTokensParams
  >,
  ApiFailAction<PostRecoveryPasswordTokensParams>
>(
  "apis/accounts/recovery-password-tokens/post",
  (
    params: PostRecoveryPasswordTokensParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PostRecoveryPasswordTokensParams>(
      {
        path: "/accounts/recovery-password-tokens",
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
