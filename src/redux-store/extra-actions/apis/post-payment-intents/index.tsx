import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface PostPaymentIntentsParams {
  selectedSlotIndex: number;
  professionalOfferId: string;
}
export interface PostPaymentIntentsResponseData {}
export default apiActionBuilder<
  PostPaymentIntentsParams,
  ApiSuccessAction<PostPaymentIntentsResponseData, PostPaymentIntentsParams>,
  ApiFailAction<PostPaymentIntentsParams>
>(
  "apis/payment-intents/post",
  (
    params: PostPaymentIntentsParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PostPaymentIntentsParams>(
      {
        path: "/payment-intents",
        method: HttpMethod.POST,
        body: params,
      },
      options ?? {
        requestDelay: 0,
      },
      params,
    ),
  }),
);
