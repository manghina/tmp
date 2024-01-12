import useFormField from "@app/hooks/useFormField";
import { useCallback, useState } from "react";

export const useFormHiddenTextField = (name: string) => {
  const [hideText, setHideText] = useState(true);

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
