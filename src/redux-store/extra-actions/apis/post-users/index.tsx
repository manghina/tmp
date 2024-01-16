import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface PostUsersParams {
  name: string;
  lastname: string;
  birthDate: string;
}
export interface PostUsersResponseData {}
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
