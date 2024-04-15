import { JSX, useCallback, useMemo, useRef } from "react";
import useFormField from "@app/hooks/useFormField";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";

type SelectValue = SelectOption | SelectOption[] | string;

export const useFormNewScreenFilterableSelect = <T extends SelectOption>({
  name,
  options,
  pageProps,
  multipleSelection,
}: {
  name: string;
  options: T[];
  multipleSelection?: boolean;
  pageProps: {
    pageTitle: string;
    pageDescription?: string;
    searchTextLabel?: string;
    listTitle?: string;
    renderItem?: (item: T, index: number) => JSX.Element;
  };
}) => {
  const navigation = useNavigation<any>();
  const { value, setValue } = useFormField<SelectValue>({ name });

  const inputRef = useRef<TextInput>(null);

  const hasSubOptions = useMemo(
    () => options.some((option) => option.options),
    [options],
  );

  const onBackFromChoosingScreen = useCallback(
    (value?: SelectValue) => {
      if (value) {
        if (
          !hasSubOptions &&
          !Array.isArray(value) &&
          typeof value !== "string"
        ) {
          setValue(value.value);
        } else {
          setValue(value);
        }
      }
    },
    [setValue, value, multipleSelection, options],
  );

  const onFieldClicked = useCallback(() => {
    inputRef.current?.blur();
    navigation.navigate("form-filterable-select", {
      onGoBack: onBackFromChoosingScreen,
      options,
      value,
      pageProps,
      multipleSelection,
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
