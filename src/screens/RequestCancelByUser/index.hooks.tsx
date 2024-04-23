import { useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { actions } from "@app/redux-store";

interface CancelReservationFormData {
  motivation: string;
  feedback?: string;
}

const schema = yup.object().shape({
  motivation: yup.string().required("Inserisci la tua motivazione"),
  feedback: yup.string(),
});

export const useDeleteReservationScreen = () => {
  const dispatch = useDispatch();

  const appointmentId = useMemo(() => "000000000000000000000000", []);

  const formData = useForm<CancelReservationFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      motivation: "",
    },
  });

  const {
    handleSubmit,
    formState: { isDirty },
  } = formData;

  const canSubmit = useMemo(() => isDirty, [isDirty]);

  const triggerRequestCancel = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(
          actions.deleteUsersMeAppointmentsByAppointmentId.request({
            appointmentId,
            ...data,
          }),
        );
      }),
    [handleSubmit],
  );

  return {
    formData,
    triggerRequestCancel,
    canSubmit,
  };
};
