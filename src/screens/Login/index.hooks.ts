import { useNavigation } from "@react-navigation/native";
import { useForm, useWatch } from "react-hook-form";
import { useCallback, useEffect, useMemo, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { actions, selectors } from "../../redux-store";
import { useDispatch, useSelector } from "react-redux";

type LoginFormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Inserisci una mail valida")
    .required("La mail è obbligatoria"),
  password: yup.string().required("Inserisci la tua password"),
});

export const useLoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const formData = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isDirty, isSubmitted, isValid },
  } = formData;

  const isLogginIn = useSelector(
    selectors.getAjaxIsLoadingByApi("apis/accounts/sessions/post"),
  );
  const [showLoadingAnimation, setShowLoadingAnimation] =
    useState(!!isLogginIn);

  useEffect(() => {
    if (isLogginIn) {
      setShowLoadingAnimation(true);
      setTimeout(() => setShowLoadingAnimation(false), 500);
    }
  }, [isLogginIn]);

  const submitDisabled = !isDirty || (isSubmitted && !isValid) || !!isLogginIn;

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(actions.postAccountsSessions.request(data));
      }),
    [handleSubmit],
  );

  const [email, password] = useWatch({ control, name: ["email", "password"] });

  const allFieldsFilled = useMemo(
    () => Boolean(email) && Boolean(password),
    [email, password],
  );

  const onForgotPasswordButtonPressed = useCallback(() => {
    dispatch(actions.setForgotPasswordStepperCounter(1));
    navigation.navigate("forgot-password");
  }, [dispatch, navigation]);

  const onRegisterButtonPressed = useCallback(
    () => navigation.replace("home"),
    [navigation],
  );

  return {
    formData,
    submitDisabled,
    triggerSubmit,
    onForgotPasswordButtonPressed,
    onRegisterButtonPressed,
    allFieldsFilled,
    showLoadingAnimation,
  };
};
