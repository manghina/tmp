import { useNavigation, useRoute } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
import { useForm, useWatch } from "react-hook-form";
import React, { useCallback, useLayoutEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { ForgotPasswordStepCounter } from "./ForgotPasswordStepCounter";

YupPassword(yup);

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
    .password()
    .min(8, "La password deve essere di almeno 8 caratteri")
    .max(50, "La password deve essere di al massimo 50 caratteri")
    .minLowercase(1, "La password deve contenere almeno una lettera minuscola")
    .minUppercase(1, "La password deve contenere almeno una lettera maiuscola")
    .minNumbers(1, "La password deve contenere almeno un numero")
    .minSymbols(1, "La password deve contenere almeno un simbolo")
    .required(),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Le password non coincidono")
    .required(),
});

export const useForgotPasswordScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation<any>();

  const { email: emailFromRouteProps } = useMemo<{ email: string }>(
    () =>
      (route.params as { email: string }) ?? {
        email: "",
      },
    [route.params],
  );

  const stepperCounter = useSelector(selectors.getForgotPasswordStepperCounter);
  const isOtpError = useSelector(selectors.getIsOtpError);

  const formData = useForm<PasswordResetFormData>({
    defaultValues: {
      email: emailFromRouteProps,
    },
    resolver: yupResolver(schema),
  });

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitted },
    trigger,
    setValue,
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

  const triggerRecoveryPasswordTokenSubmit = useCallback(
    () => dispatch(actions.postRecoveryPasswordTokens.request({ email })),
    [dispatch, email],
  );

  const clearFields = useCallback(() => {
    setValue("otpCode", "");
    setValue("newPassword", "");
    setValue("confirmNewPassword", "");
    if (isOtpError) dispatch(actions.setIsOtpError(null));
  }, [setValue, isOtpError]);

  const onFirstStepProceedButtonPressed = useCallback(async () => {
    const isEmailValid = await trigger("email");

    if (isEmailValid) {
      onNextStepButtonPressed();
      triggerRecoveryPasswordTokenSubmit();
    }
  }, [trigger, onNextStepButtonPressed, triggerRecoveryPasswordTokenSubmit]);

  const handleResendOtpCode = useCallback(() => {
    triggerRecoveryPasswordTokenSubmit();
  }, [triggerRecoveryPasswordTokenSubmit]);

  const handleOtpVerification = useCallback(
    async (otpCode: string) => {
      setValue("otpCode", otpCode);
      const isOtpValid = await trigger("otpCode");
      if (isOtpValid) {
        onNextStepButtonPressed();
      } else {
        dispatch(actions.setIsOtpError(true));
      }
    },
    [dispatch, setValue, trigger, onNextStepButtonPressed],
  );

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
    onBackButtonPressed,
    handleOtpVerification,
    handleResendOtpCode,
  };
};
