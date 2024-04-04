import React, { JSX, memo } from "react";
import { FormTextField } from "@app/components/_form/FormTextField";
import { TouchableOpacity } from "react-native-ui-lib";
import { useFormNewScreenFilterableSelect } from "./index.hooks";
import { StyleProp, TextStyle } from "react-native";

type FormNewScreenFilterableSelectProps<
  T extends { label: string; value: string },
> = {
  name: string;
  options: T[];
  label?: string;
  pageProps: {
    pageTitle: string;
    pageDescription?: string;
    searchTextLabel?: string;
    listTitle?: string;
    renderItem?: (item: T, index: number) => JSX.Element;
  };
  style?: StyleProp<TextStyle>;
  disabled?: boolean;
};

export const FormNewScreenFilterableSelect = memo(
  <T extends { label: string; value: string }>({
    name,
    label,
    options,
    pageProps,
    style,
    disabled = false,
  }: FormNewScreenFilterableSelectProps<T>) => {
    const { onFieldClicked } = useFormNewScreenFilterableSelect({
      name,
      options,
      pageProps,
    });
    return (
      <TouchableOpacity onPress={!disabled ? onFieldClicked : () => {}}>
        <FormTextField
          disabled={disabled}
          name={name}
          label={label}
          onFocus={!disabled ? onFieldClicked : () => {}}
          style={style}
        />
      </TouchableOpacity>
    );
  },
);

FormNewScreenFilterableSelect.displayName = "FormNewScreenFilterableSelect";
