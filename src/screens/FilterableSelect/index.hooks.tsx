import { JSX, useCallback, useEffect, useMemo, useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

type SelectValue = SelectOption | SelectOption[] | string;

type FilterableSelectScreenRouteParams = {
  value: SelectValue;
  onGoBack?: (value: SelectValue) => void;
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
  const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>([]);
  const [searchText, setSearchText] = useState<string>("");
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

  const confirmSelection = useCallback(
    (values?: SelectOption[]) => {
      const value = multipleSelection
        ? values ?? selectedOptions
        : (values ?? selectedOptions)[0];
      onGoBack?.(value);
      setTimeout(() => {
        navigation.goBack();
      }, 50);
    },
    [selectedOptions, onGoBack, navigation, multipleSelection, hasSubOptions],
  );

  const onOptionSelected = useCallback(
    (option: SelectOption) => {
      let newValue: SelectOption[] = [];
      if (multipleSelection) {
        if (
          selectedOptions.find(
            (prevOption) => prevOption.value === option.value,
          )
        ) {
          newValue = selectedOptions.filter(
            (prevOption) => prevOption.value !== option.value,
          );
        } else {
          newValue = [...selectedOptions, option];
        }
        setSelectedOptions(newValue);
      } else {
        newValue = [option];
        setSelectedOptions(newValue);
        confirmSelection(newValue);
      }
    },
    [selectedOptions, onGoBack, navigation, multipleSelection],
  );

  const onSubOptionSelected = useCallback(
    (category: string, subOption: SelectOption) => {
      const mainOption = options.find(
        (option) => option.value === category,
      ) as SelectOption;
      let newValue: SelectOption[] = [];
      if (multipleSelection) {
        const existingOption = Boolean(
          selectedOptions.find((prevOption) => prevOption.value === category),
        );
        if (existingOption) {
          newValue = selectedOptions.reduce(
            (acc: SelectOption[], prevOption) => {
              if (prevOption.value === category) {
                let updatedOption = {
                  ...prevOption,
                };
                let newSubOptions: SelectOption[] = [];
                const existingSubOption = Boolean(
                  prevOption.options?.find(
                    (prevSubOption) => prevSubOption.value === subOption.value,
                  ),
                );
                if (existingSubOption) {
                  newSubOptions = prevOption.options!.filter(
                    (prevSubOption) => prevSubOption.value !== subOption.value,
                  );
                } else {
                  newSubOptions = [...(prevOption.options ?? []), subOption];
                }
                updatedOption = { ...updatedOption, options: newSubOptions };
                if (!updatedOption?.options?.length) return acc;
                return [...acc, updatedOption];
              }
              return [...acc, prevOption];
            },
            [],
          );
        } else {
          newValue = [
            ...selectedOptions,
            { ...mainOption, options: [subOption] },
          ];
        }
        setSelectedOptions(newValue);
      } else {
        newValue = [{ ...mainOption, options: [subOption] }];
        setSelectedOptions(newValue);
        confirmSelection(newValue);
      }
    },
    [
      options,
      selectedOptions,
      onGoBack,
      navigation,
      multipleSelection,
      filteredOptions,
      setFilteredOptions,
    ],
  );

  const isSelected = useCallback(
    (option: SelectOption, category?: string) =>
      category
        ? selectedOptions.some(
            (selectedOption) =>
              selectedOption.value === category &&
              selectedOption.options?.some(
                (subOption) => subOption.value === option.value,
              ),
          )
        : selectedOptions.some(
            (selectedOption) => selectedOption.value === option.value,
          ),
    [selectedOptions],
  );

  const selectedQuantity = useCallback(
    (category?: string) =>
      selectedOptions.find((option) => option.value === category)?.options
        ?.length,
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
      if (typeof value === "string") {
        const option = options.find(
          (option) => option.value === value,
        ) as SelectOption;
        setSelectedOptions([option]);
      } else if ("value" in value) {
        setSelectedOptions([value]);
      } else if (Array.isArray(value)) {
        setSelectedOptions(value);
      }
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
    renderItem,
    onOpenOption,
    openedOption,
    hasSubOptions,
    onSubOptionSelected,
    multipleSelection,
    isSelected,
    selectedQuantity,
    confirmSelection,
  };
};
