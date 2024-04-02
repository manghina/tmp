import useFormField from "@app/hooks/useFormField";
import { useCallback } from "react";

export const useFormTimePicker = (name: string) => {
  const { value, setValue, error } = useFormField<Date>({
    name,
  });

  const handleChange = useCallback(
    (newValue: Date) => {
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
