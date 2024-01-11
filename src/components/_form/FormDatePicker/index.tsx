import React, { memo } from "react";
import { useFormDatePicker } from "./index.hooks";
import { DateTimePicker, TextFieldProps } from "react-native-ui-lib";

const TextInputStyle: TextFieldProps["style"] = {
  paddingTop: 16,
  paddingLeft: 16,
  paddingRight: 16,
  paddingBottom: 16,
  borderWidth: 1.5,
  borderRadius: 12,
  borderColor: "black",
};

export type FormDatePickerProps = {
  name: string;
  label?: string;
};

export const FormDateTimePicker = memo(
  ({ name, label, ...props }: FormDatePickerProps) => {
    const { value, handleChange, error } = useFormDatePicker(name);

    return (
      <DateTimePicker
        marginT-8
        grey10
        value={value}
        label={label}
        onChange={handleChange}
        style={{
          ...TextInputStyle,
        }}
        enableErrors={!!error}
        validationMessage={error ?? undefined}
        mode="date"
      />
    );
  },
);

FormDateTimePicker.displayName = "FormDateTimePicker";
