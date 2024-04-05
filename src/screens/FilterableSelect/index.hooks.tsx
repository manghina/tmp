import { JSX, useCallback, useEffect, useMemo, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

type FilterableSelectScreenRouteParams = {
  value: string;
  onGoBack?: (value: string) => void;
  options: { label: string; value: string }[];
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

export const useFilterableSelectScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { options, value, onGoBack, pageProps } =
    useMemo<FilterableSelectScreenRouteParams>(
      () =>
        (route.params as FilterableSelectScreenRouteParams) ?? {
          options: [],
          value: "",
          onGoBack: () => {},
        },
      [route.params],
    );

  const { pageTitle, pageDescription, searchTextLabel, listTitle, renderItem } =
    useMemo(
      () =>
        pageProps ?? {
          pageTitle: "Seleziona",
          searchTextLabel: "Cerca",
          listTitle: "Lista",
        },
      [pageProps],
    );

  const [searchText, setSearchText] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const onTextFieldChange = useCallback(
    (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setSearchText(event.nativeEvent.text);
    },
    [setSearchText],
  );

  const onOptionSelected = useCallback(
    (option: { label: string; value: string }) => {
      setSelectedOption(option.value);
      onGoBack?.(option.value);
      setTimeout(() => {
        navigation.goBack();
      }, 50);
    },
    [setSelectedOption, onGoBack, navigation],
  );

  const filteredOptions = useMemo(
    () =>
      options.filter((option) =>
        option.label.toLowerCase().includes(searchText.toLowerCase()),
      ),
    [options, searchText],
  );

  useEffect(() => {
    // Get initial value from route params
    setSelectedOption(value);
  }, [value]);

  return {
    selectedOption,
    filteredOptions,
    onTextFieldChange,
    pageTitle,
    pageDescription,
    searchText,
    searchTextLabel,
    listTitle,
    onOptionSelected,
    renderItem,
  };
};
