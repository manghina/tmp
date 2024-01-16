import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface PostAccountsParams {
  email: string;
  password: string;
}
export interface PostAccountsResponseData {}
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
