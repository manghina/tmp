import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface DeleteUsersMeAppointmentsByAppointmentIdParams {
  appointmentId: string;
}

export interface DeleteUsersMeAppointmentsByAppointmentIdResponseData {}

export default apiActionBuilder<
  DeleteUsersMeAppointmentsByAppointmentIdParams,
  ApiSuccessAction<
    DeleteUsersMeAppointmentsByAppointmentIdResponseData,
    DeleteUsersMeAppointmentsByAppointmentIdParams
  >,
  ApiFailAction<DeleteUsersMeAppointmentsByAppointmentIdParams>
>(
  "apis/users/me/appointment/{appointmentId}/delete",
  (
    params: DeleteUsersMeAppointmentsByAppointmentIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload:
      apiRequestPayloadBuilder<DeleteUsersMeAppointmentsByAppointmentIdParams>(
        {
          path: `/users/me/appointment/${params.appointmentId}`,
          method: HttpMethod.DELETE,
        },
        options ?? {
          requestDelay: 0,
        },
        params,
      ),
  }),
);
