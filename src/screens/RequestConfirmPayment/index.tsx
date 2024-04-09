import { memo } from "react";
import { Text, View } from "react-native-ui-lib";
import { useRequestConfirmPaymentScreen } from "./index.hooks";
import { SafeAreaView, ScrollView } from "react-native";
import { styles } from "./styles";
import { CheckoutButton } from "@app/components/CheckoutButton";
import moment from "moment";

const formatPrice = (price: number): string =>
  `€ ${(price / 100).toFixed(2).replace(".", ",")}`;

export const RequestConfirmPaymentScreen = memo(() => {
  const { professionalOffer, slot } = useRequestConfirmPaymentScreen();

  if (!slot || !professionalOffer) {
    return <View />;
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.pageContainer}>
        <View style={styles.pageTitleContainer}>
          <Text style={styles.pageTitle}>Conferma visita</Text>
          <Text style={styles.pageDescription}>
            Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum
            metus.
          </Text>
        </View>
        <View style={styles.pageContent}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionName}>Dettagli</Text>
            <View style={styles.detailsCard}>
              <View style={styles.detailsContainer}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Professionista</Text>
                  <Text style={styles.detailValue}>
                    Dott. {professionalOffer.professional?.name}{" "}
                    {professionalOffer.professional?.lastName?.[0]?.toUpperCase()}
                    .
                  </Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Data prenotazione</Text>
                  <Text style={styles.detailValue}>
                    {moment(slot.startDate).format("DD MMM YYYY")}
                  </Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Orario appuntamento</Text>
                  <Text style={styles.detailValue}>
                    {moment(slot.startDate).format("hh:mm a")}
                  </Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Conferma</Text>
                  <Text style={styles.detailValue}>
                    {formatPrice(slot.price * 0.2)}
                  </Text>
                </View>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Saldo alla visita</Text>
                  <Text style={styles.detailValue}>
                    {formatPrice(slot.price)}
                  </Text>
                </View>
              </View>
              <View style={styles.dividerDark} />

              <View style={styles.detailRow}>
                <Text style={styles.sumRecap}>TOTALE</Text>
                <Text style={styles.sumRecap}>
                  {formatPrice(slot.price * 1.2)}
                </Text>
              </View>
            </View>
          </View>
          <CheckoutButton
            professionalOfferId={professionalOffer._id}
            slotId={slot._id!}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

RequestConfirmPaymentScreen.displayName = "RequestConfirmPaymentScreen";
