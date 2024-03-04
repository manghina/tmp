import { useCountryChooser } from "./index.hooks";
import {
  Colors,
  RadioButton,
  Text,
  TextField,
  View,
} from "react-native-ui-lib";
import { FlatList, TouchableWithoutFeedback } from "react-native";
import { styles } from "./styles";

type CountryData = {
  name: string;
  code: string;
  dial_code: string;
  flag: string;
};

export const CountryChooserScreen = () => {
  const { countryData, isThisSelected, getColor, setSelectedCountry } =
    useCountryChooser();

  const renderItem = ({
    item,
    index,
  }: {
    item: CountryData;
    index: number;
  }) => (
    <TouchableWithoutFeedback
      onPress={() => {
        setSelectedCountry(item);
      }}
    >
      <View
        row
        width={"100%"}
        backgroundColor={
          isThisSelected(item) ? Colors.defaultColor : Colors.buttonGray
        }
        padding-15
        style={{
          borderWidth: 1,
          borderColor: Colors.defaultColor,
          borderBottomRightRadius: index === countryData.length - 1 ? 10.8 : 0,
          borderBottomLeftRadius: index === countryData.length - 1 ? 10.8 : 0,
          borderTopLeftRadius: index === 0 ? 10.8 : 0,
          borderTopRightRadius: index === 0 ? 10.8 : 0,
          justifyContent: "space-between",
        }}
      >
        <View row>
          <Text>{item.flag} </Text>
          <Text color={getColor(item)}>
            {item.name}({item.dial_code})
          </Text>
        </View>
        <RadioButton
          onPress={() => {}}
          label={""}
          selected={isThisSelected(item)}
          color={getColor(item)}
        />
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View paddingH-20 paddingV-10>
      <Text style={styles.title}>Seleziona prefisso</Text>
      <Text style={styles.info} marginB-20>
        Seleziona il prefisso del tuo paese
      </Text>
      <Text style={styles.sectionTitle}>Trova nazione</Text>
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
      />
      <Text style={styles.sectionTitle} marginT-10>
        Lista nazioni
      </Text>
      <View marginT-10>
        <FlatList
          removeClippedSubviews
          data={countryData}
          initialNumToRender={15}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.code}
        />
      </View>
    </View>
  );
};
