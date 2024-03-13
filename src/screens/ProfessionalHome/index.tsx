import { Text, TouchableOpacity, View } from "react-native-ui-lib";
import { useProfessionalHomeScreen } from "./index.hooks";
import { styles } from "./styles";
import { Image, SafeAreaView, ScrollView } from "react-native";
import SweepLogoSvg from "../../components/SweepLogoSvg";
import CalendarCheckIcon from "../../components/SvgIcons/CalendarCheckIcon";
import WalletIcon from "../../components/SvgIcons/WalletIcon";
import EllipseIcon from "../../components/SvgIcons/EllipseIcon";
import ArrowUpIcon from "../../components/SvgIcons/ArrowUpIcon";
import ChatIcon from "../../components/SvgIcons/ChatIcon";

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
            uri: "https://cdn.pixabay.com/photo/2023/05/02/10/35/avatar-7964945_1280.png",
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
              <Text style={styles.sectionTitle}>Dashboard</Text>
            </View>
            <View>
              <View style={styles.pageDashboardHeaderRight}>
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
          <View style={styles.dashboardContentContainer}>
            <View style={styles.dashboardBox}>
              <Image
                style={styles.dashboardBoxBackgroundImage}
                source={require("@assets/img/calendar.png")}
              ></Image>
              <CalendarCheckIcon color={"#1D7AFC"}></CalendarCheckIcon>
              <Text style={styles.dashboardBoxTitle}>Prenotazioni</Text>
              <Text style={styles.dashboardBoxValue}>23</Text>
              <Text style={styles.dashboardBoxNote}>0 richieste attive</Text>
            </View>
            <View style={styles.dashboardBox}>
              <Image
                style={styles.dashboardBoxBackgroundImage}
                source={require("@assets/img/wallet.png")}
              ></Image>
              <WalletIcon color={"#1D7AFC"}></WalletIcon>
              <Text style={styles.dashboardBoxTitle}>Incassato</Text>
              <Text style={styles.dashboardBoxValue}>€ 10.240</Text>
              <Text style={styles.dashboardBoxNote}>
                € 2.438 negli ultimi 7 gg
              </Text>
            </View>
          </View>
          <View style={styles.bookingsHeader}>
            <View style={styles.bookingsHeaderLeft}>
              <Text style={styles.sectionTitle}>Prenotazioni in corso</Text>
              <EllipseIcon color={"#1D7AFC"} />
              <EllipseIcon color={"#E56910"} />
            </View>
            <ArrowUpIcon color={"#44546F"} />
          </View>
          <View style={styles.bookingList}>
            <View style={styles.bookingListItem}>
              <View>
                <ChatIcon color={"#1D7AFC"} />
              </View>
              <View style={styles.bookingListItemContent}>
                <View style={styles.bookingListItemHeader}>
                  <Text style={styles.bookingListItemTitle}>
                    Titolo della query
                  </Text>
                  <Text style={styles.bookingListItemTimeLeftText}>
                    - 12:00
                  </Text>
                </View>
                <Text style={styles.bookingListItemContentText}>
                  12/12/2021
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.bookingsHeader}>
            <View style={styles.bookingsHeaderLeft}>
              <Text style={styles.sectionTitle}>Storico appuntamenti</Text>
            </View>
            <ArrowUpIcon color={"#44546F"} />
          </View>
          <Text style={styles.helpSection}>
            Bisogno di supporto?{" "}
            <Text style={styles.link} onPress={() => console.log("Tutorial")}>
              Guarda i tutorial
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
