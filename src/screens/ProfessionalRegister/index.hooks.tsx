import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, useWatch } from "react-hook-form";
import React, { useCallback, useLayoutEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../redux-store";
import { ProfessionalRegisterStepCounter } from "./ProfessionalRegisterStepCounter";

interface ProfessionalRegisterFormData {
  firstName: string;
  lastName: string;
  birthDate: Date;
  phonePrefix: string;
  phoneNumber: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required("Inserisci il tuo nome"),
  lastName: yup.string().required("Inserisci il tuo cognome"),
  birthDate: yup.date().required("Inserisci la tua data di nascita"),
  phonePrefix: yup.string().required("Scegli il prefisso telefonico"),
  phoneNumber: yup.string().required("Inserisci il tuo numero di telefono"),
});

export const useProfessionalregister = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const stepperIndex = useSelector(
    selectors.getProfessionalRegisterStepperCounter,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ProfessionalRegisterStepCounter stepperCounter={stepperIndex} />
      ),
    });
  }, [navigation, stepperIndex]);

  const formData = useForm<ProfessionalRegisterFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: undefined,
      phonePrefix: "",
      phoneNumber: "",
    },
  });

  const {
    control,
    handleSubmit,
    trigger,
    formState: { isDirty, isValid, isSubmitted },
  } = formData;

  const submitDisabled = !isDirty || (isSubmitted && !isValid);

  const [firstName, lastName, birthDate, phonePrefix, phoneNumber] = useWatch({
    control,
    name: ["firstName", "lastName", "birthDate", "phonePrefix", "phoneNumber"],
  });

  const step1Filled = useMemo(
    () =>
      Boolean(firstName) &&
      Boolean(lastName) &&
      Boolean(birthDate) &&
      Boolean(phonePrefix) &&
      Boolean(phoneNumber),
    [firstName, lastName, birthDate, phonePrefix, phoneNumber],
  );
  /*const step2Filled = useMemo(
    () => Boolean(recoveryPasswordToken),
    [recoveryPasswordToken],
  );*/
  /*const step3Filled = useMemo(
    () => Boolean(newPassword) && Boolean(confirmNewPassword),
    [newPassword, confirmNewPassword],
  );*/

  /*const clearFields = useCallback(() => {
    formData.setValue("recoveryPasswordToken", "");
    formData.setValue("newPassword", "");
    formData.setValue("confirmNewPassword", "");
  }, [formData]);*/

  /*const allFieldsFilled = useMemo(
    () =>
      Boolean(email) &&
      Boolean(recoveryPasswordToken) &&
      Boolean(newPassword) &&
      Boolean(confirmNewPassword),
    [email, newPassword, confirmNewPassword],
  );*/

  const firstStepCompletionPercentage = useMemo(
    () =>
      ([firstName, lastName, birthDate, phonePrefix, phoneNumber].filter(
        Boolean,
      ).length /
        5) *
      100,
    [firstName, lastName, birthDate, phonePrefix, phoneNumber],
  );

  /*const triggerProfessionalRegisterSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(
          actions.postProfessionals.request({
            //all fields
          }),
        );
      }),
    [dispatch, handleSubmit],
  );*/

  const onNextStepButtonPressed = useCallback(
    () =>
      dispatch(actions.setProfessionalRegisterStepperCounter(stepperIndex + 1)),
    [dispatch, stepperIndex],
  );
  const onPreviousStepButtonPressed = useCallback(
    () => dispatch(actions.setProfessionalRegisterStepperCounter(1)),
    [dispatch, stepperIndex],
  );

  const goToCountryChooser = useCallback(() => {
    navigation.navigate("CountryChooser");
  }, [navigation]);

  return {
    formData,
    //triggerProfessionalRegisterSubmit,
    goToCountryChooser,
    step1Filled,
    //step2Filled,
    //step3Filled,
    firstStepCompletionPercentage,
    stepperIndex,
    //clearFields,
    onNextStepButtonPressed,
    onPreviousStepButtonPressed,
    trigger,
  };
};
