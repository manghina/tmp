import { memo } from "react";
import { Avatar, View } from "react-native-ui-lib";
import { usePatientHeader } from "./index.hooks";
import { Logo } from "../Logo";
import { SafeAreaView } from "react-native";

export const PatientHeader = memo(({}) => {
  const { initials } = usePatientHeader();

  return (
    <SafeAreaView style={{ backgroundColor: "#F2F2F2" }}>
      <View
        paddingH-20
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <Logo color="#000" />
        <Avatar
          label={initials}
          size={40}
          labelColor="#FFF"
          backgroundColor="#3C77E8"
        />
      </View>
    </SafeAreaView>
  );
});
