import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IRequest, RequestStatus } from "@app/models/Request";

export interface PatchUsersMeRequestsByRequestIdParams {
  requestId: string;
  status: RequestStatus;
}

export interface PatchUsersMeRequestsByRequestIdResponseData {
  request: IRequest;
}

export default apiActionBuilder<
  PatchUsersMeRequestsByRequestIdParams,
  ApiSuccessAction<
    PatchUsersMeRequestsByRequestIdResponseData,
    PatchUsersMeRequestsByRequestIdParams
  >,
  ApiFailAction<PatchUsersMeRequestsByRequestIdParams>
>(
  "apis/users/me/requests/{requestId}/patch",
  (
    params: PatchUsersMeRequestsByRequestIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PatchUsersMeRequestsByRequestIdParams>(
      {
        path: `/users/me/requests/${params.requestId}`,
        method: HttpMethod.PATCH,
        body: {
          status: params.status,
        },
      },
      options ?? {
        requestDelay: 0,
      },
      params,
    ),
  }),
);
