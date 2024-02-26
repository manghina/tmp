import React, { JSX, memo } from "react";
import { FormTextField } from "../FormTextField";
import { TouchableOpacity } from "react-native-ui-lib";
import { useFormNewScreenFilterableSelect } from "./index.hooks";

type FormNewScreenFilterableSelectProps = {
  name: string;
  options: { label: string; value: string }[];
  label?: string;
  pageProps: {
    pageTitle: string;
    pageDescription?: string;
    searchTextLabel?: string;
    listTitle?: string;
    renderItem?: (
      item: { label: string; value: string },
      index: number,
    ) => JSX.Element;
  };
};

export const FormNewScreenFilterableSelect = memo(
  ({ name, label, options, pageProps }: FormNewScreenFilterableSelectProps) => {
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
