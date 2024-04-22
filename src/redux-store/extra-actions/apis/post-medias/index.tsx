import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IMedia, MediaTypes } from "@app/models/Media";

export interface PostMediasParams {
  title: string;
  description?: string;
  type: MediaTypes;
  mime: string;
  key: string;
  extension: string;
  filename: string;
  isPrivate: boolean;
}
export interface PostMediasResponseData {
  media: IMedia;
}
export default apiActionBuilder<
  PostMediasParams,
  ApiSuccessAction<PostMediasResponseData, PostMediasParams>,
  ApiFailAction<PostMediasParams>
>(
  "apis/medias/post",
  (params: PostMediasParams, options?: ApiRequestPayloadBuilderOptions) => ({
    payload: apiRequestPayloadBuilder<PostMediasParams>(
      {
        path: "/medias",
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
