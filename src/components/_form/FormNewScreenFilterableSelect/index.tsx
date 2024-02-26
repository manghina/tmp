import React, { JSX, memo } from "react";
import { FormTextField } from "@app/components/_form/FormTextField";
import { TouchableOpacity } from "react-native-ui-lib";
import { useFormNewScreenFilterableSelect } from "./index.hooks";

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
};

export const FormNewScreenFilterableSelect = memo(
  <T extends { label: string; value: string }>({
    name,
    label,
    options,
    pageProps,
  }: FormNewScreenFilterableSelectProps<T>) => {
    const { onFieldClicked } = useFormNewScreenFilterableSelect({
      name,
      options,
      pageProps,
    });

    return (
      <TouchableOpacity onPress={onFieldClicked}>
        <FormTextField name={name} label={label} onFocus={onFieldClicked} />
      </TouchableOpacity>
    );
  },
);

FormNewScreenFilterableSelect.displayName = "FormNewScreenFilterableSelect";
