import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IProfessionalOffer } from "@app/models/ProfessionalOffer";

export interface GetProfessionalsMeProfessionalOffersParams {}

export interface GetProfessionalsMeProfessionalOffersResponseData {
  professionalOffers: IProfessionalOffer[];
}

export default apiActionBuilder<
  GetProfessionalsMeProfessionalOffersParams,
  ApiSuccessAction<
    GetProfessionalsMeProfessionalOffersResponseData,
    GetProfessionalsMeProfessionalOffersParams
  >,
  ApiFailAction<GetProfessionalsMeProfessionalOffersParams>
>(
  "apis/professionals/me/professional-offers/get",
  (
    params: GetProfessionalsMeProfessionalOffersParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload:
      apiRequestPayloadBuilder<GetProfessionalsMeProfessionalOffersParams>(
        {
          path: `/professionals/me/professional-offers`,
          method: HttpMethod.GET,
        },
        options ?? {
          requestDelay: 0,
        },
        params,
      ),
  }),
);
