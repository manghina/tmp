import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface PostS3SignedUrlsParams {
  fileName: string;
  mime: string;
  isPrivate: boolean;
}
export interface PostS3SignedUrlsResponseData {
  signedUrl: string;
  key: string;
  extension: string;
  cleanedName: string;
  fullPath: string;
  message?: string;
}
export default apiActionBuilder<
  PostS3SignedUrlsParams,
  ApiSuccessAction<PostS3SignedUrlsResponseData, PostS3SignedUrlsParams>,
  ApiFailAction<PostS3SignedUrlsParams>
>(
  "apis/s3-signed-urls/post",
  (
    params: PostS3SignedUrlsParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PostS3SignedUrlsParams>(
      {
        path: "/s3-signed-urls",
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
