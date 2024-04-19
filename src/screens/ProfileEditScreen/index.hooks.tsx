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
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import { LoginScreen } from "@app/screens/Login";

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

export const useUserProfileEditScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const me: User | null = useSelector(selectors.getMe);

  const defaultValues = useMemo(
    () => ({
      name: me?.name || "",
      lastName: me?.lastName || "",
      birthDate: me?.birthDate
        ? moment(me.birthDate, "DD-MM-YYYY").toDate()
        : undefined,
      phonePrefix: "+39",
      phoneNumber: "",
      country: "🇮🇹 Italy",
      gender: "male",
    }),
    [me],
  );

  const formData = useForm<UserEditFormData>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = formData;

  const phoneNumber = useWatch({
    control,
    name: "phoneNumber",
  });

  const [isVerifiedPhoneNumber, setIsVerifiedPhoneNumber] =
    useState<boolean>(false);

  const isToVerifyPhoneNumber = useMemo(
    () => Boolean(phoneNumber.length > 0 && !isVerifiedPhoneNumber),
    [phoneNumber, isVerifiedPhoneNumber],
  );

  const handleGoBackFromOtpVerification = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  const handleOtpVerification = useCallback((otpCode: string) => {
    console.log(otpCode);
    // make api call to verify otp code

    // fake code
    setTimeout(() => {
      navigation.pop();
      setIsVerifiedPhoneNumber(true);
    }, 2000);
  }, []);

  const isPatchingUser = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.patchUsersMe.api),
  );

  const submitDisabled = useMemo(
    () =>
      !isDirty ||
      isPatchingUser ||
      (phoneNumber.length > 0 && isToVerifyPhoneNumber),
    [isDirty, isPatchingUser, isToVerifyPhoneNumber, phoneNumber],
  );

  const triggerProfileEditSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(
          actions.patchUsersMe.request({
            ...data,
            birthDate: moment(data.birthDate).format("DD-MM-YYYY"),
          }),
        );
      }),
    [dispatch, handleSubmit],
  );

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  useEffect(() => {
    setIsVerifiedPhoneNumber(false);
  }, [phoneNumber]);

  useEffect(() => {
    if (!me) {
      navigation.replace(LoginScreen.RouteName);
    }
  }, [me, navigation]);

  return {
    me,
    formData,
    countryOptions,
    phonePrefixOptions,
    genderOptions,
    submitDisabled,
    triggerProfileEditSubmit,
    isToVerifyPhoneNumber,
    isVerifiedPhoneNumber,
    handleGoBackFromOtpVerification,
    handleOtpVerification,
  };
};
