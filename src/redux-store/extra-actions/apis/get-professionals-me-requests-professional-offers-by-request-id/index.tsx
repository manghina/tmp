import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import {
  IProfessionalOffer,
  ProfessionalOfferStatus,
} from "@app/models/ProfessionalOffer";

export interface GetProfessionalsMeProfessionalOffersParams {
  active?: boolean;
  archived?: boolean;
  page?: number;
  perPage?: number;
}

export interface GetProfessionalsMeProfessionalOffersResponseData {
  professionalOffers: IProfessionalOffer[];
  totalCount: number;
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
  ) => {
    let path = `/professionals/me/professional-offers`;

    let queryParams: string[] = [];

    if (params.active) {
      queryParams.push("active=true");
    } else if (params.archived) {
      queryParams.push("archived=true");
    }

    if (params.page && params.perPage) {
      queryParams.push(`page=${params.page}`);
      queryParams.push(`perPage=${params.perPage}`);
    }

    if (queryParams.length > 0) {
      path += `?${queryParams.join("&")}`;
    }

    return {
      payload:
        apiRequestPayloadBuilder<GetProfessionalsMeProfessionalOffersParams>(
          {
            path,
            method: HttpMethod.GET,
          },
          options ?? {
            requestDelay: 0,
          },
          params,
        ),
    };
  },
);
