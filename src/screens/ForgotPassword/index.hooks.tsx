import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, useWatch } from "react-hook-form";
import React, { useCallback, useLayoutEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux-store";
import { ForgotPasswordStepCounter } from "./ForgotPasswordStepCounter";

type PasswordResetFormData = {
  email: string;
  recoveryToken: string;
  newPassword: string;
  confirmNewPassword: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Inserisci una mail valida")
    .required("La mail è obbligatoria"),
  recoveryToken: yup.string().required("Inserisci il codice di recupero"),
  newPassword: yup.string().required("Inserisci la nuova password"),
  confirmNewPassword: yup.string().required("Conferma la nuova password"),
});

export const useForgotPasswordScreen = () => {
  const dispatch = useDispatch();
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

  const [email, recoveryToken, newPassword, confirmNewPassword] = useWatch({
    control,
    name: ["email", "recoveryToken", "newPassword", "confirmNewPassword"],
  });

  const step1Filled = useMemo(() => Boolean(email), [email]);
  const step2Filled = useMemo(() => Boolean(recoveryToken), [recoveryToken]);
  const step3Filled = useMemo(
    () => Boolean(newPassword) && Boolean(confirmNewPassword),
    [newPassword, confirmNewPassword],
  );

  const allFieldsFilled = useMemo(
    () =>
      Boolean(email) &&
      Boolean(recoveryToken) &&
      Boolean(newPassword) &&
      Boolean(confirmNewPassword),
    [email, newPassword, confirmNewPassword],
  );

  const completionPercentage = useMemo(
    () =>
      ([email, recoveryToken, newPassword, confirmNewPassword].filter(Boolean)
        .length /
        4) *
      100,
    [email, recoveryToken, newPassword, confirmNewPassword],
  );

  const triggerRecoveryTokenSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(actions.postAccounts.request(data));
      }),
    [dispatch, handleSubmit],
  );

  const triggerPasswordChangeSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(actions.postUsers.request(data));
      }),
    [dispatch, handleSubmit],
  );

  const onNextStepButtonPressed = useCallback(
    () => setStepperCounter(stepperCounter + 1),
    [setStepperCounter, stepperCounter],
  );
  const onPreviousStepButtonPressed = useCallback(
    () => setStepperCounter(1),
    [setStepperCounter, stepperCounter],
  );

  return {
    formData,
    triggerRecoveryTokenSubmit,
    triggerPasswordChangeSubmit,
    submitDisabled,
    step1Filled,
    step2Filled,
    step3Filled,
    completionPercentage,
    stepperCounter,
    onNextStepButtonPressed,
    onPreviousStepButtonPressed,
  };
};
