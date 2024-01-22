import { View, Text, Button } from "react-native-ui-lib";
import { SafeAreaView } from "react-native";
import { useLoginOptionsScreen } from "./index.hooks";
import { FormTextField } from "../../components/_form/FormTextField";
import { FormProvider } from "react-hook-form";

const headerBackgroundGraphictPercentageOverflow = 20;

export const LoginOptionsScreen = () => {
  const { formData, submitDisabled, triggerSubmit } = useLoginOptionsScreen();

  return (
    <SafeAreaView style={{ height: "100%", width: "100%" }}>
      <View
        style={{
          height: "35%",
          width: `${100 + headerBackgroundGraphictPercentageOverflow}%`,
          left: `${-headerBackgroundGraphictPercentageOverflow / 2}%`,
          position: "absolute",
          backgroundColor: "#D7DFF1",
          borderBottomLeftRadius: 70,
          borderBottomRightRadius: 70,
        }}
      />
      <View paddingH-25>
        <Text title style={{ fontSize: 30, fontWeight: "900" }}>
          Accedi
        </Text>
        <Text marginB-20>Seleziona metodo preferito</Text>
        <FormProvider {...formData}>
          <Text fieldLabel>Indirizzo email</Text>
          <FormTextField
            name="email"
            placeholder="email"
            fieldStyle={{ backgroundColor: "#FFF", borderRadius: 12 }}
          />
          <Button
            marginT-20
            onPress={triggerSubmit}
            disabled={submitDisabled}
            label="Prosegui"
          />
        </FormProvider>
      </View>
    </SafeAreaView>
  );
};