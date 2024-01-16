import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, useWatch } from "react-hook-form";
import React, { useLayoutEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux-store";
import { ForgotPasswordStepCounter } from "./ForgotPasswordStepCounter";

// Route params
type ParamList = {
  Detail: {
    email: string;
  };
};

type PasswordResetFormData = {
  email: string;
  recoveryPasswordToken: string;
  newPassword: string;
  confirmNewPassword: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Inserisci una mail valida")
    .required("La mail è obbligatoria"),
  newPassword: yup.string().required("Inserisci la nuova password"),
  confirmNewPassword: yup.string().required("Conferma la nuova password"),
});

export const useForgotPasswordScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<ParamList, "Detail">>();
  const [stepperCounter, setStepperCounter] = useState(1);
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ForgotPasswordStepCounter stepperCounter={stepperCounter} />
      ),
    });
  }, [navigation, stepperCounter]);

  const formData = useForm<PasswordResetFormData>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitted },
  } = formData;

  const submitDisabled = (!isDirty || (isSubmitted && !isValid)) && false;

  const [email, newPassword, confirmNewPassword] = useWatch({
    control,
    name: ["email", "newPassword", "confirmNewPassword"],
  });

  const emailFilled = useMemo(() => Boolean(email), [email]);

  const allFieldsFilled = useMemo(
    () => Boolean(email) && Boolean(newPassword) && Boolean(confirmNewPassword),
    [email, newPassword, confirmNewPassword],
  );

  const completionPercentage = useMemo(
    () =>
      ([email, newPassword, confirmNewPassword].filter(Boolean).length / 4) *
      100,
    [email, newPassword, confirmNewPassword],
  );

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(actions.postAccountsSessions.request(data));
      }),
    [dispatch, handleSubmit],
  );

  return {
    formData,
    triggerSubmit,
    submitDisabled,
    emailFilled,
    completionPercentage,
  };
};
