import { JSX, useCallback } from "react";
import useFormField from "@app/hooks/useFormField";
import { useNavigation } from "@react-navigation/native";

export const useFormNewScreenFilterableSelect = <
  T extends { label: string; value: string },
>({
  name,
  options,
  pageProps,
}: {
  name: string;
  options: T[];
  pageProps: {
    pageTitle: string;
    pageDescription?: string;
    searchTextLabel?: string;
    listTitle?: string;
    renderItem?: (item: T, index: number) => JSX.Element;
  };
}) => {
  const navigation = useNavigation<any>();
  const { value, setValue } = useFormField<string>({ name });

  const onBackFromChoosingScreen = useCallback(
    (value?: string) => {
      if (value) {
        setValue(value);
      }
    },
    [setValue],
  );

  const onFieldClicked = useCallback(() => {
    navigation.navigate("form-filterable-select", {
      onGoBack: onBackFromChoosingScreen,
      options,
      value,
      pageProps,
    });
  }, [navigation, onBackFromChoosingScreen, options, pageProps, value]);

  return { onFieldClicked };
};
