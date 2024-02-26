import { JSX, useCallback } from "react";
import useFormField from "@app/hooks/useFormField";
import { useNavigation } from "@react-navigation/native";

export const useFormNewScreenFilterableSelect = ({
  name,
  options,
  searchTextLabel,
  renderItem,
}: {
  name: string;
  options: { label: string; value: string }[];
  searchTextLabel?: string;
  renderItem?: (
    item: { label: string; value: string },
    index: number,
  ) => JSX.Element;
}) => {
  const navigation = useNavigation<any>();
  const { value, setValue } = useFormField<string>({ name });

  const onBackFromChooseScreen = useCallback(
    (value?: string) => {
      if (value) {
        setValue(value);
      }
    },
    [setValue],
  );

  const onFieldClicked = useCallback(() => {
    navigation.navigate("form-filterable-select", {
      onGoBack: onBackFromChooseScreen,
      options,
      searchTextLabel,
      value,
      renderItem,
    });
  }, [
    navigation,
    onBackFromChooseScreen,
    options,
    renderItem,
    searchTextLabel,
    value,
  ]);

  return { onFieldClicked };
};
