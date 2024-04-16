import React, { JSX, memo } from "react";
import { TouchableOpacity } from "react-native-ui-lib";
import { useFormNewScreenFilterableSelect } from "./index.hooks";
import { StyleProp, TextStyle } from "react-native";
import { FormSelectField } from "../FormSelectField";

type FormNewScreenFilterableSelectProps<T extends SelectOption> = {
  name: string;
  options: T[];
  label?: string;
  multipleSelection?: boolean;
  showSubOptions?: boolean;
  pageProps: {
    pageTitle: string;
    pageDescription?: string;
    searchTextLabel?: string;
    listTitle?: string;
  };
  style?: StyleProp<TextStyle>;
  disabled?: boolean;
  reducedLabel?: boolean;
};

export const FormNewScreenFilterableSelect = <T extends SelectOption>({
  name,
  label,
  options,
  pageProps,
  style,
  disabled = false,
  multipleSelection,
  reducedLabel,
  showSubOptions,
}: FormNewScreenFilterableSelectProps<T>) => {
  const { onFieldClicked, inputRef } = useFormNewScreenFilterableSelect({
    name,
    options,
    pageProps,
    multipleSelection,
    showSubOptions,
  });
  return (
    <TouchableOpacity onPress={!disabled ? onFieldClicked : () => {}}>
      <FormSelectField
        showSubOptions={showSubOptions}
        reducedLabel={reducedLabel}
        options={options}
        inputRef={inputRef}
        disabled={disabled}
        name={name}
        label={label}
        onFocus={!disabled ? onFieldClicked : () => {}}
        style={style}
      />
    </TouchableOpacity>
  );
};

FormNewScreenFilterableSelect.displayName = "FormNewScreenFilterableSelect";
