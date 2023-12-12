import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "@app/screens/Home";
import { LoaderScreen } from "@app/screens/Loader";
import { useFonts } from "expo-font";
import { initTheme } from "@app/theme";
import { Colors } from "react-native-ui-lib";

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
            title: "Accedi",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "HelveticaNeueCondensedBlack",
              fontSize: 32,
              color: Colors.blackText,
            },
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
