import { memo } from "react";
import { View, Text, RadioButton } from "react-native-ui-lib";
import { useFormRadioGroup } from "./index.hooks";
import { styles } from "./styles";
import { TouchableWithoutFeedback } from "react-native";

type FormRadioGroupProps = {
  name: string;
  options: { label: string; value: string }[];
  listTitle?: string;
};

export const FormRadioGroup = memo(
  ({ name, options, listTitle }: FormRadioGroupProps) => {
    const { onOptionSelected, selectedOption, error } = useFormRadioGroup(name);

    const _renderItem = ({
      item,
      index,
    }: {
      item: { label: string; value: string };
      index: number;
    }) => {
      const isSelected = item.value === selectedOption;

      return (
        <View
          row
          style={[
            styles.listItem,
            index === 0 ? styles.firstListItem : undefined,
            index === options.length - 1 ? styles.lastListItem : undefined,
            isSelected ? styles.listItemSelected : undefined,
          ]}
        >
          <Text
            style={[
              styles.optionText,
              isSelected ? styles.optionTextSelected : undefined,
            ]}
          >
            {item.label}
          </Text>
          <RadioButton
            selected={isSelected}
            color={
              isSelected
                ? styles.optionIconSelected.color
                : styles.optionIcon.color
            }
          />
        </View>
      );
    };

    return (
      <View style={styles.listContainer}>
        {listTitle && <Text style={styles.sectionTitle}>{listTitle}</Text>}
        <View
          style={[
            styles.list,
            Boolean(error) ? styles.listWithError : undefined,
          ]}
        >
          {options.map((item, index) => (
            <TouchableWithoutFeedback
              key={item.value}
              onPress={() => onOptionSelected(item)}
            >
              {_renderItem({ item, index })}
            </TouchableWithoutFeedback>
          ))}
        </View>
        {Boolean(error) && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  },
);
