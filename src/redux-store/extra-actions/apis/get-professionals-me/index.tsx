import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IProfessional } from "@app/models/Professional";

export interface GetProfessionalsMeParams {}
export interface GetProfessioanlsMeResponseData {
  professional: IProfessional;
}
export default apiActionBuilder<
  GetProfessionalsMeParams,
  ApiSuccessAction<GetProfessioanlsMeResponseData, GetProfessionalsMeParams>,
  ApiFailAction<GetProfessionalsMeParams>
>(
  "apis/professionals/me/get",
  (
    params: GetProfessionalsMeParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<GetProfessionalsMeParams>(
      {
        path: "/professionals/me",
        method: HttpMethod.GET,
      },
      options ?? {
        requestDelay: 0,
      },
      params,
    ),
  }),
);
