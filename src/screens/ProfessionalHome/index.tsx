import { Text, View } from "react-native-ui-lib";
import { useProfessionalHomeScreen } from "./index.hooks";
import { styles } from "./styles";
import { Image, SafeAreaView, ScrollView } from "react-native";
import SweepLogoSvg from "../../components/SweepLogoSvg";

export const ProfessionalHomeScreen = () => {
  const {} = useProfessionalHomeScreen();

  return (
    <SafeAreaView>
      <View style={styles.pageHeader}>
        <SweepLogoSvg width={110} height={32} color={"#000"}></SweepLogoSvg>
        <Image
          width={40}
          height={40}
          source={{
            uri: "https://www.freeiconspng.com/download/65",
          }}
        />
      </View>
      <ScrollView>
        <View style={styles.pageContainer}>
          <View style={styles.pageTitleContainer}>
            <Text style={styles.pageTitle}>Bentornato Dott. Surname,</Text>
            <Text style={styles.pageDescription}>
              Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum
              metus.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
