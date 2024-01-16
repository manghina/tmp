import { memo } from "react";
import { usePatientHomeScreen } from "./index.hooks";
import { View } from "react-native-ui-lib";

const PatientHomeScreen = memo(() => {
  const {} = usePatientHomeScreen();

  return <View />;
});

PatientHomeScreen.displayName = "PatientHomeScreen";
