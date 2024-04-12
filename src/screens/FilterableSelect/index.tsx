import { useFilterableSelectScreen } from "./index.hooks";
import {
  Colors,
  ExpandableSection,
  RadioButton,
  Text,
  View,
} from "react-native-ui-lib";
import { FlatList, TouchableWithoutFeedback } from "react-native";
import { styles } from "./styles";
import React, { memo } from "react";
import SearchIcon from "@app/components/SvgIcons/SearchIcon";
import { BaseTextField } from "@app/components/_baseInputs/BaseTextField";
import { ToggleOffIcon, ToggleOnIcon } from "@app/components/SvgIcons";

type FilterableSelectScreenProps = {};

type SelectOption = {
  label: string;
  value: string;
  isSelected?: boolean;
  selectedQuantity?: number;
  options?: Omit<SelectOption, "options" | "selectedQuantity">[];
};

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
      onOpenOption,
      openedOption,
      hasSubOptions,
      onSubOptionSelected,
      selectedOptions,
      selectedSubOption,
      selectedSubOptions,
      multipleSelection,
      isOptionSelected,
    } = useFilterableSelectScreen();

    const _renderItem = ({
      item,
      index,
      isCategory,
      isSubOption,
      categoryIndex,
      categoryValue,
    }: {
      item: SelectOption;
      index: number;
      categoryValue?: string;
      isCategory?: boolean;
      isSubOption?: boolean;
      categoryIndex?: number;
    }) => {
      const isOpened = isCategory && item.value === openedOption;
      const checkIfSelected = () => {
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
      };
      const isSelected = item.isSelected;
      const isLastItem = () => {
        if ((hasSubOptions && isCategory && !isOpened) || !hasSubOptions) {
          return index === filteredOptions.length - 1;
        }
        return Boolean(
          isSubOption &&
            index === filteredOptions[categoryIndex!].options!.length - 1 &&
            categoryIndex === filteredOptions.length - 1 &&
            isSubOption,
        );
      };

      if (isSubOption) console.log(categoryValue, item.value, isSelected);

      return (
        <View
          row
          style={[
            styles.listItem,
            index === 0 ? styles.firstListItem : undefined,
            isLastItem() ? styles.lastListItem : undefined,
            isSelected ? styles.listItemSelected : undefined,
            isOpened ? styles.listItemOpened : undefined,
            isSubOption ? styles.listItemSubOption : undefined,
          ]}
        >
          <View style={styles.optionTextContainer}>
            <Text
              style={isSelected ? styles.optionTextSelected : styles.optionText}
            >
              {item.label}
            </Text>
            {isCategory && item.selectedQuantity && (
              <Text
                style={styles.optionText}
              >{`(${item.selectedQuantity})`}</Text>
            )}
          </View>
          {isCategory ? (
            <View>{isOpened ? <ToggleOnIcon /> : <ToggleOffIcon />}</View>
          ) : (
            <RadioButton
              selected={isSelected}
              color={
                isSelected
                  ? styles.optionIconSelected.color
                  : styles.optionIcon.color
              }
            />
          )}
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
                return hasSubOptions ? (
                  <ExpandableSection
                    sectionHeader={_renderItem({
                      item,
                      index,
                      isCategory: true,
                    })}
                    expanded={item.value === openedOption}
                    onPress={() => onOpenOption(item)}
                  >
                    <FlatList
                      data={item.options}
                      renderItem={({
                        item: subOption,
                        index: subOtionIndex,
                      }) => {
                        return (
                          <TouchableWithoutFeedback
                            onPress={() =>
                              onSubOptionSelected(item.value, subOption)
                            }
                          >
                            {renderItem?.(subOption, subOtionIndex) ??
                              _renderItem({
                                item: subOption,
                                index: subOtionIndex,
                                categoryValue: item.value,
                                isSubOption: true,
                                categoryIndex: index,
                              })}
                          </TouchableWithoutFeedback>
                        );
                      }}
                      showsVerticalScrollIndicator={false}
                    />
                  </ExpandableSection>
                ) : (
                  <TouchableWithoutFeedback
                    onPress={() => onOptionSelected(item)}
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
