import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import YupPassword from "yup-password";
import { actions } from "@app/redux-store";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { HeaderStepperCounter } from "@app/components/HeaderStepperCounter";
import { selectors } from "@app/redux-store";

YupPassword(yup);

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
  email: yup.string().email("Inserisci un indirizzo email valido").required(),
  password: yup
    .string()
    .password()
    .min(8, "La password deve essere di almeno 8 caratteri")
    .max(50, "La password deve essere di al massimo 50 caratteri")
    .minLowercase(1, "La password deve contenere almeno una lettera minuscola")
    .minUppercase(1, "La password deve contenere almeno una lettera maiuscola")
    .minNumbers(1, "La password deve contenere almeno un numero")
    .minSymbols(1, "La password deve contenere almeno un simbolo")
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Le password devono coincidere")
    .required("Conferma la tua password"),
  birthDate: yup.date()
  .required("Inserisci la tua data di nascita")
  .max(
    moment().subtract(18, "years"),
    "Devi avere compiuto almeno 18 anni per registrarti al servizio",
  ),
});

const firstStepFieldKeys = [
  "firstName",
  "lastName",
  "birthDate",
] as const;
const secondStepFieldKeys = [
  "email",
  "password",
  "confirmPassword",
] as const;

export const useUserRegisterScreen = () => {
  const dispatch = useDispatch();
  const [stepperCounter, setStepperCounter] = useState(1);
 
  const navigation = useNavigation<any>();

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

    const onNextStepButtonPressed = async () => {
      let stepValid = false;
          stepValid = await trigger(firstStepFieldKeys);
      if(stepValid)
        setStepperCounter(2)
  
    };
  
    const onPreviousStepButtonPressed = () => {
        setStepperCounter(1)
    };

  const firstStepFilled = useMemo(
    () => Boolean(firstName) && Boolean(lastName) && Boolean(birthDate),
    [firstName, lastName, birthDate],
  );

  const secondStepFilled = useMemo(
    () => Boolean(email) && Boolean(password) && Boolean(confirmPassword),
    [email, password, confirmPassword],
  );

  const firstStepCompletionPercentage = useMemo(
    () => [firstName, lastName, birthDate].filter(Boolean).length / 3,
    [firstName, lastName, birthDate],
  );

  const secondStepCompletionPercentage = useMemo(
    () => [email, password, confirmPassword].filter(Boolean).length / 3,
    [email, password, confirmPassword],
  );

  const canGoToNextStep = useMemo(
    () =>
      firstStepFilled &&
      !errors.firstName &&
      !errors.lastName &&
      !errors.birthDate,
    [firstStepFilled],
  );

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(
          actions.userRegistrationFormSubmitted({
            ...data,
            birthDate: moment(data.birthDate).format("DD-MM-YYYY"),
          }),
        );
      }),
    [dispatch, handleSubmit],
  );

  const isSigningUp = useSelector(
    selectors.getAjaxIsLoadingByApi("apis/accounts/post"),
  );
  const [showLoadingAnimation, setShowLoadingAnimation] =
    useState(!!isSigningUp);

  useEffect(() => {
    if (isSigningUp) {
      setShowLoadingAnimation(true);
      setTimeout(() => setShowLoadingAnimation(false), 500);
    }
  }, [isSigningUp]);

  const submitDisabled = (isSubmitted && !isValid) || !isDirty;

  useEffect(() => {
    if (firstStepFilled) {
      trigger("firstName").then();
      trigger("lastName").then();
      trigger("birthDate").then();
    }
  }, [trigger, firstStepFilled]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderStepperCounter currentStep={stepperCounter} totalSteps={2} />
      ),
    });
  }, [navigation, stepperCounter]);

  return {
    formData,
    firstStepFilled,
    stepperCounter,
    firstStepCompletionPercentage,
    secondStepFilled,
    secondStepCompletionPercentage,
    canGoToNextStep,
    onNextStepButtonPressed,
    onPreviousStepButtonPressed,
    submitDisabled,
    triggerSubmit,
    showLoadingAnimation,
  };
};
