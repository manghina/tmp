import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface PostAdminProfessionalsParams {
  email: string;
  password: string;
  name: string;
  lastname: string;
  birthDate: string;
  phones: string[];
  specializations: string[];
  city: string;
  alboId: string;
}
export interface PostAdminProfessionalsResponseData {}
export default apiActionBuilder<
  PostAdminProfessionalsParams,
  ApiSuccessAction<
    PostAdminProfessionalsResponseData,
    PostAdminProfessionalsParams
  >,
  ApiFailAction<PostAdminProfessionalsParams>
>(
  "apis/admin/professionals/post",
  (
    params: PostAdminProfessionalsParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PostAdminProfessionalsParams>(
      {
        path: "/admin/professionals",
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
