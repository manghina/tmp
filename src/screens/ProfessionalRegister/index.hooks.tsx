import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, useWatch } from "react-hook-form";
import React, { useCallback, useLayoutEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { HeaderStepperCounter } from "@app/components/HeaderStepperCounter";

const provincesOptions = [
  {
    label: "Agrigento",
    value: "AG",
  },
  {
    label: "Alessandria",
    value: "AL",
  },
  {
    label: "Ancona",
    value: "AN",
  },
  {
    label: "Aosta",
    value: "AO",
  },
  {
    label: "Arezzo",
    value: "AR",
  },
  {
    label: "Ascoli Piceno",
    value: "AP",
  },
  {
    label: "Asti",
    value: "AT",
  },
  {
    label: "Avellino",
    value: "AV",
  },
  {
    label: "Bari",
    value: "BA",
  },
  {
    label: "Barletta-Andria-Trani",
    value: "BT",
  },
  {
    label: "Belluno",
    value: "BL",
  },
  {
    label: "Benevento",
    value: "BN",
  },
  {
    label: "Bergamo",
    value: "BG",
  },
  {
    label: "Biella",
    value: "BI",
  },
  {
    label: "Bologna",
    value: "BO",
  },
  {
    label: "Bolzano",
    value: "BZ",
  },
  {
    label: "Brescia",
    value: "BS",
  },
  {
    label: "Brindisi",
    value: "BR",
  },
  {
    label: "Cagliari",
    value: "CA",
  },
  {
    label: "Caltanissetta",
    value: "CL",
  },
  {
    label: "Campobasso",
    value: "CB",
  },
  {
    label: "Carbonia-Iglesias",
    value: "CI",
  },
  {
    label: "Caserta",
    value: "CE",
  },
  {
    label: "Catania",
    value: "CT",
  },
  {
    label: "Catanzaro",
    value: "CZ",
  },
  {
    label: "Chieti",
    value: "CH",
  },
  {
    label: "Como",
    value: "CO",
  },
  {
    label: "Cosenza",
    value: "CS",
  },
  {
    label: "Cremona",
    value: "CR",
  },
  {
    label: "Crotone",
    value: "KR",
  },
  {
    label: "Cuneo",
    value: "CN",
  },
  {
    label: "Enna",
    value: "EN",
  },
  {
    label: "Fermo",
    value: "FM",
  },
  {
    label: "Ferrara",
    value: "FE",
  },
  {
    label: "Firenze",
    value: "FI",
  },
  {
    label: "Foggia",
    value: "FG",
  },
  {
    label: "Forlì-Cesena",
    value: "FC",
  },
  {
    label: "Frosinone",
    value: "FR",
  },
  {
    label: "Genova",
    value: "GE",
  },
  {
    label: "Gorizia",
    value: "GO",
  },
  {
    label: "Grosseto",
    value: "GR",
  },
  {
    label: "Imperia",
    value: "IM",
  },
  {
    label: "Isernia",
    value: "IS",
  },
  {
    label: "La Spezia",
    value: "SP",
  },
  {
    label: "L'Aquila",
    value: "AQ",
  },
  {
    label: "Latina",
    value: "LT",
  },
  {
    label: "Lecce",
    value: "LE",
  },
  {
    label: "Lecco",
    value: "LC",
  },
  {
    label: "Livorno",
    value: "LI",
  },
  {
    label: "Lodi",
    value: "LO",
  },
  {
    label: "Lucca",
    value: "LU",
  },
  {
    label: "Macerata",
    value: "MC",
  },
  {
    label: "Mantova",
    value: "MN",
  },
  {
    label: "Massa-Carrara",
    value: "MS",
  },
  {
    label: "Matera",
    value: "MT",
  },
];

const professionsOptions = [
  {
    label: "Medico",
    value: "Medico",
  },
  {
    label: "Infermiere",
    value: "Infermiere",
  },
  {
    label: "Chirurgo",
    value: "Chirurgo",
  },
  {
    label: "Dentista",
    value: "Dentista",
  },
  {
    label: "Farmacista",
    value: "Farmacista",
  },
  {
    label: "Ostetrica",
    value: "Ostetrica",
  },
  {
    label: "Fisioterapista",
    value: "Fisioterapista",
  },
  {
    label: "Psicologo",
    value: "Psicologo",
  },
  {
    label: "Dietista",
    value: "Dietista",
  },
  {
    label: "Radiologo",
    value: "Radiologo",
  },
  {
    label: "Biologo",
    value: "Biologo",
  },
  {
    label: "Nutrizionista",
    value: "Nutrizionista",
  },
  {
    label: "Optometrista",
    value: "Optometrista",
  },
  {
    label: "Logopedista",
    value: "Logopedista",
  },
  {
    label: "Podologo",
    value: "Podologo",
  },
  {
    label: "Terapista occupazionale",
    value: "Terapista occupazionale",
  },
  {
    label: "Ortopedico",
    value: "Ortopedico",
  },
  {
    label: "Anestesista",
    value: "Anestesista",
  },
  {
    label: "Cardiologo",
    value: "Cardiologo",
  },
  {
    label: "Neurologo",
    value: "Neurologo",
  },
];

interface ProfessionalRegisterFormData {
  firstName: string;
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
  firstName: yup.string().required("Inserisci il tuo nome"),
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
  "firstName",
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

  const stepperIndex = useSelector(
    selectors.getProfessionalRegisterStepperCounter,
  );

  const formData = useForm<ProfessionalRegisterFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
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

  const [firstName, lastName, birthDate, phonePrefix, phoneNumber] = useWatch({
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
      Boolean(firstName) &&
      Boolean(lastName) &&
      Boolean(birthDate) &&
      Boolean(phonePrefix) &&
      Boolean(phoneNumber),
    [firstName, lastName, birthDate, phonePrefix, phoneNumber],
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
      ([firstName, lastName, birthDate, phonePrefix, phoneNumber].filter(
        Boolean,
      ).length /
        5) *
      100,
    [firstName, lastName, birthDate, phonePrefix, phoneNumber],
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
        console.log(data);
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

  const goToCountryChooser = useCallback(() => {
    navigation.navigate("CountryChooser");
  }, [navigation]);

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
    provincesOptions,
    professionsOptions,
    stepperIndex,
    canGoToNextStep,
    goToCountryChooser,
    currentStepCompletionPercentage,
    currentStepFilled,
    onNextStepButtonPressed,
    onPreviousStepButtonPressed,
    triggerProfessionalRegisterSubmit,
  };
};
