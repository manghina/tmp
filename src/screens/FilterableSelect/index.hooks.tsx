import { JSX, useCallback, useEffect, useMemo, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

type SelectOption = {
  label: string;
  value: string;
  isSelected?: boolean;
  selectedQuantity?: number;
  options?: Omit<SelectOption, "options" | "selectedQuantity">[];
};

type FilterableSelectScreenRouteParams = {
  value: string;
  onGoBack?: (value: string) => void;
  options: SelectOption[];
  multipleSelection?: boolean;
  pageProps: {
    pageTitle: string;
    pageDescription?: string;
    searchTextLabel?: string;
    listTitle?: string;
    renderItem?: (item: SelectOption, index: number) => JSX.Element;
  };
};

export const useFilterableSelectScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { options, value, onGoBack, pageProps, multipleSelection } =
    useMemo<FilterableSelectScreenRouteParams>(
      () =>
        (route.params as FilterableSelectScreenRouteParams) ?? {
          options: [],
          value: "",
          onGoBack: () => {},
          multipleSelection: false,
        },
      [route.params],
    );

  const hasSubOptions = useMemo(
    () => options.some((option) => option.options),
    [options],
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

  const [filteredOptions, setFilteredOptions] =
    useState<SelectOption[]>(options);
  const [searchText, setSearchText] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[] | null>(null);
  const [selectedSubOption, setSelectedSubOption] = useState<{
    category: string;
    value: string;
  } | null>(null);
  const [selectedSubOptions, setSelectedSubOptions] = useState<{
    [category: string]: string[];
  } | null>(null);
  const [openedOption, setOpenedOption] = useState<string | null>(null);

  const onTextFieldChange = useCallback(
    (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
      setSearchText(event.nativeEvent.text);
    },
    [setSearchText],
  );

  const onOpenOption = useCallback(
    (option: SelectOption) => {
      setOpenedOption((prevValue) =>
        option.value !== prevValue ? option.value : null,
      );
    },
    [setOpenedOption],
  );

  const onOptionSelected = useCallback(
    (option: SelectOption) => {
      if (multipleSelection) {
        setSelectedOptions((prevValue) => {
          if (Array.isArray(prevValue)) {
            if (prevValue.includes(option.value)) {
              return prevValue.filter((value) => value !== option.value);
            }
            return [...prevValue, option.value];
          }
          return [option.value];
        });
      } else {
        setSelectedOption(option.value);
        onGoBack?.(option.value);
        setTimeout(() => {
          navigation.goBack();
        }, 50);
      }
    },
    [setSelectedOption, onGoBack, navigation, multipleSelection],
  );

  const onSubOptionSelected = useCallback(
    (category: string, option: SelectOption) => {
      if (multipleSelection) {
        setFilteredOptions((prevValue) => {
          const newOptions = prevValue.map((prevOption) => {
            if (prevOption.value === category) {
              return {
                ...prevOption,
                options: prevOption.options?.map((subOption) => {
                  if (subOption.value === option.value) {
                    return {
                      ...subOption,
                      isSelected: !subOption.isSelected,
                    };
                  }
                  return subOption;
                }),
              };
            }
            return prevOption;
          });
          return newOptions;
        });
        // setSelectedSubOptions((prevValue) => {
        //   if (prevValue) {
        //     if (prevValue[category]?.includes(option.value)) {
        //       return {
        //         ...prevValue,
        //         [category]: prevValue[category].filter(
        //           (value) => value !== option.value,
        //         ),
        //       };
        //     }
        //     return {
        //       ...prevValue,
        //       [category]: [...(prevValue[category] ?? []), option.value],
        //     };
        //   }
        //   return { [category]: [option.value] };
        // });
      } else {
        setSelectedSubOption({ category, value: option.value });
        onGoBack?.(option.value);
        setTimeout(() => {
          navigation.goBack();
        }, 50);
      }
    },
    [
      setSelectedOption,
      onGoBack,
      navigation,
      multipleSelection,
      filteredOptions,
      setFilteredOptions,
    ],
  );

  useEffect(() => {
    console.log("selectedOptions", selectedOptions);
    console.log("selectedSubOptions", selectedSubOptions);
  }, [selectedOptions, selectedSubOptions]);

  const isOptionSelected = useCallback(
    (item: SelectOption, isSubOption?: boolean, categoryValue?: string) => {
      console.log("multipleSelection");
      if (multipleSelection) {
        if (isSubOption && selectedSubOptions) {
          return selectedSubOptions[categoryValue!]?.includes(item.value);
        }
        if (selectedOptions) {
          return selectedOptions.includes(item.value);
        }
      } else {
        if (isSubOption && selectedSubOption) {
          return selectedSubOption.value === item.value;
        }
        if (selectedOption) {
          return selectedOption === item.value;
        }
      }
      return false;
    },
    [selectedOption, selectedOptions, multipleSelection],
  );

  useEffect(() => {
    if (!searchText) {
      setFilteredOptions(options);
    } else {
      const newOptions = options
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

  // const filteredOptions = useMemo(
  //   () =>
  //     options.filter(
  //       (option) =>
  //         option.label.toLowerCase().includes(searchText.toLowerCase()) ||
  //         option.options?.some((subOption) =>
  //           subOption.label.toLowerCase().includes(searchText.toLowerCase()),
  //         ),
  //     ),
  //   [options, searchText],
  // );

  useEffect(() => {
    console.log(filteredOptions);
  }, [filteredOptions]);

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
    onOpenOption,
    openedOption,
    hasSubOptions,
    onSubOptionSelected,
    selectedOptions,
    selectedSubOption,
    selectedSubOptions,
    multipleSelection,
    isOptionSelected,
  };
};
