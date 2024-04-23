import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IProfessionalOffer } from "@app/models/ProfessionalOffer";

export interface GetUsersMeRequestsProfessionalOffersByRequestIdParams {
  requestId: string;
}
export interface GetUsersMeRequestsProfessionalOffersByRequestIdResponseData {
  professionalOffers: IProfessionalOffer[];
}
export default apiActionBuilder<
  GetUsersMeRequestsProfessionalOffersByRequestIdParams,
  ApiSuccessAction<
    GetUsersMeRequestsProfessionalOffersByRequestIdResponseData,
    GetUsersMeRequestsProfessionalOffersByRequestIdParams
  >,
  ApiFailAction<GetUsersMeRequestsProfessionalOffersByRequestIdParams>
>(
  "apis/users/me/requests/{requestId}/professional-offers/get",
  (
    params: GetUsersMeRequestsProfessionalOffersByRequestIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload:
      apiRequestPayloadBuilder<GetUsersMeRequestsProfessionalOffersByRequestIdParams>(
        {
          path: `/users/me/requests/${params.requestId}/professional-offers`,
          method: HttpMethod.GET,
        },
        options ?? {
          requestDelay: 0,
        },
        params,
      ),
  }),
);
