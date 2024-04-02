import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IProfessionalOffer } from "@app/models/ProfessionalOffer";

export interface PatchProfessionalsMeProfessionalOffersByProfessionalOfferIdParams {
  professionalOfferId: string;
  slots: {
    price: number;
    startDate: Date;
    endDate: Date;
  }[];
}

export interface PatchProfessionalsMeProfessionalOffersByProfessionalOfferIdResponseData {
  professionalOffer: IProfessionalOffer;
}

export default apiActionBuilder<
  PatchProfessionalsMeProfessionalOffersByProfessionalOfferIdParams,
  ApiSuccessAction<
    PatchProfessionalsMeProfessionalOffersByProfessionalOfferIdResponseData,
    PatchProfessionalsMeProfessionalOffersByProfessionalOfferIdParams
  >,
  ApiFailAction<PatchProfessionalsMeProfessionalOffersByProfessionalOfferIdParams>
>(
  "apis/professionals/me/professional-offers/{professionalOfferId}/patch",
  (
    params: PatchProfessionalsMeProfessionalOffersByProfessionalOfferIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload:
      apiRequestPayloadBuilder<PatchProfessionalsMeProfessionalOffersByProfessionalOfferIdParams>(
        {
          path: `/professionals/me/professional-offers/${params.professionalOfferId}`,
          method: HttpMethod.PATCH,
          body: {
            slots: params.slots,
          },
        },
        options ?? {
          requestDelay: 0,
        },
        params,
      ),
  }),
);
