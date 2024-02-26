import { useFilterableSelectScreen } from "./index.hooks";
import {
  Colors,
  RadioButton,
  Text,
  TextField,
  View,
} from "react-native-ui-lib";
import { FlatList, TouchableWithoutFeedback } from "react-native";
import { styles } from "./styles";
import { memo } from "react";

type FilterableSelectScreenProps = {};

export const FilterableSelectScreen = memo(
  ({}: FilterableSelectScreenProps) => {
    const {
      selectedOption,
      filteredOptions,
      onTextFieldChange,
      searchText,
      searchTextLabel,
      onOptionSelected,
      renderItem,
    } = useFilterableSelectScreen();

    const _renderItem = ({
      item,
      index,
    }: {
      item: { label: string; value: string };
      index: number;
    }) => {
      const isSelected = item.value === selectedOption;
      const color = isSelected ? Colors.buttonGray : Colors.defaultColor;

      return (
        <View
          row
          width="100%"
          backgroundColor={isSelected ? Colors.defaultColor : Colors.buttonGray}
          padding-15
          style={{
            borderWidth: 1,
            borderColor: Colors.defaultColor,
            borderBottomRightRadius:
              index === filteredOptions.length - 1 ? 10.8 : 0,
            borderBottomLeftRadius:
              index === filteredOptions.length - 1 ? 10.8 : 0,
            borderTopLeftRadius: index === 0 ? 10.8 : 0,
            borderTopRightRadius: index === 0 ? 10.8 : 0,
            justifyContent: "space-between",
          }}
        >
          <Text color={color}>{item.label}</Text>
          <RadioButton selected={isSelected} color={color} />
        </View>
      );
    };

    return (
      <View paddingH-20 paddingV-10 style={{ flex: 1 }}>
        <Text style={styles.title}>Seleziona tipologia</Text>
        <Text style={styles.info} marginB-20>
          Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus.
        </Text>
        <TextField
          marginT-8
          grey10
          label={searchTextLabel}
          style={{
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 16,
            borderWidth: 1.5,
            borderRadius: 12,
            borderColor: "black",
          }}
          value={searchText}
          onChange={onTextFieldChange}
        />
        <Text style={styles.sectionTitle} marginT-10>
          Lista nazioni
        </Text>
        <View marginT-10 style={{ flex: 1, paddingBottom: 40 }}>
          <FlatList
            removeClippedSubviews
            data={filteredOptions}
            initialNumToRender={15}
            renderItem={({ item, index }) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => {
                    onOptionSelected(item);
                  }}
                >
                  {renderItem?.(item, index) ?? _renderItem({ item, index })}
                </TouchableWithoutFeedback>
              );
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  },
);

FilterableSelectScreen.displayName = "FilterableSelectScreen";
