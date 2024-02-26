import { JSX, useCallback, useEffect, useMemo, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

type FilterableSelectScreenRouteParams = {
  value: string;
  onGoBack?: (value: string) => void;
  options: { label: string; value: string }[];
  searchTextLabel?: string;
  renderItem?: (
    item: { label: string; value: string },
    index: number,
  ) => JSX.Element;
};

export const useFilterableSelectScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { options, renderItem, value, onGoBack, searchTextLabel } =
    useMemo<FilterableSelectScreenRouteParams>(
      () =>
        (route.params as FilterableSelectScreenRouteParams) ?? {
          options: [],
          value: "",
          onGoBack: () => {},
        },
      [route.params],
    );

  const [searchText, setSearchText] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<String | null>(null);

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
    searchText,
    searchTextLabel,
    onOptionSelected,
    renderItem,
  };
};
