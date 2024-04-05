import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IProfessionalOffer } from "@app/models/ProfessionalOffer";

export interface GetProfessionalsMeProfessionalOffersByProfessionalOFferIdParams {
  professionalOfferId: string;
}

export interface GetProfessionalsMeProfessionalOffersByProfessionalOfferIdResponseData {
  professionalOffer: IProfessionalOffer;
}

export default apiActionBuilder<
  GetProfessionalsMeProfessionalOffersByProfessionalOFferIdParams,
  ApiSuccessAction<
    GetProfessionalsMeProfessionalOffersByProfessionalOfferIdResponseData,
    GetProfessionalsMeProfessionalOffersByProfessionalOFferIdParams
  >,
  ApiFailAction<GetProfessionalsMeProfessionalOffersByProfessionalOFferIdParams>
>(
  "apis/professionals/me/professional-offers/{professionalOfferId}/get",
  (
    params: GetProfessionalsMeProfessionalOffersByProfessionalOFferIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload:
      apiRequestPayloadBuilder<GetProfessionalsMeProfessionalOffersByProfessionalOFferIdParams>(
        {
          path: `/professionals/me/professional-offers/${params.professionalOfferId}`,
          method: HttpMethod.GET,
        },
        options ?? {
          requestDelay: 0,
        },
        params,
      ),
  }),
);
