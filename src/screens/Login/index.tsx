import { View, TextField, Text, Button } from "react-native-ui-lib";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

export const LoginScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView>
      <View paddingH-25 paddingT-120>
        <Text fieldLabel>Field label</Text>
        <TextField placeholder="username" grey10 />
        <Text fieldLabel>Field label password</Text>
        <TextField placeholder="password" secureTextEntry grey10 />
        <View marginT-100 center>
          <Button
            BlueButton
            label="Loader"
            marginT-20
            onPress={() => navigation.replace("Loader")}
          />
          <Button BlueButton label="Login" marginT-20 />
          <Button grayButton label="Login with Google" marginT-20 />
          <Button whiteTransparentButton label="Accedi" marginT-20 />
        </View>
      </View>
    </SafeAreaView>
  );
};
