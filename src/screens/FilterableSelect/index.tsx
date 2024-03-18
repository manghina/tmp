import { useFilterableSelectScreen } from "./index.hooks";
import { Colors, RadioButton, Text, View } from "react-native-ui-lib";
import { FlatList, TouchableWithoutFeedback } from "react-native";
import { styles } from "./styles";
import React, { memo } from "react";
import SearchIcon from "@app/components/SvgIcons/SearchIcon";
import { BaseTextField } from "@app/components/_baseInputs/BaseTextField";

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

      return (
        <View
          row
          style={[
            styles.listItem,
            index === 0 ? styles.firstListItem : undefined,
            index === filteredOptions.length - 1
              ? styles.lastListItem
              : undefined,
            isSelected ? styles.listItemSelected : undefined,
          ]}
        >
          <Text
            style={isSelected ? styles.optionTextSelected : styles.optionText}
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
      <View style={styles.pageContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.title}>{pageTitle}</Text>
          {pageDescription && (
            <Text style={styles.info}>{pageDescription}</Text>
          )}
        </View>
        <BaseTextField
          leadingAccessory={
            <View style={styles.searchIcon}>
              <SearchIcon color={styles.searchIcon.color} />
            </View>
          }
          label={searchTextLabel}
          value={searchText}
          onChange={onTextFieldChange}
        />
        <View style={styles.listContainer}>
          {listTitle && <Text style={styles.sectionTitle}>{listTitle}</Text>}
          <View style={styles.list}>
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
      </View>
    );
  },
);

FilterableSelectScreen.displayName = "FilterableSelectScreen";
