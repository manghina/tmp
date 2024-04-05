import React, { memo } from "react";
import { useFormTimePicker } from "./index.hooks";
import { DateTimePicker } from "react-native-ui-lib";
import moment from "moment";
import { BaseTextField } from "@app/components/_baseInputs/BaseTextField";

export type FormTimePickerProps = {
  name: string;
  label?: string;
};

export const FormTimePicker = memo(
  ({ name, label, ...props }: FormTimePickerProps) => {
    const { value, handleChange, error } = useFormTimePicker(name);

    return (
      <DateTimePicker
        value={value}
        onChange={handleChange}
        mode="time"
        renderInput={(props) => (
          <BaseTextField
            value={value ? moment(value).format("HH:mm") : ""}
            label={label}
            enableErrors={!!error}
            validationMessage={error ?? undefined}
          />
        )}
      />
    );
  },
);

FormTimePicker.displayName = "FormTimePicker";
