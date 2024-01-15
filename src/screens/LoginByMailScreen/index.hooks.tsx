import { RouteProp, useRoute } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux-store";

// Route params
type ParamList = {
  Detail: {
    email: string;
  };
};

type LoginByMailFormData = {
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

export const useLoginByMailScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute<RouteProp<ParamList, "Detail">>();

  const formData = useForm<LoginByMailFormData>({
    defaultValues: {
      email: route.params.email,
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    formState: { isDirty, isValid, isSubmitted },
  } = formData;

  const submitDisabled = !isDirty || (!isValid && isSubmitted);

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(actions.postAccountsSessions.request(data));
      }),
    [dispatch, handleSubmit],
  );

  return { formData, triggerSubmit, submitDisabled };
};
