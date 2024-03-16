import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, useWatch } from "react-hook-form";
import React, { useCallback, useLayoutEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { ForgotPasswordStepCounter } from "./ForgotPasswordStepCounter";

type PasswordResetFormData = {
  email: string;
  otpCode: string;
  newPassword: string;
  confirmNewPassword: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Inserisci una mail valida")
    .required("La mail è obbligatoria"),
  otpCode: yup
    .string()
    .required("Inserisci il codice di recupero")
    .test("validazione codice", "Il codice deve essere di 6 cifre", (value) =>
      /^\d{6}$/.test(value),
    ),
  newPassword: yup
    .string()
    .min(8, "La password deve contenere almeno 8 caratteri")
    .matches(
      /[A-Z]/,
      "La password deve contenere almeno un carattere maiuscolo",
    )
    .matches(/[0-9]/, "La password deve contenere almeno un numero")
    .matches(/[-!|]/, "La password deve contenere almeno uno tra -!|")
    .required(),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Le password non coincidono")
    .required(),
});

export const useForgotPasswordScreen = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation<any>();

  const stepperCounter = useSelector(selectors.getForgotPasswordStepperCounter);
  const [recoveryPasswordTokenTimer, setRecoveryPasswordTokenTimer] =
    useState(0);

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
    trigger,
  } = formData;

  const submitDisabled = !isDirty || (isSubmitted && !isValid);

  const [email, otpCode, newPassword, confirmNewPassword] = useWatch({
    control,
    name: ["email", "otpCode", "newPassword", "confirmNewPassword"],
  });

  const step1Filled = useMemo(() => Boolean(email), [email]);
  const step2Filled = useMemo(() => Boolean(otpCode), [otpCode]);
  const step3Filled = useMemo(
    () => Boolean(newPassword) && Boolean(confirmNewPassword),
    [newPassword, confirmNewPassword],
  );

  const onNextStepButtonPressed = useCallback(
    () => dispatch(actions.setForgotPasswordStepperCounter(stepperCounter + 1)),
    [dispatch, stepperCounter],
  );

  const onPreviousStepButtonPressed = useCallback(
    () => dispatch(actions.setForgotPasswordStepperCounter(1)),
    [dispatch, stepperCounter],
  );

  const startRecoveryPasswordTokenTimer = useCallback(() => {
    setRecoveryPasswordTokenTimer(30);

    const timer = setInterval(() => {
      setRecoveryPasswordTokenTimer((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);
          return 0;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);
  }, [setRecoveryPasswordTokenTimer]);

  const triggerRecoveryPasswordTokenSubmit = useCallback(
    () => dispatch(actions.postRecoveryPasswordTokens.request({ email })),
    [dispatch, email],
  );

  const clearFields = useCallback(() => {
    formData.setValue("otpCode", "");
    formData.setValue("newPassword", "");
    formData.setValue("confirmNewPassword", "");
  }, [formData]);

  const onFirstStepProceedButtonPressed = useCallback(async () => {
    const isEmailValid = await trigger("email");

    if (isEmailValid) {
      onNextStepButtonPressed();
      startRecoveryPasswordTokenTimer();
      triggerRecoveryPasswordTokenSubmit();
    }
  }, [
    trigger,
    onNextStepButtonPressed,
    startRecoveryPasswordTokenTimer,
    triggerRecoveryPasswordTokenSubmit,
  ]);

  const onSecondStepProceedButtonPressed = useCallback(async () => {
    const isOtpValid = await trigger("otpCode");

    if (isOtpValid) {
      onNextStepButtonPressed();
    }
  }, [trigger, onNextStepButtonPressed]);

  const onBackButtonPressed = useCallback(() => {
    clearFields();
    onPreviousStepButtonPressed();
  }, [clearFields, onPreviousStepButtonPressed]);

  const allFieldsFilled = useMemo(
    () =>
      Boolean(email) &&
      Boolean(otpCode) &&
      Boolean(newPassword) &&
      Boolean(confirmNewPassword),
    [email, newPassword, confirmNewPassword],
  );

  const completionPercentage = useMemo(() => {
    const fields = [email, otpCode, newPassword, confirmNewPassword];

    return fields.filter(Boolean).length / fields.length;
  }, [email, otpCode, newPassword, confirmNewPassword]);

  const triggerPasswordChangeSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(
          actions.patchPasswords.request({
            email: data.email,
            newPassword: data.newPassword,
            otpCode: data.otpCode,
          }),
        );
      }),
    [dispatch, handleSubmit],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ForgotPasswordStepCounter stepperCounter={stepperCounter} />
      ),
    });
  }, [navigation, stepperCounter]);

  return {
    formData,
    triggerPasswordChangeSubmit,
    step1Filled,
    step2Filled,
    step3Filled,
    completionPercentage,
    stepperCounter,
    onFirstStepProceedButtonPressed,
    onSecondStepProceedButtonPressed,
    onBackButtonPressed,
  };
};
