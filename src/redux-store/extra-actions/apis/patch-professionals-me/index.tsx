import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IProfessional } from "@app/models/Professional";

export interface PatchProfessionalsMeParams {
  name?: string;
  lastName?: string;
  birthDate?: string;
  profilePictureId?: string;
}
export interface PatchProfessionalsMeResponseData {
  professional: IProfessional;
}
export default apiActionBuilder<
  PatchProfessionalsMeParams,
  ApiSuccessAction<
    PatchProfessionalsMeResponseData,
    PatchProfessionalsMeParams
  >,
  ApiFailAction<PatchProfessionalsMeParams>
>(
  "apis/professionals/me/patch",
  (
    params: PatchProfessionalsMeParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PatchProfessionalsMeParams>(
      {
        path: "/professionals/me",
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
