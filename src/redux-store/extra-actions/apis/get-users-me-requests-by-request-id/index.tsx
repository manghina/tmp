import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IRequest } from "@app/models/Request";

export interface GetUsersMeRequestsByRequestIdParams {
  requestId: string;
}
export interface GetUsersMeRequestsByRequestIdResponseData {
  request: IRequest;
}
export default apiActionBuilder<
  GetUsersMeRequestsByRequestIdParams,
  ApiSuccessAction<
    GetUsersMeRequestsByRequestIdResponseData,
    GetUsersMeRequestsByRequestIdParams
  >,
  ApiFailAction<GetUsersMeRequestsByRequestIdParams>
>(
  "apis/users/me/requests/{requestId}/get",
  (
    params: GetUsersMeRequestsByRequestIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<GetUsersMeRequestsByRequestIdParams>(
      {
        path: `/users/me/requests/${params.requestId}`,
        method: HttpMethod.GET,
      },
      options ?? {
        requestDelay: 0,
      },
      params,
    ),
  }),
);
