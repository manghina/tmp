import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IUser } from "../../../../models/User";

export interface GetUsersMeParams {}
export interface GetUsersMeResponseData {
  user: IUser;
}
export default apiActionBuilder<
  GetUsersMeParams,
  ApiSuccessAction<GetUsersMeResponseData, GetUsersMeParams>,
  ApiFailAction<GetUsersMeParams>
>(
  "apis/users/me/get",
  (params: GetUsersMeParams, options?: ApiRequestPayloadBuilderOptions) => ({
    payload: apiRequestPayloadBuilder<GetUsersMeParams>(
      {
        path: "/users/me",
        method: HttpMethod.GET,
      },
      options ?? {
        requestDelay: 0,
      },
      params,
    ),
  }),
);
