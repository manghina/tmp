import useFormField from "@app/hooks/useFormField";
import { useCallback, useState } from "react";

export const useFormGooglePlacesTextField = (name: string) => {
  const [isFocused, setIsFocused] = useState(false);

  const { value, setValue, error } = useFormField<string>({
    name,
  });

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, [setIsFocused]);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, [setIsFocused]);

  const handleChange = useCallback(
    (newValue: string) => {
      setValue(newValue);
    },
    [setValue],
  );

  return {
    isFocused,
    value,
    handleChange,
    error,
    onFocus,
    onBlur,
  };
};
