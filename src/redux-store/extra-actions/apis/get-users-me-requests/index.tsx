import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IRequest } from "@app/models/Request";

export interface GetUsersMeRequestsParams {}
export interface GetUsersMeRequestsResponseData {
  requests: IRequest[];
}
export default apiActionBuilder<
  GetUsersMeRequestsParams,
  ApiSuccessAction<GetUsersMeRequestsResponseData, GetUsersMeRequestsParams>,
  ApiFailAction<GetUsersMeRequestsParams>
>(
  "apis/users/me/requests/get",
  (
    params: GetUsersMeRequestsParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<GetUsersMeRequestsParams>(
      {
        path: `/users/me/requests?page=1&pageCount=10`,
        method: HttpMethod.GET,
      },
      options ?? {
        requestDelay: 0,
      },
      params,
    ),
  }),
);
