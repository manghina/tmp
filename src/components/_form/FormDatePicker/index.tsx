import React, { memo } from "react";
import { useFormDatePicker } from "./index.hooks";
import { DateTimePicker } from "react-native-ui-lib";
import moment from "moment";
import { BaseTextField } from "@app/components/_baseInputs/BaseTextField";

export type FormDatePickerProps = {
  name: string;
  label?: string;
};

export const FormDatePicker = memo(
  ({ name, label, ...props }: FormDatePickerProps) => {
    const { value, handleChange, error } = useFormDatePicker(name);

    return (
      <DateTimePicker
        value={value}
        onChange={handleChange}
        mode="date"
        renderInput={(props) => (
          <BaseTextField
            value={value ? moment(value).format("DD/MM/YYYY") : ""}
            label={label}
            enableErrors={!!error}
            validationMessage={error ?? undefined}
          />
        )}
      />
    );
  },
);

FormDatePicker.displayName = "FormDatePicker";
