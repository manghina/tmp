import { useCallback } from "react";
import { useFormContext, useWatch } from "react-hook-form";

type useFormFieldProps = {
  name: string;
};

const useFormField = <T,>({ name }: useFormFieldProps) => {
  const {
    control,
    formState: { isSubmitted },
    setValue: _setValue,
    getFieldState,
  } = useFormContext();

  const value: T = useWatch({
    control,
    name,
  });

  const error: string | null = getFieldState(name)?.error?.message ?? null;

  const setValue = useCallback(
    (newValue: T) => {
      _setValue(name, newValue, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: isSubmitted || Boolean(error),
      });
    },
    [_setValue, name, isSubmitted, error],
  );

  return {
    value,
    setValue,
    error,
  };
};

export default useFormField;
