import useFormField from "@app/hooks/useFormField";
import { useMemo, useState } from "react";

type SelectValue = SelectOption | SelectOption[] | string;

export const useFormSelectField = (
  name: string,
  options: SelectOption[],
  reducedLabel?: boolean,
) => {
  const { value, error } = useFormField<SelectValue>({
    name,
  });

  const [subOptionsValue, setSubOptionsValue] = useState<string>("");

  const formattedValue: SelectValue = useMemo(() => {
    if (value === undefined || value === null) {
      return "";
    }
    if (typeof value === "string") {
      const option = options.find((o) => o.value === value);
      const optionLabel = reducedLabel ? option?.reducedLabel : option?.label;
      return optionLabel ?? "";
    }
    if (Array.isArray(value)) {
      let newSubOptionsValue = "";
      if (value.some((v) => "options" in v)) {
        value.forEach((v) => {
          if (v.options) {
            if (v.options.length > 1) {
              newSubOptionsValue += v.options?.map((v) => v.label).join(", ");
              newSubOptionsValue += ", ";
            } else newSubOptionsValue += `${v.options[0].label}, `;
          }
        });
        if (newSubOptionsValue) {
          newSubOptionsValue = newSubOptionsValue.slice(0, -2);
          if (newSubOptionsValue.length > 45) {
            newSubOptionsValue = newSubOptionsValue.slice(0, 45) + "...";
          }
        }
      }
      setSubOptionsValue(newSubOptionsValue);
      let newValue = value.map((v) => v.label).join(", ");
      if (newValue.length > 40) {
        newValue = newValue.slice(0, 40) + "...";
      }
      return newValue;
    }
    if ("label" in value) {
      return value.label;
    }

    return value;
  }, [value, options]);

  return {
    error,
    formattedValue,
    subOptionsValue,
  };
};
