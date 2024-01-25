import React, { memo } from "react";
import { View, Button, Colors, Text } from "react-native-ui-lib";
import { useLoginByMailScreen } from "./index.hooks";
import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { useNavigation } from "@react-navigation/native";
import {actions} from "../../redux-store";

export const LoginByMailScreen = memo(() => {
  const {
    formData,
    triggerSubmit,
    submitDisabled,
    allFieldsFilled,
    completionPercentage,
    dispatch,
  } = useLoginByMailScreen();
  const navigation = useNavigation<any>();

  return (
    <View>
      <View
        backgroundColor={Colors.buttonBlue}
        style={{
          width: `${completionPercentage}%`,
          height: 4,
        }}
      />
      <View paddingH-20 paddingT-20>
        <FormProvider {...formData}>
          <FormTextField keyboardType={"email-address"} name="email" label="Indirizzo email" />
          <FormTextField name="password" label="Password" type="password" />
          <Text center grayText={!allFieldsFilled} marginT-24>
            Ci sei quasi...
          </Text>
          <Button
            marginT-8
            label="Accedi"
            onPress={triggerSubmit}
            disabled={submitDisabled}
          />

          <View
            style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            marginT-20
          >
            <Text default14 marginT-24>
              Password dimenticata?{" "}
              <Text
                link
                style={{ fontStyle: "italic" }}
                onPress={() => {
                  dispatch(actions.setForgotPasswordStepperCounter(1));
                  navigation.navigate("ForgotPassword");
                }}
              >
                Clicca qui
              </Text>
            </Text>
          </View>
        </FormProvider>
      </View>
    </View>
  );
});

LoginByMailScreen.displayName = "LoginByMailScreen";
