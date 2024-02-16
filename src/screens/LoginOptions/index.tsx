import { View, Text, Button } from "react-native-ui-lib";
import { SafeAreaView } from "react-native";
import { useLoginOptionsScreen } from "./index.hooks";
import { FormTextField } from "../../components/_form/FormTextField";
import { FormProvider } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { DoctorCard } from "../../components/DoctorCard";

const headerBackgroundGraphictPercentageOverflow = 20;

export const LoginOptionsScreen = () => {
  const navigation = useNavigation<any>();
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
        <DoctorCard
          profilePicture={
            "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
          }
          name={"Mario R."}
          specialty={"Special"}
          distance={"10 m"}
          information={
            "“ Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus. Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus. ”"
          }
          availability={[
            { dateTime: new Date(), bonusCost: 10 },
            {
              dateTime: new Date(new Date().setDate(new Date().getDate() + 1)),
              bonusCost: 20,
            },
            {
              dateTime: new Date(new Date().setDate(new Date().getDate() + 2)),
              bonusCost: 30,
            },
          ]}
          visitCost={20}
        />
        <FormProvider {...formData}>
          <Text fieldLabel>Indirizzo email</Text>
          <FormTextField
            keyboardType={"email-address"}
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
          <Text default14 marginT-24>
            Non hai un profilo?{" "}
            <Text
              link
              style={{ fontStyle: "italic" }}
              onPress={() => navigation.replace("Home")}
            >
              Registrati
            </Text>
          </Text>
        </FormProvider>
      </View>
    </SafeAreaView>
  );
};
