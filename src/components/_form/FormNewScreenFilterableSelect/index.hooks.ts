import { JSX, useCallback, useMemo, useRef } from "react";
import useFormField from "@app/hooks/useFormField";
import { useNavigation } from "@react-navigation/native";
import { FilterableSelectScreen } from "@app/screens/FilterableSelect";
import { TextInput } from "react-native";

type SelectValue = string | string[];

export const useFormNewScreenFilterableSelect = <T extends SelectOption>({
  name,
  options,
  pageProps,
  multipleSelection,
  showSubOptions,
}: {
  name: string;
  options: T[];
  multipleSelection?: boolean;
  showSubOptions?: boolean;
  pageProps: {
    pageTitle: string;
    pageDescription?: string;
    searchTextLabel?: string;
    listTitle?: string;
  };
}) => {
  const navigation = useNavigation<any>();
  const { value, setValue } = useFormField<SelectValue>({ name });

  const inputRef = useRef<TextInput>(null);

  const onBackFromChoosingScreen = useCallback(
    (value?: SelectValue) => {
      if (value) {
        setValue(value);
      }
    },
    [setValue, value, multipleSelection, options],
  );

  const onFieldClicked = useCallback(() => {
    inputRef.current?.blur();
    navigation.navigate(FilterableSelectScreen.RouteName, {
      onGoBack: onBackFromChoosingScreen,
      options,
      value,
      pageProps,
      multipleSelection,
      showSubOptions,
    });
  }, [
    navigation,
    onBackFromChoosingScreen,
    options,
    pageProps,
    value,
    inputRef,
    multipleSelection,
  ]);

  return { onFieldClicked, inputRef };
};
