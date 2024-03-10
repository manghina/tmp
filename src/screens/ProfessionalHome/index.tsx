import { Text, TouchableOpacity, View } from "react-native-ui-lib";
import { useProfessionalHomeScreen } from "./index.hooks";
import { styles } from "./styles";
import { Image, SafeAreaView, ScrollView } from "react-native";
import SweepLogoSvg from "../../components/SweepLogoSvg";

export const ProfessionalHomeScreen = () => {
  const { selectedHistoryBox, setSelectedHistoryBox } =
    useProfessionalHomeScreen();

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
          <View style={styles.pageDashboardHeader}>
            <View>
              <Text style={styles.dashboard}>Dashboard</Text>
            </View>
            <View>
              <View style={styles.pageDashboardContent}>
                <TouchableOpacity onPress={() => setSelectedHistoryBox("30G")}>
                  <View
                    key={"30G"}
                    style={
                      selectedHistoryBox === "30G"
                        ? styles.selectedHistoryBox
                        : styles.historyBox
                    }
                  >
                    <Text
                      style={
                        selectedHistoryBox === "30G"
                          ? styles.selectedHistoryBoxText
                          : styles.historyBoxText
                      }
                    >
                      30G
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedHistoryBox("3M")}>
                  <View
                    key={"3M"}
                    style={
                      selectedHistoryBox === "3M"
                        ? styles.selectedHistoryBox
                        : styles.historyBox
                    }
                  >
                    <Text
                      style={
                        selectedHistoryBox === "3M"
                          ? styles.selectedHistoryBoxText
                          : styles.historyBoxText
                      }
                    >
                      3M
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedHistoryBox("6M")}>
                  <View
                    key={"6M"}
                    style={
                      selectedHistoryBox === "6M"
                        ? styles.selectedHistoryBox
                        : styles.historyBox
                    }
                  >
                    <Text
                      style={
                        selectedHistoryBox === "6M"
                          ? styles.selectedHistoryBoxText
                          : styles.historyBoxText
                      }
                    >
                      6M
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
