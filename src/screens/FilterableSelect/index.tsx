import { useFilterableSelectScreen } from "./index.hooks";
import { Colors, RadioButton, Text, View } from "react-native-ui-lib";
import { FlatList, TouchableWithoutFeedback } from "react-native";
import { styles } from "./styles";
import React, { memo } from "react";
import SearchIcon from "../../components/SvgIcons/SearchIcon";
import { BaseTextField } from "../../components/_baseInputs/BaseTextField";

type FilterableSelectScreenProps = {};

export const FilterableSelectScreen = memo(
  ({}: FilterableSelectScreenProps) => {
    const {
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
        <Text style={styles.title}>{pageTitle}</Text>
        {pageDescription && (
          <Text style={styles.info} marginB-20>
            {pageDescription}
          </Text>
        )}
        <BaseTextField
          marginT-8
          grey10
          leadingAccessory={
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 50,
                marginHorizontal: 5,
                backgroundColor: "transparent",
              }}
            >
              {<SearchIcon color={Colors.defaultColor} />}
            </View>
          }
          label={searchTextLabel}
          style={{
            paddingTop: 8,
            paddingLeft: 8,
            paddingRight: 8,
            paddingBottom: 8,
          }}
          value={searchText}
          onChange={onTextFieldChange}
        />
        {listTitle && (
          <Text style={styles.sectionTitle} marginT-10>
            {listTitle}
          </Text>
        )}
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
