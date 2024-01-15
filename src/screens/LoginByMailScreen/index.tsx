import { memo } from "react";
import { View, Button } from "react-native-ui-lib";
import { useLoginByMailScreen } from "./index.hooks";
import { FormProvider } from "react-hook-form";
import { FormTextField } from "../../components/_form/FormTextField";
import { FormHiddenTextField } from "../../components/_form/FormHiddenTextField";
export const LoginByMailScreen = memo((props) => {
  const { formData, triggerSubmit, submitDisabled } = useLoginByMailScreen();

  return (
    <View paddingH-20>
      <FormProvider {...formData}>
        <FormTextField name="email" label={"Email"} />
        <FormHiddenTextField name="password" label={"Password"} />
        <Button
          marginT-20
          label="Accedi"
          onPress={triggerSubmit}
          disabled={submitDisabled}
        />
      </FormProvider>
    </View>
  );
});

LoginByMailScreen.displayName = "LoginByMailScreen";
