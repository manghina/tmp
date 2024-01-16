import React, { memo } from "react";
import { View, Button, Colors, Text } from "react-native-ui-lib";
import { useForgotPasswordScreen } from "./index.hooks";
import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { FormHiddenTextField } from "@app/components/_form/FormHiddenTextField";

export const ForgotPasswordScreen = memo(() => {
  const {
    formData,
    triggerSubmit,
    submitDisabled,
    emailFilled,
    completionPercentage,
  } = useForgotPasswordScreen();

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
        <Text title style={{ fontSize: 30, fontWeight: "900" }}>
          Password dimenticata?
        </Text>
        <Text regular16Text>
          Abbiamo la soluzione e siamo qui per aiutarti a impostarne una tutta nuova.
        </Text>
        <FormProvider {...formData}>
          <FormTextField marginT-24 name="email" label="Indirizzo email usato in fase di registrazione" />
          <Text center grayText={!emailFilled} marginT-24>
            Ci sei quasi...
          </Text>
          <Button
            marginT-8
            label="Prosegui"
            onPress={triggerSubmit}
            disabled={!emailFilled}
          />
        </FormProvider>
      </View>
    </View>
  );
});

ForgotPasswordScreen.displayName = "LoginByMailScreen";
