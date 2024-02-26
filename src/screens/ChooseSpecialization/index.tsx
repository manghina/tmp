import { useChooseSpecializationScreen } from "./index.hooks";
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

type ChooseSpecializationScreenProps = {};

export const ChooseSpecializationScreen = memo(
  ({}: ChooseSpecializationScreenProps) => {
    const {
      filteredProfessions,
      isThisSelected,
      getColor,
      onTextFieldChange,
      searchText,
      onProfessionSelected,
    } = useChooseSpecializationScreen();

    const renderItem = ({
      item,
      index,
    }: {
      item: { profession: string; id: string };
      index: number;
    }) => (
      <TouchableWithoutFeedback
        onPress={() => {
          onProfessionSelected(item.profession);
        }}
      >
        <View
          row
          width={"100%"}
          backgroundColor={
            isThisSelected(item.profession)
              ? Colors.defaultColor
              : Colors.buttonGray
          }
          padding-15
          style={{
            borderWidth: 1,
            borderColor: Colors.defaultColor,
            borderBottomRightRadius:
              index === filteredProfessions.length - 1 ? 10.8 : 0,
            borderBottomLeftRadius:
              index === filteredProfessions.length - 1 ? 10.8 : 0,
            borderTopLeftRadius: index === 0 ? 10.8 : 0,
            borderTopRightRadius: index === 0 ? 10.8 : 0,
            justifyContent: "space-between",
          }}
        >
          <Text color={getColor(item.profession)}>{item.profession}</Text>
          <RadioButton
            onPress={() => {}}
            label={""}
            selected={isThisSelected(item.profession)}
            color={getColor(item.profession)}
          />
        </View>
      </TouchableWithoutFeedback>
    );

    return (
      <View paddingH-20 paddingV-10>
        <Text style={styles.title}>Seleziona tipologia</Text>
        <Text style={styles.info} marginB-20>
          Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus.
        </Text>
        <Text style={styles.sectionTitle}>Trova specializzazione</Text>
        <TextField
          marginT-8
          grey10
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
        <View marginT-10>
          <FlatList
            removeClippedSubviews
            data={filteredProfessions}
            initialNumToRender={15}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  },
);

ChooseSpecializationScreen.displayName = "ChooseSpecializationScreen";
