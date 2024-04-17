import { Button, Text, TouchableOpacity, View } from "react-native-ui-lib";
import { useUserRequestAppointmentDetailsScreen } from "@app/screens/UserRequestAppointmentDetails/index.hooks";
import { SafeAreaView, ScrollView } from "react-native";
import { styles } from "./styles";
import { RequestStatus } from "@app/models/Request";
import CalendarAddIcon from "@app/components/SvgIcons/CalendarAddIcon";
import { colorTokens } from "@app/theme/colors/tokens";
import { ProfessionalAvatarDetails } from "@app/components/_users/ProfessionalAvatarDetails";

type UserRequestAppointmentDetailsScreenProps = {};

const formatPrice = (price: number): string =>
  `${(price / 100).toFixed(2).replace(".", ",")}€`;

export const UserRequestAppointmentDetailsScreen =
  ({}: UserRequestAppointmentDetailsScreenProps) => {
    const {
      currentRequest,
      chosenProfessionalOffer,
      chosenSlot,
      visitDay,
      onAddToCalendarPressed,
    } = useUserRequestAppointmentDetailsScreen();

    const renderProfessionalCard = () => (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professionista</Text>
        <View style={styles.sectionContent}>
          {chosenProfessionalOffer && (
            <ProfessionalAvatarDetails
              professional={chosenProfessionalOffer.professional}
            />
          )}
          <View style={styles.subSection}>
            <Text style={styles.sectionSubtitle}>Perfetto per te!</Text>
            <View style={styles.professionalDescriptionContainer}>
              <Text style={styles.professionalDescription}>
                “ Lorem ipsum dolor sit amet consectetur. Id facilisis
                vestibulum metus. Lorem ipsum dolor sit amet consectetur. Id
                facilisis vestibulum metus. ”
              </Text>
            </View>
          </View>
        </View>
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
                <Text style={styles.subsectionContentText}>
                  {visitDay.format("DD MMMM YYYY")}
                </Text>
                <Text style={styles.subsectionContentText}>
                  {visitDay.format("HH:mm")}
                </Text>
              </View>
              <TouchableOpacity onPress={onAddToCalendarPressed}>
                <View style={styles.addToCalendarButton}>
                  <View style={styles.buttonContent}>
                    <CalendarAddIcon color={colorTokens.colorIconInformation} />
                    <Text style={styles.addToCalendarText}>Salva in iCal</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.subSection}>
            <Text style={styles.sectionSubtitle}>Indirizzo studio medico</Text>
            <View>
              <Text style={styles.subsectionContentText}>
                Via Principe Amedeo, 12
              </Text>
              <Text style={styles.subsectionContentText}>Torino (TO)</Text>
            </View>
          </View>
          <View style={styles.subSection}>
            <Text style={styles.sectionSubtitle}>Anteprima mappa</Text>
            <Text>Mappa</Text>
          </View>
        </View>
      </View>
    );

    const renderCosts = () => (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Costi</Text>
        <View style={styles.sectionContent}>
          <View style={styles.subSection}>
            <Text style={styles.sectionSubtitle}>Spesa per il servizio</Text>
            <View>
              <View style={styles.costRow}>
                <View>
                  <Text style={styles.costLabelTitle}>
                    Prenotazione{" "}
                    <Text style={styles.costLabelSpecification}>
                      (anticipati)
                    </Text>
                  </Text>
                </View>
                <Text style={styles.costValue}>
                  {formatPrice((chosenSlot?.price ?? 0) * 0.2)}
                </Text>
              </View>
              <View style={styles.costRow}>
                <View>
                  <Text style={styles.costLabelTitle}>
                    Onorario medico{" "}
                    <Text style={styles.costLabelSpecification}>
                      (saldo in studio)
                    </Text>
                  </Text>
                </View>
                <View style={styles.totalCostContainer}>
                  <Text style={styles.infoIndicatorP1}>*</Text>
                  <Text style={styles.costTotal}>
                    da {formatPrice(chosenSlot?.price ?? 0)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.subSection, styles.row]}>
            <Text style={styles.infoIndicator}>*</Text>
            <Text style={styles.infoText}>
              Onorario soggetto a modifiche. Il professionista potrà comunicare
              un nuovo totale in base alla prestazione richiesta, che potrebbe
              differire da quella presunta in fase di prenotazione via Sweep.
            </Text>
          </View>
        </View>
      </View>
    );

    const renderActions = () => (
      <View style={styles.actionsContainer}>
        <Text style={styles.actionsContainerTitle}>
          Azioni al momento disponibili
        </Text>
        {[
          RequestStatus.VERIFYING_PAYMENT,
          RequestStatus.APPOINTMENT_SCHEDULED,
        ].includes(currentRequest?.currentStatus!) && (
          <Button style={[styles.actionButton, styles.actionDanger]}>
            <Text style={styles.actionText}>Annulla appuntamento</Text>
          </Button>
        )}
        {currentRequest?.currentStatus ===
          RequestStatus.APPOINTMENT_COMPLETED && (
          <Button style={[styles.actionButton]}>
            <Text style={styles.actionText}>Lascia una recensione</Text>
          </Button>
        )}
      </View>
    );

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.mainContainer}>
            <View style={styles.pageTitleContainer}>
              <Text style={styles.pageTitle}>
                {[
                  RequestStatus.VERIFYING_PAYMENT,
                  RequestStatus.APPOINTMENT_SCHEDULED,
                ].includes(currentRequest?.currentStatus!) &&
                  "Tutto confermato!"}
                {currentRequest?.currentStatus ===
                  RequestStatus.APPOINTMENT_COMPLETED && "Sei stato visitato!"}
              </Text>
              <Text style={styles.pageSubtitle}>
                {[
                  RequestStatus.VERIFYING_PAYMENT,
                  RequestStatus.APPOINTMENT_SCHEDULED,
                ].includes(currentRequest?.currentStatus!) &&
                  "Preparati ad essere ricevut@! Il Medico ti aspetta."}
                {currentRequest?.currentStatus ===
                  RequestStatus.APPOINTMENT_COMPLETED &&
                  "Raccontaci come è andata. Tutto quello che dirai non verrà condiviso se non in forma anonima e servirà a Sweep a migliorare enormemente!"}
              </Text>
            </View>
            <View style={styles.sectionsContainer}>
              {renderProfessionalCard()}
              {renderVisitDetails()}
              {renderCosts()}
              {renderActions()}
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
