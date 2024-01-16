import React, { memo } from "react";
import { View, Button, Colors, Text } from "react-native-ui-lib";
import { useLoginByMailScreen } from "./index.hooks";
import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { FormHiddenTextField } from "@app/components/_form/FormHiddenTextField";

export const LoginByMailScreen = memo(() => {
  const {
    formData,
    triggerSubmit,
    submitDisabled,
    allFieldsFilled,
    completionPercentage,
  } = useLoginByMailScreen();

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
          <FormTextField name="email" label="Indirizzo email" />
          <FormHiddenTextField name="password" label="Password segreta" />
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
            <Text>Password dimenticata?</Text>
            <Button link>
              <Text color="#3C77E8" style={{ fontStyle: "italic" }}>
                Clicca qui
              </Text>
            </Button>
          </View>
        </FormProvider>
      </View>
    </View>
  );
});

LoginByMailScreen.displayName = "LoginByMailScreen";
