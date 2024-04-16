import { JSX, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

type SelectValue = string | string[];

type FilterableSelectScreenRouteParams = {
  value: SelectValue;
  onGoBack?: (value: SelectValue) => void;
  options: SelectOption[];
  multipleSelection?: boolean;
  showSubOptions?: boolean;
  pageProps: {
    pageTitle: string;
    pageDescription?: string;
    searchTextLabel?: string;
    listTitle?: string;
  };
};

export const useFilterableSelectScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    options,
    value,
    onGoBack,
    pageProps,
    multipleSelection,
    showSubOptions,
  } = useMemo<FilterableSelectScreenRouteParams>(
    () =>
      (route.params as FilterableSelectScreenRouteParams) ?? {
        options: [],
        value: "",
        onGoBack: () => {},
        multipleSelection: false,
        showSubOptions: false,
      },
    [route.params],
  );

  const hasSubOptions = useMemo(
    () => options.some((option) => option.options) && showSubOptions,
    [options, showSubOptions],
  );

  const { pageTitle, pageDescription, searchTextLabel, listTitle } = useMemo(
    () =>
      pageProps ?? {
        pageTitle: "Seleziona",
        searchTextLabel: "Cerca",
        listTitle: "Lista",
      },
    [pageProps],
  );

  const [filteredOptions, setFilteredOptions] =
    useState<SelectOption[]>(options);
  const [selectedOptions, setSelectedOptions] = useState<SelectValue | null>(
    null,
  );
  const [searchText, setSearchText] = useState<string>("");
  const [openedOption, setOpenedOption] = useState<string | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const onTextFieldChange = useCallback(
    (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const newText = event.nativeEvent.text;
      if (newText.length > 3) {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setSearchText(newText);
        }, 150);
      } else setSearchText("");
      return;
    },
    [setSearchText, timerRef],
  );

  const onOpenOption = useCallback(
    (option: SelectOption) => {
      setOpenedOption((prevValue) =>
        option.value !== prevValue ? option.value : null,
      );
    },
    [setOpenedOption],
  );

  const confirmSelection = useCallback(
    (values?: SelectValue) => {
      onGoBack?.(values ?? selectedOptions ?? "");
      setTimeout(() => {
        navigation.goBack();
      }, 50);
    },
    [selectedOptions, onGoBack, navigation, multipleSelection, hasSubOptions],
  );

  const onOptionSelected = useCallback(
    (optionValue: string) => {
      let newValue: SelectValue;
      if (multipleSelection) {
        if (
          Array.isArray(selectedOptions) &&
          selectedOptions.includes(optionValue)
        ) {
          newValue = selectedOptions.filter(
            (prevValue) => prevValue !== optionValue,
          );
        } else {
          newValue = [...(selectedOptions ?? []), optionValue];
        }
        setSelectedOptions(newValue);
      } else {
        newValue = optionValue;
        setSelectedOptions(newValue);
        confirmSelection(newValue);
      }
    },
    [selectedOptions, onGoBack, navigation, multipleSelection],
  );

  const isSelected = useCallback(
    (option: SelectOption) => selectedOptions?.includes(option.value),
    [selectedOptions],
  );

  const selectedQuantity = useCallback(
    (item: SelectOption) => {
      if (item) {
        return item.options?.filter((option) => {
          return selectedOptions?.includes(option.value);
        }).length;
      }
    },
    [selectedOptions],
  );

  useEffect(() => {
    if (!searchText) {
      setFilteredOptions(options);
    } else {
      const newOptions = [...options]
        .map((option) => {
          if (option.label.toLowerCase().includes(searchText.toLowerCase())) {
            return option;
          } else if (hasSubOptions) {
            const subOptions = option.options?.filter((subOption) =>
              subOption.label.toLowerCase().includes(searchText.toLowerCase()),
            );
            if (subOptions?.length) {
              return { ...option, options: subOptions };
            }
          }
          return null;
        })
        .filter(Boolean) as SelectOption[];
      setFilteredOptions(newOptions);
    }
  }, [options, searchText, hasSubOptions]);

  useEffect(() => {
    // Get initial value from route params
    if (value && options.length) {
      setSelectedOptions(value);
    }
  }, [value, options]);

  return {
    filteredOptions,
    onTextFieldChange,
    pageTitle,
    pageDescription,
    searchText,
    searchTextLabel,
    listTitle,
    onOptionSelected,
    onOpenOption,
    openedOption,
    hasSubOptions,
    multipleSelection,
    isSelected,
    selectedQuantity,
    confirmSelection,
  };
};
