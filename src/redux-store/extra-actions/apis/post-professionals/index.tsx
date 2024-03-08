import { Specialization } from "../../../../models/common/DoctorCommon";
import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface PostProfessionalsParams {
  name: string;
  lastname: string;
  birthDate: string;
  phones: string[];
  specializations: Specialization[];
  city: string;
  alboId: string;
}
export interface PostProfessionalsResponseData {}
export default apiActionBuilder<
  PostProfessionalsParams,
  ApiSuccessAction<PostProfessionalsResponseData, PostProfessionalsParams>,
  ApiFailAction<PostProfessionalsParams>
>(
  "apis/professionals/post",
  (
    params: PostProfessionalsParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PostProfessionalsParams>(
      {
        path: "/professionals",
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
