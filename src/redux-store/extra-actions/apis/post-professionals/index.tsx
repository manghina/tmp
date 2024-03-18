import { Specialization } from "../../../../models/common/DoctorCommon";
import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IAccount } from "../../../../models/Account";
import { IProfessional } from "../../../../models/Professional";

export interface PostProfessionalsParams {
  name: string;
  lastName: string;
  birthDate: string;
  phones: string[];
  specializations: Specialization[];
  city: string;
  alboId: string;
}
export interface PostProfessionalsResponseData {
  account: IAccount;
  professional: IProfessional;
}
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
