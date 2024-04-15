import React, { memo } from "react";
import { useFormSelectField } from "./index.hooks";
import { TextFieldProps } from "react-native-ui-lib";
import { BaseTextField } from "@app/components/_baseInputs/BaseTextField";
import { TextInput } from "react-native";

export type FormSelectFieldProps = {
  name: string;
  trailingAccessory?: TextFieldProps["trailingAccessory"];
  disabled?: boolean;
  inputRef?: React.RefObject<TextInput>;
  options: SelectOption[];
  reducedLabel?: boolean;
} & TextFieldProps;

export const FormSelectField = memo(
  ({
    name,
    trailingAccessory,
    disabled = false,
    inputRef,
    placeholder,
    options,
    reducedLabel,
    ...props
  }: FormSelectFieldProps) => {
    const { error, formattedValue, subOptionsValue } = useFormSelectField(
      name,
      options,
      reducedLabel,
    );
    return (
      <BaseTextField
        placeholder={placeholder ?? "Clicca e seleziona dalla lista"}
        inputRef={inputRef}
        editable={!disabled}
        value={formattedValue}
        subText={subOptionsValue}
        enableErrors={Boolean(error)}
        validationMessage={error}
        trailingAccessory={trailingAccessory}
        {...(props as any)}
      />
    );
  },
);
FormSelectField.displayName = "FormSelectField";
