import useFormField from "@app/hooks/useFormField";
import { useCallback, useState } from "react";

export const useFormTextField = (name: string, type: "text" | "password") => {
  const [isFocused, setIsFocused] = useState(false);
  const [hideText, setHideText] = useState(type === "password");

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

  const onVisibilityIconTapped = useCallback(() => {
    setHideText((prev) => !prev);
  }, []);

  return {
    isFocused,
    hideText,
    value,
    handleChange,
    error,
    onFocus,
    onBlur,
    onVisibilityIconTapped,
  };
};
