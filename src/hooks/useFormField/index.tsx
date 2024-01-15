import { useCallback } from "react";
import { useFormContext, useWatch } from "react-hook-form";

type useFormFieldProps = {
  name: string;
};

const useFormField = <T,>({ name }: useFormFieldProps) => {
  const {
    control,
    formState: { errors, isSubmitted },
    setValue: _setValue,
    getFieldState,
    trigger,
  } = useFormContext();

  const value: T = useWatch({
    control,
    name,
  });

  const setValue = useCallback(
    (newValue: T) => {
      _setValue(name, newValue, { shouldDirty: true, shouldTouch: true });

      if (isSubmitted) {
        trigger(name).then();
      }
    },
    [name, _setValue, isSubmitted, trigger],
  );

  const error: string | null = getFieldState(name)?.error?.message ?? null;

  return {
    value,
    setValue,
    error,
  };
};

export default useFormField;
