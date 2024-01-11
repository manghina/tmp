import { useEffect, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: Date;
}

const schema = yup.object().shape({
  firstName: yup.string().required("Inserisci il tuo nome"),
  lastName: yup.string().required("Inserisci il tuo cognome"),
  email: yup
    .string()
    .email("Inserisci un indirizzo email valido")
    .required("Inserisci il tuo indirizzo email"),
  password: yup
    .string()
    .min(8, "La password deve essere di almeno 8 caratteri")
    .required("Inserisci la tua password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Le password devono coincidere")
    .required("Conferma la tua password"),
  birthDate: yup.date().required("Inserisci la tua data di nascita"),
});

export const useRegisterScreen = () => {
  const [stepperCounter, setStepperCounter] = useState(1);

  const formData = useForm<SignUpFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthDate: undefined,
    },
  });

  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors, isValid, isSubmitted, isDirty },
  } = formData;

  const [firstName, lastName, birthDate, email, password, confirmPassword] =
    useWatch({
      control,
      name: [
        "firstName",
        "lastName",
        "birthDate",
        "email",
        "password",
        "confirmPassword",
      ],
    });

  const firstStepFilled = useMemo(
    () => Boolean(firstName) && Boolean(lastName) && Boolean(birthDate),
    [firstName, lastName, birthDate],
  );

  const secondStepFilled = useMemo(
    () => Boolean(email) && Boolean(password) && Boolean(confirmPassword),
    [email, password, confirmPassword],
  );

  const firstStepCompletionPercentage = useMemo(
    () => ([firstName, lastName, birthDate].filter(Boolean).length / 3) * 100,
    [firstName, lastName, birthDate],
  );

  const secondStepCompletionPercentage = useMemo(
    () => ([email, password, confirmPassword].filter(Boolean).length / 3) * 100,
    [email, password, confirmPassword],
  );

  const canGoToNextStep = useMemo(
    () =>
      firstStepFilled &&
      !errors.firstName &&
      !errors.lastName &&
      !errors.birthDate,
    [firstStepFilled, secondStepFilled],
  );

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        console.log(data);
      }),
    [handleSubmit],
  );

  const submitDisabled = (isSubmitted && !isValid) || !isDirty;

  useEffect(() => {
    if (firstStepFilled) {
      trigger("firstName").then();
      trigger("lastName").then();
      trigger("birthDate").then();
    }
  }, [trigger, firstStepFilled]);

  // Non so a cosa serva ma qui per qualche motivo non funziona a livello di sintassi
  /*useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <RegisterStepCounter stepperCounter={stepperCounter} />
  ),
    });
  }, [navigation, stepperCounter]);*/

  return {
    formData,
    stepperCounter,
    setStepperCounter,
    firstStepFilled,
    firstStepCompletionPercentage,
    secondStepFilled,
    secondStepCompletionPercentage,
    canGoToNextStep,
    submitDisabled,
    triggerSubmit,
  };
};
