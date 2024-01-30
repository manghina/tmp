import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IRequest } from "@app/models/Request";

export interface PostUsersMeRequestsParams {
  userMessage: string;
}
export interface PostUsersMeRequestsResponseData {
  request: IRequest;
}
export default apiActionBuilder<
  PostUsersMeRequestsParams,
  ApiSuccessAction<PostUsersMeRequestsResponseData, PostUsersMeRequestsParams>,
  ApiFailAction<PostUsersMeRequestsParams>
>(
  "apis/users/me/requests/post",
  (
    params: PostUsersMeRequestsParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PostUsersMeRequestsParams>(
      {
        path: "/users/me/requests",
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
