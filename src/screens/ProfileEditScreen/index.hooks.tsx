import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { User } from "@app/models/User";
import * as yup from "yup";
import {
  countryOptions,
  genderOptions,
  phonePrefixOptions,
} from "./constantData";
import { set, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import { NativeSyntheticEvent, TextInputKeyPressEventData } from "react-native";

interface UserEditFormData {
  name: string;
  lastName: string;
  birthDate: Date;
  phonePrefix: string;
  phoneNumber: string;
  country: string;
  gender: string;
}

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().required("Inserisci il tuo nome"),
  lastName: yup.string().required("Inserisci il tuo cognome"),
  birthDate: yup.date().required("Inserisci la tua data di nascita"),
  phonePrefix: yup
    .string()
    .oneOf(phonePrefixOptions.map((phonePrefix) => phonePrefix.value))
    .required("Scegli il prefisso telefonico"),
  phoneNumber: yup.string().required("Inserisci il tuo numero di telefono"),
  country: yup
    .string()
    // .oneOf(countryOptions.map((country) => country.value))
    .required("Inserisci la tua nazione"),
  gender: yup
    .string()
    .oneOf(genderOptions.map((gender) => gender.value))
    .required("Seleziona il tuo sesso biologico"),
});

const fieldKeys = [
  "name",
  "lastName",
  "birthDate",
  "phonePrefix",
  "phoneNumber",
  "country",
  "gender",
] as const;

export const useUserProfileEditScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const me: User | null = useSelector(selectors.getMe);

  const formData = useForm<UserEditFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: me?.name || "",
      lastName: me?.lastName || "",
      birthDate: me?.birthDate
        ? moment(me.birthDate, "DD-MM-YYYY").toDate()
        : undefined,
      phonePrefix: "+39",
      phoneNumber: "",
      country: "🇮🇹 Italy",
      gender: "male",
    },
  });

  const [submitError, setSubmitError] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    trigger,
    formState: { isDirty, isValid, isSubmitted, errors },
  } = formData;

  const [name, lastName, birthDate, phonePrefix, phoneNumber, country, gender] =
    useWatch({
      control,
      name: fieldKeys,
    });

  const [otpCode, setOtpCode] = useState<string>("");
  const isToVerifyPhoneNumber = useMemo(
    () => Boolean(phoneNumber.length > 0 && otpCode.length < 6),
    [phoneNumber, otpCode],
  );
  const isVerifiedPhoneNumber = useMemo(
    () => Boolean(phoneNumber.length > 0 && otpCode.length === 6),
    [phoneNumber, otpCode],
  );
  const [showPhoneNumberVerificationStep, setShowPhoneNumberVerificationStep] =
    useState<boolean>(false);

  const handleOpenPhoneNumberVerification = useCallback(() => {
    setOtpCode("");
    setShowPhoneNumberVerificationStep(!showPhoneNumberVerificationStep);
  }, [showPhoneNumberVerificationStep]);

  const handlePhoneNumberVerificationCodeChange = useCallback(
    (value: string, index: number) => {
      const newValues = otpCode.split("");
      if (value.length > 0) {
        newValues.push(value);
      } else {
        newValues.splice(index, 1);
      }
      setOtpCode(newValues.join(""));
      if (newValues.length === 6) {
        setShowPhoneNumberVerificationStep(false);
      }
    },
    [otpCode],
  );

  const onOtpKeyPressCallbacks = useMemo(
    () =>
      new Array(6)
        .fill(0)
        .map(
          (_, index) =>
            ({
              nativeEvent,
            }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
              if (
                nativeEvent.key === "Backspace" &&
                !otpCode[index] &&
                index > 0
              ) {
                handlePhoneNumberVerificationCodeChange("", index - 1);
              }
            },
        ),
    [otpCode],
  );

  const onOtpChangeTextCallbacks = useMemo(
    () =>
      new Array(6).fill(0).map((_, index) => (value: string) => {
        handlePhoneNumberVerificationCodeChange(value, index);
      }),
    [otpCode],
  );

  useEffect(() => {
    if (isVerifiedPhoneNumber) {
      setOtpCode("");
    }
  }, [phoneNumber]);

  const allFieldsFilled = useMemo(
    () =>
      Boolean(name) &&
      Boolean(lastName) &&
      Boolean(birthDate) &&
      Boolean(phonePrefix) &&
      Boolean(phoneNumber) &&
      Boolean(country) &&
      Boolean(gender),
    [name, lastName, birthDate, phonePrefix, phoneNumber, country, gender],
  );

  const submitDisabled = useMemo(
    () => !isDirty || (isSubmitted && !isValid) || !allFieldsFilled,
    [isDirty, isSubmitted, isValid, allFieldsFilled],
  );

  const triggerProfileEditSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        console.log(data);
        dispatch(
          actions.patchUsersMe.request({
            ...data,
            birthDate: moment(data.birthDate).format("DD-MM-YYYY"),
          }),
        );
      }),
    [dispatch, handleSubmit],
  );

  const isError = useSelector(
    selectors.getAjaxIsLoadingByApi("apis/users/me/patch"),
  );

  useEffect(() => {
    console.log("Error", isError);
    if (isError) {
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
    }
  }, [isError]);

  useEffect(() => {
    if (allFieldsFilled) {
      trigger("name").then();
      trigger("lastName").then();
      trigger("birthDate").then();
      trigger("phonePrefix").then();
      trigger("phoneNumber").then();
      trigger("country").then();
      trigger("gender").then();
    }
  }, [trigger, allFieldsFilled]);

  useEffect(() => {
    if (!me) {
      navigation.replace("login");
    }
  }, [me, navigation]);

  useEffect(() => {
    dispatch(actions.getUsersMeRequests.request({}));
  }, [dispatch]);

  return {
    me,
    formData,
    countryOptions,
    phonePrefixOptions,
    genderOptions,
    submitDisabled,
    triggerProfileEditSubmit,
    submitError,
    isToVerifyPhoneNumber,
    isVerifiedPhoneNumber,
    showPhoneNumberVerificationStep,
    otpCode,
    handleOpenPhoneNumberVerification,
    onOtpKeyPressCallbacks,
    onOtpChangeTextCallbacks,
  };
};
