import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IUser } from "@app/models/User";

export interface PatchUsersMeParams {
  name?: string;
  lastName?: string;
  birthDate?: string;
  phonePrefix?: string;
  phoneNumber?: string;
  country?: string;
  gender?: string;
  profilePictureId?: string;
}
export interface PatchUsersMeResponseData {
  user: IUser;
}
export default apiActionBuilder<
  PatchUsersMeParams,
  ApiSuccessAction<PatchUsersMeResponseData, PatchUsersMeParams>,
  ApiFailAction<PatchUsersMeParams>
>(
  "apis/users/me/patch",
  (params: PatchUsersMeParams, options?: ApiRequestPayloadBuilderOptions) => ({
    payload: apiRequestPayloadBuilder<PatchUsersMeParams>(
      {
        path: "/users/me",
        method: HttpMethod.PATCH,
        body: params,
      },
      options ?? {
        requestDelay: 0,
      },
      params,
    ),
  }),
);
