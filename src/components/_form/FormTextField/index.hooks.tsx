import useFormField from "@app/hooks/useFormField";
import { useCallback } from "react";

export const useFormTextField = (name: string) => {
  const { value, setValue, error } = useFormField<string>({
    name,
  });

  const handleChange = useCallback(
    (newValue: string) => {
      setValue(newValue);
    },
    [setValue],
  );

  return {
    value,
    handleChange,
    error,
  };
};
