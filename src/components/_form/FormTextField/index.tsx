import React, { memo } from "react";
import { useFormTextField } from "./index.hooks";
import { Text, TextField, TextFieldProps } from "react-native-ui-lib";

const TextInputStyle: TextFieldProps["style"] = {
  paddingTop: 16,
  paddingLeft: 16,
  paddingRight: 16,
  paddingBottom: 16,
  borderWidth: 1.5,
  borderRadius: 12,
  borderColor: "black",
};

export type FormTextFieldProps = {
  name: string;
  label?: string;
} & Omit<TextFieldProps, "style">;

export const FormTextField = memo(
  ({ name, label, ...props }: FormTextFieldProps) => {
    const { value, handleChange, error } = useFormTextField(name);

    return (
      <TextField
        marginT-8
        grey10
        value={value}
        label={label}
        onChangeText={handleChange}
        enableErrors={!!error}
        validationMessage={error ?? undefined}
        autoCapitalize="none"
        autoCorrect={false}
        style={{
          ...TextInputStyle,
        }}
      />
    );
  },
);
FormTextField.displayName = "FormTextField";
