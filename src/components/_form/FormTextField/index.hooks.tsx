import useFormField from "@app/hooks/useFormField";
import { useCallback, useState } from "react";

export const useFormTextField = (name: string, type: "text" | "password") => {
  const [hideText, setHideText] = useState(type === "password");

  const { value, setValue, error } = useFormField<string>({
    name,
  });

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
    hideText,
    value,
    handleChange,
    error,
    onVisibilityIconTapped,
  };
};
