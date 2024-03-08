import {
  phonePrefixOptions,
  provincesOptions,
  //professionsOptions,
} from "./constantData";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, useWatch } from "react-hook-form";
import React, { useCallback, useLayoutEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { HeaderStepperCounter } from "@app/components/HeaderStepperCounter";
import moment from "moment/moment";
import { Specialization } from "../../models/Specialist";

interface ProfessionalRegisterFormData {
  name: string;
  lastName: string;
  birthDate: Date;
  phonePrefix: string;
  phoneNumber: string;
  professionalPaperPhoto: any;
  professionalRegistrationNumber: string;
  province: string;
  specialization: string;
  officeLocation: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Inserisci il tuo nome"),
  lastName: yup.string().required("Inserisci il tuo cognome"),
  birthDate: yup.date().required("Inserisci la tua data di nascita"),
  phonePrefix: yup.string().required("Scegli il prefisso telefonico"),
  phoneNumber: yup.string().required("Inserisci il tuo numero di telefono"),
  professionalPaperPhoto: yup.mixed().required("Inserisci la tua foto"),
  professionalRegistrationNumber: yup
    .string()
    .required("Inserisci il tuo numero di registrazione"),
  province: yup.string().required("Inserisci la tua provincia"),
  specialization: yup.string().required("Inserisci la tua specializzazione"),
  officeLocation: yup.string().required("Inserisci la tua sede"),
  email: yup
    .string()
    .email("Inserisci una mail valida")
    .required("Inserisci il tuo indirizzo email"),
  password: yup
    .string()
    .min(8, "La password deve contenere almeno 8 caratteri")
    .matches(
      /[A-Z]/,
      "La password deve contenere almeno un carattere maiuscolo",
    )
    .matches(/[0-9]/, "La password deve contenere almeno un numero")
    .matches(/[-!|]/, "La password deve contenere almeno uno tra -!|")
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Le password non corrispondono")
    .required(),
});

const firstStepFieldKeys = [
  "name",
  "lastName",
  "birthDate",
  "phonePrefix",
  "phoneNumber",
] as const;
const secondStepFieldKeys = [
  "professionalPaperPhoto",
  "professionalRegistrationNumber",
  "province",
  "specialization",
  "officeLocation",
] as const;
const thirdStepFieldKeys = ["email", "password", "confirmPassword"] as const;

