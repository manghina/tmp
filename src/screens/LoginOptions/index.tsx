import { View, Text, Button } from "react-native-ui-lib";
import { SafeAreaView } from "react-native";
import { useLoginOptionsScreen } from "./index.hooks";
import { FormTextField } from "../../components/_form/FormTextField";
import { FormProvider } from "react-hook-form";

export const LoginOptionsScreen = () => {
  const { formData, submitDisabled, triggerSubmit } = useLoginOptionsScreen();

  return (
    <SafeAreaView>
      <View paddingH-25 paddingT-120>
        <FormProvider {...formData}>
          <Text fieldLabel>Indirizzo email</Text>
          <FormTextField name="email" placeholder="email" grey10 />
          <Button
            onPress={triggerSubmit}
            disabled={submitDisabled}
            label="Prosegui"
          />
        </FormProvider>
      </View>
    </SafeAreaView>
  );
};
