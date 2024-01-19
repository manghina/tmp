export enum AppointmentStatus {
  AWAIT_USER_MESSAGE = "AWAIT_USER_MESSAGE",
  AWAIT_AI_MESSAGE = "AWAIT_AI_MESSAGE",
  SEARCHING_FOR_DOCTOR = "SEARCHING_FOR_DOCTOR",
  AWAIT_DOCTOR_ACCEPTANCE = "AWAIT_DOCTOR_ACCEPTANCE",
  PAYMENT_DUE = "PAYMENT_DUE",
  LEAVE_A_REVIEW = "LEAVE_A_REVIEW",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}
export interface IAppointment {
  _id: string;
  status: AppointmentStatus;
}

export class Appointment implements IAppointment {
  _id: string;
  status: AppointmentStatus;

  constructor(iAppointment: IAppointment) {
    this._id = iAppointment._id;
    this.status = iAppointment.status;
  }
}