export const useProfessionalRegister = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const stepperIndex: number = useSelector(
    selectors.getProfessionalRegisterStepperCounter,
  );

  const professionsOptions = useMemo(() => {
    return Object.entries(Specialization).map(([key, value]) => ({
      value: value,
      label: value,
    }));
  }, []);

  const formData = useForm<ProfessionalRegisterFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      lastName: "",
      birthDate: undefined,
      phonePrefix: "",
      phoneNumber: "",
      professionalPaperPhoto: undefined,
      professionalRegistrationNumber: "",
      province: "",
      specialization: "",
      officeLocation: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    control,
    handleSubmit,
    trigger,
    formState: { isDirty, isValid, isSubmitted, errors },
  } = formData;

  const [name, lastName, birthDate, phonePrefix, phoneNumber] = useWatch({
    control,
    name: firstStepFieldKeys,
  });

  const [
    professionalPaperPhoto,
    professionalRegistrationNumber,
    province,
    specialization,
    officeLocation,
  ] = useWatch({
    control,
    name: secondStepFieldKeys,
  });

  const [email, password, confirmPassword] = useWatch({
    control,
    name: thirdStepFieldKeys,
  });

  const step1Filled = useMemo(
    () =>
      Boolean(name) &&
      Boolean(lastName) &&
      Boolean(birthDate) &&
      Boolean(phonePrefix) &&
      Boolean(phoneNumber),
    [name, lastName, birthDate, phonePrefix, phoneNumber],
  );

  const step2Filled = useMemo(
    () =>
      Boolean(professionalPaperPhoto) &&
      Boolean(professionalRegistrationNumber) &&
      Boolean(province) &&
      Boolean(specialization) &&
      Boolean(officeLocation),
    [
      professionalPaperPhoto,
      professionalRegistrationNumber,
      province,
      specialization,
      officeLocation,
    ],
  );

  const step3Filled = useMemo(
    () => Boolean(email) && Boolean(password) && Boolean(confirmPassword),
    [email, password, confirmPassword],
  );

  const currentStepFilled = useMemo(() => {
    switch (stepperIndex) {
      case 1:
        return step1Filled;
      case 2:
        return step2Filled;
      case 3:
        return step3Filled;
      default:
        return false;
    }
  }, [stepperIndex, step1Filled, step2Filled, step3Filled]);

  const submitDisabled = useMemo(
    () =>
      !isDirty ||
      (isSubmitted && !isValid) ||
      !step1Filled ||
      !step2Filled ||
      !step3Filled,
    [isDirty, isSubmitted, isValid, step1Filled, step2Filled, step3Filled],
  );

  const canGoToNextStep = useMemo(() => {
    switch (stepperIndex) {
      case 1:
        return step1Filled;
      case 2:
        return step2Filled;
      case 3:
        return step3Filled;
      default:
        return false;
    }
  }, [stepperIndex, step1Filled, step2Filled, step3Filled]);

  const firstStepCompletionPercentage = useMemo(
    () =>
      ([name, lastName, birthDate, phonePrefix, phoneNumber].filter(Boolean)
        .length /
        5) *
      100,
    [name, lastName, birthDate, phonePrefix, phoneNumber],
  );

  const secondStepCompletionPercentage = useMemo(() => {
    const fields = [
      professionalPaperPhoto,
      professionalRegistrationNumber,
      province,
      specialization,
      officeLocation,
    ];

    return (fields.filter(Boolean).length / fields.length) * 100;
  }, [
    professionalPaperPhoto,
    professionalRegistrationNumber,
    province,
    specialization,
    officeLocation,
  ]);

  const thirdStepCompletionPercentage = useMemo(() => {
    const fields = [email, password, confirmPassword];

    return (fields.filter(Boolean).length / fields.length) * 100;
  }, [email, password, confirmPassword]);

  const currentStepCompletionPercentage = useMemo(() => {
    switch (stepperIndex) {
      case 1:
        return firstStepCompletionPercentage;
      case 2:
        return secondStepCompletionPercentage;
      case 3:
        return thirdStepCompletionPercentage;
      default:
        return 0;
    }
  }, [
    stepperIndex,
    firstStepCompletionPercentage,
    secondStepCompletionPercentage,
    thirdStepCompletionPercentage,
  ]);

  const triggerProfessionalRegisterSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        /* dispatch(
          actions.postAccounts.request({
            email: data.email,
            password: data.password,
          }),
        ); */
        dispatch(
          actions.professionalRegistrationFormSubmitted({
            email: data.email,
            password: data.password,
            name: data.name,
            lastname: data.lastName,
            birthDate: moment(data.birthDate).format("DD-MM-YYYY"),
            phones: [data.phonePrefix.split("+").join("") + data.phoneNumber],
            specializations: [data.specialization],
            city: data.officeLocation,
            alboId: data.professionalRegistrationNumber,
          }),
        );
        /* console.log({
          email: data.email,
          password: data.password,
          name: data.name,
          lastname: data.lastName,
          birthDate: moment(data.birthDate).format("DD-MM-YYYY"),
          phones: [data.phonePrefix.split("+").join("") + data.phoneNumber],
          specializations: [data.specialization],
          city: data.officeLocation,
          alboId: data.professionalRegistrationNumber,
        }); */
        /* dispatch(
          actions.postProfessionals.request({
            name: data.name,
            lastname: data.lastName,
            birthDate: moment(data.birthDate).format("DD-MM-YYYY"),
            phones: [data.phonePrefix.split("+").join("") + data.phoneNumber],
            specializations: [data.specialization],
            city: data.officeLocation,
            alboId: data.professionalRegistrationNumber,
          }),
        ); */
      }),
    [dispatch, handleSubmit],
  );

  const onNextStepButtonPressed = useCallback(async () => {
    let stepValid = false;

    switch (stepperIndex) {
      case 1:
        // Trigger fields from step 1
        stepValid = await trigger(firstStepFieldKeys);
        break;
      case 2:
        // Trigger fields from step 2
        stepValid = await trigger(secondStepFieldKeys);
        break;
      case 3:
        // Trigger fields from step 3
        stepValid = await trigger(thirdStepFieldKeys);
        break;
      default:
        break;
    }

    if (stepValid) {
      dispatch(
        actions.setProfessionalRegisterStepperCounter(
          Math.min(stepperIndex + 1, 3),
        ),
      );
    }
  }, [dispatch, stepperIndex, trigger]);

  const onPreviousStepButtonPressed = useCallback(() => {
    dispatch(
      actions.setProfessionalRegisterStepperCounter(
        Math.max(stepperIndex - 1, 1),
      ),
    );
  }, [dispatch, stepperIndex]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderStepperCounter currentStep={stepperIndex} totalSteps={3} />
      ),
    });
  }, [navigation, stepperIndex]);

  return {
    formData,
    submitDisabled,
    phonePrefixOptions,
    provincesOptions,
    professionsOptions,
    stepperIndex,
    canGoToNextStep,
    currentStepCompletionPercentage,
    currentStepFilled,
    onNextStepButtonPressed,
    onPreviousStepButtonPressed,
    triggerProfessionalRegisterSubmit,
  };
};
