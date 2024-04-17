import { useCallback, useEffect, useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, useWatch } from "react-hook-form";

interface CancelReservationFormData {
  motivation: string;
  feedback?: string;
}

const schema = yup.object().shape({
  motivation: yup.string().required("Inserisci la tua motivazione"),
  feedback: yup.string(),
});

const fieldKeys = ["motivation", "feedback"] as const;

export const useDeleteReservationScreen = () => {
  const formData = useForm<CancelReservationFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      motivation: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { isDirty },
  } = formData;

  const [motivation] = useWatch({
    control,
    name: fieldKeys,
  });

  const canSubmit = useMemo(() => isDirty, [isDirty]);

  useEffect(() => {
    console.log(motivation);
  }, [motivation]);

  const triggerRequestCancel = useCallback(() => {
    handleSubmit((data) => {
      console.log(data);
    })();
  }, [handleSubmit]);

  return {
    formData,
    triggerRequestCancel,
    canSubmit,
  };
};
