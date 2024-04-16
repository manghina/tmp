import useFormField from "@app/hooks/useFormField";
import { useEffect, useMemo, useState } from "react";

type SelectValue = string | string[];

export const useFormSelectField = (
  name: string,
  options: SelectOption[],
  reducedLabel?: boolean,
  showSubOptions?: boolean,
) => {
  const { value, error } = useFormField<SelectValue>({
    name,
  });

  const [formattedValue, setFormattedValue] = useState<string>("");
  const [subOptionsValue, setSubOptionsValue] = useState<string>("");

  const hasSubOptions = useMemo(
    () => options.some((option) => option.options) && showSubOptions,
    [options],
  );

  useEffect(() => {
    if (typeof value === "string") {
      const option = options.find((o) => o.value === value);
      const optionLabel = reducedLabel ? option?.reducedLabel : option?.label;
      setFormattedValue(optionLabel ?? "");
    }

    if (Array.isArray(value)) {
      let newValue = "";
      let selectedOptions: SelectOption[] = [];
      if (hasSubOptions) {
        selectedOptions = options.filter((option) => {
          return option.options?.some((subOption) =>
            value.includes(subOption.value),
          );
        });

        const subOptions = selectedOptions
          .reduce(
            (acc, option) => [...acc, ...(option?.options ?? [])],
            [] as SelectOption[],
          )
          .filter((option) => value.includes(option.value));

        let newSubValue = subOptions.map((v) => v.label).join(", ");
        if (newSubValue.length > 40) {
          newSubValue = newSubValue.slice(0, 40) + "...";
        }
        setSubOptionsValue(newSubValue);
      } else {
        selectedOptions = options.filter((option) =>
          value.includes(option.value),
        );
      }

      newValue = selectedOptions.map((v) => v.label).join(", ");
      if (newValue.length > 40) {
        newValue = newValue.slice(0, 40) + "...";
      }
      setFormattedValue(newValue);
    }
  }, [value, options, hasSubOptions, reducedLabel]);

  return {
    error,
    formattedValue,
    subOptionsValue,
  };
};
