import { Button, Text, View } from "react-native-ui-lib";
import { useUserRequestAppointmentDetailsScreen } from "@app/screens/UserRequestAppointmentDetails/index.hooks";
import { SafeAreaView, ScrollView } from "react-native";
import { styles } from "./styles";
import { RequestStatus } from "@app/models/Request";

type UserRequestAppointmentDetailsScreenProps = {};

export const UserRequestAppointmentDetailsScreen =
  ({}: UserRequestAppointmentDetailsScreenProps) => {
    const { currentRequest, visitDay, chosenSlot } =
      useUserRequestAppointmentDetailsScreen();

    const renderProfessionalCard = () => (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professionista</Text>
        <View style={styles.sectionContent}></View>
      </View>
    );

    const renderVisitDetails = () => (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dettagli visita</Text>
        <View style={styles.sectionContent}>
          <View style={styles.subSection}>
            <Text style={styles.sectionSubtitle}>Data e ora</Text>
            <View style={styles.timingInfoContainer}>
              <View>
                <Text>{visitDay.format("DD MMMM YYYY")}</Text>
                <Text>{visitDay.format("HH:mm")}</Text>
              </View>
              <Button style={styles.addToCalendarButton}>
                <Text style={styles.addToCalendarText}>Salva in iCal</Text>
              </Button>
            </View>
          </View>
          <View style={styles.subSection}>
            <Text style={styles.sectionSubtitle}>Indirizzo studio medico</Text>
          </View>
          <View style={styles.subSection}>
            <Text style={styles.sectionSubtitle}>Anteprima mappa</Text>
            <Text>Mappa</Text>
          </View>
        </View>
      </View>
    );

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.mainContainer}>
            <View style={styles.pageTitleContainer}>
              <Text style={styles.pageTitle}>
                {currentRequest?.currentStatus ===
                  RequestStatus.VISIT_SCHEDULED && "Tutto confermato!"}
                {currentRequest?.currentStatus ===
                  RequestStatus.VISIT_COMPLETED && "Sei stato visitato!"}
              </Text>
              <Text style={styles.pageSubtitle}>
                {currentRequest?.currentStatus ===
                  RequestStatus.VISIT_SCHEDULED &&
                  "Preparati ad essere ricevut@! Il Medico ti aspetta."}
                {currentRequest?.currentStatus ===
                  RequestStatus.VISIT_COMPLETED &&
                  "Raccontaci come è andata. Tutto quello che dirai non verrà condiviso se non in forma anonima e servirà a Sweep a migliorare enormemente!"}
              </Text>
            </View>
            <View style={styles.sectionsContainer}>
              {renderProfessionalCard()}
              {renderVisitDetails()}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };

UserRequestAppointmentDetailsScreen.displayName =
  "UserRequestAppointmentDetailsScreen";
UserRequestAppointmentDetailsScreen.RouteName =
  "requests/appointment-details" as const;
