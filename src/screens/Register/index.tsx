import {
  View,
  TextField,
  Text,
  Button,
  Colors,
  TouchableOpacity,
} from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";
import { useRegisterScreen } from "./index.hooks";
import React from "react";
import { RegisterStepCounter } from "./registerStepCounter";
import DatePicker from "react-native-date-picker";

export const RegisterScreen = () => {
  const {
    stepperCounter,
    setStepperCounter,
    registrationProgressLine,
    isFocused,
    handleInputFocus,
    handleInputBlur,
    dateInitialized,
    setDateInitialized,
    openDatePicker,
    setOpenDatePicker,
    datePicked,
    setDatePicked,
  } = useRegisterScreen();
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <RegisterStepCounter stepperCounter={stepperCounter} />
      ),
    });
  }, [navigation, stepperCounter]);

  return (
    <View height="100%">
      <View
        backgroundColor={Colors.buttonBlue}
        style={{ width: `${registrationProgressLine}%`, height: 4 }}
      ></View>
      <View flex paddingH-20 paddingT-20>
        <Text fieldLabel>Nome</Text>
        <TextField
          marginT-8
          grey10
          onFocus={() => handleInputFocus("nome")}
          onBlur={() => handleInputBlur("nome")}
          style={{
            backgroundColor: isFocused.nome ? "white" : "transparent",
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
          onFocus={() => handleInputFocus("cognome")}
          onBlur={() => handleInputBlur("cognome")}
          style={{
            backgroundColor: isFocused.cognome ? "white" : "transparent",
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
        <TouchableOpacity onPress={() => setOpenDatePicker(true)}>
          <TextField
            marginT-8
            grey10
            readOnly
            value={
              dateInitialized
                ? `${datePicked.getDate().toString()} / ${(
                    datePicked.getMonth() + 1
                  ).toString()} / ${datePicked.getFullYear().toString()}`
                : ""
            }
            onFocus={() => handleInputFocus("datanascita")}
            onBlur={() => handleInputBlur("datanascita")}
            style={{
              backgroundColor: isFocused.datanascita ? "white" : "transparent",
              paddingTop: 16,
              paddingLeft: 16,
              paddingRight: 16,
              paddingBottom: 16,
              borderWidth: 1.5,
              borderRadius: 12,
              borderColor: "black",
            }}
          />
        </TouchableOpacity>
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
            setStepperCounter(stepperCounter + 1);
          }}
          disabledBackgroundColor={Colors.disabledBlue}
          disabled={true}
        ></Button>
      </View>
      <DatePicker
        modal
        //androidVariant="iosClone"
        mode="date"
        open={openDatePicker}
        date={datePicked}
        onConfirm={(date) => {
          setOpenDatePicker(false);
          setDateInitialized(true);
          setDatePicked(date);
        }}
        onCancel={() => {
          setOpenDatePicker(false);
        }}
      />
    </View>
  );
};
