import useFormField from "@app/hooks/useFormField";
import { useCallback, useEffect, useState } from "react";

export const useFormRadioGroup = (name: string) => {
  const { value, setValue, error } = useFormField<string>({ name });
  const [selectedOption, setSelectedOption] = useState<String | null>(null);

  const onOptionSelected = useCallback(
    (option: { label: string; value: string }) => {
      setValue(option.value);
    },
    [setValue],
  );

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  return { onOptionSelected, selectedOption };
};
