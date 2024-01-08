import { View, TextField, Text, Button, Colors } from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";
import { useRegisterScreen } from "./index.hooks";

export const RegisterScreen = () => {
  const {} = useRegisterScreen();

  return (
    <View height="100%">
      <View
        backgroundColor={Colors.buttonBlue}
        style={{ width: "25%", height: 4 }}
      ></View>
      <View flex paddingH-20 paddingT-20>
        <Text fieldLabel>Nome</Text>
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
        <Text fieldLabel marginT-16>
          Cognome
        </Text>
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
        <Text fieldLabel marginT-16>
          Data di nascita
        </Text>
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
        <Text center grayText marginT-24>
          {" "}
          Ci sei quasi...
        </Text>
        <Button
          BlueButton
          label="Prosegui"
          marginT-8
          style={{ width: "100%" }}
          onPress={() => {
            //WIP
          }}
          disabledBackgroundColor={Colors.disabledBlue}
          disabled={true}
        ></Button>
      </View>
    </View>
  );
};
