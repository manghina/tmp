import { useCallback } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

interface CancelReservationFormData {
  motivation: string;
  feedback: string;
}

const schema = yup.object().shape({
  motivation: yup.string().required("Inserisci la tua motivazione"),
  feedback: yup.string().required("Inserisci il tuo feedback"),
});

const fieldKeys = ["motivation", "feedback"];

export const useDeleteReservationScreen = () => {
  const formData = useForm<CancelReservationFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      motivation: "",
      feedback: "",
    },
  });

  return {
    formData,
  };
};
