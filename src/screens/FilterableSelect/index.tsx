import { useFilterableSelectScreen } from "./index.hooks";
import {
  Button,
  Checkbox,
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

export const FilterableSelectScreen = memo(
  ({}: FilterableSelectScreenProps) => {
    const {
      filteredOptions,
      onTextFieldChange,
      pageTitle,
      pageDescription,
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
    } = useFilterableSelectScreen();

    const _renderItem = ({
      item,
      index,
      isCategory,
      isSubOption,
    }: {
      item: SelectOption;
      index: number;
      isCategory?: boolean;
      isSubOption?: boolean;
    }) => {
      const isOpened = isCategory && item.value === openedOption;
      const firstListItem =
        (index === 0 && hasSubOptions && isCategory) ||
        (index === 0 && !hasSubOptions);

      return (
        <View
          row
          style={[
            styles.listItem,
            firstListItem ? styles.firstListItem : undefined,
            isSelected(item)
              ? multipleSelection
                ? styles.listItemSelectedMultiple
                : styles.listItemSelected
              : undefined,
            isOpened ? styles.listItemOpened : undefined,
            isSubOption ? styles.listItemSubOption : undefined,
            Boolean(isCategory && selectedQuantity(item) && !isOpened)
              ? styles.listItemWithSubOptionsSelected
              : undefined,
          ]}
        >
          <View style={styles.optionTextContainer}>
            <Text
              style={[
                styles.optionText,
                isSelected(item)
                  ? multipleSelection || Boolean(isCategory && !isOpened)
                    ? styles.optionTextSelectedMultiple
                    : !isOpened && styles.optionTextSelected
                  : undefined,
              ]}
            >
              {item.label}
            </Text>
            {Boolean(
              isCategory && selectedQuantity(item) && multipleSelection,
            ) && (
              <View style={styles.optionTextQuantityContainer}>
                <Text style={styles.optionTextQuantity}>
                  {selectedQuantity(item)}
                </Text>
              </View>
            )}
          </View>
          <View style={styles.optionIconContainer}>
            {isCategory ? (
              <View>{isOpened ? <ToggleOnIcon /> : <ToggleOffIcon />}</View>
            ) : multipleSelection ? (
              <Checkbox
                value={isSelected(item)}
                borderRadius={styles.optionIconMultiple.borderRadius}
                color={
                  isSelected(item)
                    ? styles.optionIconSelectedMultiple.color
                    : styles.optionIconMultiple.color
                }
              />
            ) : (
              <RadioButton
                selected={isSelected(item)}
                color={
                  isSelected(item)
                    ? styles.optionIconSelected.color
                    : styles.optionIcon.color
                }
              />
            )}
          </View>
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
          onChange={onTextFieldChange}
        />
        <View style={styles.listContainer}>
          {listTitle && <Text style={styles.sectionTitle}>{listTitle}</Text>}
          <FlatList
            style={[
              styles.list,
              !filteredOptions.length ? styles.noList : undefined,
            ]}
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
                    renderItem={({ item: subOption, index: subOtionIndex }) => {
                      return (
                        <TouchableWithoutFeedback
                          onPress={() => onOptionSelected(subOption.value)}
                        >
                          {_renderItem({
                            item: subOption,
                            index: subOtionIndex,
                            isSubOption: true,
                          })}
                        </TouchableWithoutFeedback>
                      );
                    }}
                  />
                </ExpandableSection>
              ) : (
                <TouchableWithoutFeedback
                  onPress={() => onOptionSelected(item.value)}
                >
                  {_renderItem({ item, index })}
                </TouchableWithoutFeedback>
              );
            }}
          />
          {!filteredOptions.length && (
            <Text style={styles.noResultsText}>Nessun risultato trovato</Text>
          )}
        </View>
        {multipleSelection && (
          <View>
            <Button
              onPress={() => confirmSelection()}
              label="Conferma selezione"
            />
          </View>
        )}
      </View>
    );
  },
);

FilterableSelectScreen.displayName = "FilterableSelectScreen";
