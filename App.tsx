import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./src/screens/Login";
import { LoaderScreen } from "@app/screens/Loader";
import { HomeScreen } from "./src/screens/Home";
import { initTheme } from "@app/theme";
import { Colors } from "react-native-ui-lib";
import { RegisterScreen } from "./src/screens/Register";
import { ArrowDown } from "./src/screens/Register/arrowDown";

const Stack = createNativeStackNavigator();

export default function App() {
  initTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loader">
        <Stack.Screen
          name="Loader"
          component={LoaderScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Accedi",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "HelveticaNeue-CondensedBlack",
              fontSize: 32,
              color: Colors.blackText,
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: "Registrati",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "HelveticaNeue-CondensedBlack",
              fontSize: 32,
              color: Colors.blackText,
            },
            animationTypeForReplace: "push",
            animation: "slide_from_bottom",
            headerLeft: () => <ArrowDown />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
