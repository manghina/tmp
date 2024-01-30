import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IRequest } from "@app/models/Request";

export interface PostUsersMeRequestsMessagesByRequestIdParams {
  requestId: string;
  userMessage: string;
}
export interface PostUsersMeRequestsMessagesByRequestIdResponseData {
  request: IRequest;
}
export default apiActionBuilder<
  PostUsersMeRequestsMessagesByRequestIdParams,
  ApiSuccessAction<
    PostUsersMeRequestsMessagesByRequestIdResponseData,
    PostUsersMeRequestsMessagesByRequestIdParams
  >,
  ApiFailAction<PostUsersMeRequestsMessagesByRequestIdParams>
>(
  "apis/users/me/requests/{requestId}/messages/post",
  (
    params: PostUsersMeRequestsMessagesByRequestIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload:
      apiRequestPayloadBuilder<PostUsersMeRequestsMessagesByRequestIdParams>(
        {
          path: `/users/me/requests/${params.requestId}/messages`,
          method: HttpMethod.POST,
          body: {
            userMessage: params.userMessage,
          },
        },
        options ?? {
          requestDelay: 0,
        },
        params,
      ),
  }),
);
