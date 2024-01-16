import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { useMemo } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type LoginOptionsFormData = {
  email: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Inserisci una mail valida")
    .required("L'email è obbligatoria"),
});

export const useLoginOptionsScreen = () => {
  const navigation = useNavigation<any>();

  const formData = useForm<LoginOptionsFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const {
    handleSubmit,
    formState: { isDirty, isSubmitted, isValid },
  } = formData;

  const submitDisabled = (!isDirty || (isSubmitted && !isValid)) && false;

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        navigation.push("LoginWithMail", { email: data.email });
      }),
    [navigation, handleSubmit],
  );

  return { formData, submitDisabled, triggerSubmit };
};
