import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { useMemo } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Inserisci una mail valida")
    .required("La mail è obbligatoria"),
});

export const useLoginBottomSheet = ({
  onLoginClose,
}: {
  onLoginClose: () => void;
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const formData = useForm<{ email: string }>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const {
    handleSubmit,
    formState: { isDirty },
    reset,
  } = formData;

  const submitDisabled = useMemo(() => !isDirty, [isDirty]);

  const onProceedButtonPressed = useMemo(
    () =>
      handleSubmit((data) => {
        navigation.navigate("login", {
          email: data.email,
        });
        onLoginClose();
        reset();
      }),
    [dispatch, navigation, handleSubmit],
  );

  return {
    formData,
    submitDisabled,
    onProceedButtonPressed,
  };
};
