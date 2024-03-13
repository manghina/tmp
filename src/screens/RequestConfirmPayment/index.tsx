import { memo } from "react";
import { Text, View } from "react-native-ui-lib";
import { useRequestConfirmPaymentScreen } from "./index.hooks";
import { SafeAreaView, ScrollView } from "react-native";
import { styles } from "./styles";
import { CheckoutButton } from "@app/components/CheckoutButton";

const detailsContent = [
  {
    title: "Professionista",
    value: "Dott. Mario R.",
  },
  {
    title: "Data prenotazione",
    value: "11 Apr 2023",
  },
  {
    title: "Orario appuntamento",
    value: "02:30 pm",
  },
  {
    title: "Onorario visits",
    value: "€ 80,00",
  },
  {
    title: "Acconto richiesto (20%)",
    value: "€ 16,00",
  },
];

export const RequestConfirmPaymentScreen = memo(() => {
  const {} = useRequestConfirmPaymentScreen();

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
                {detailsContent.map((detail) => (
                  <View key={detail.value} style={styles.detailRow}>
                    <Text style={styles.detailLabel}>{detail.title}</Text>
                    <Text style={styles.detailValue}>{detail.value}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.dividerDark} />

              <View style={styles.detailRow}>
                <Text style={styles.sumRecap}>TOTALE A GARANZIA</Text>
                <Text style={styles.sumRecap}>€ 16,00</Text>
              </View>
            </View>
          </View>
          {/* @TODO: Replace with actual dynamic values */}
          <CheckoutButton
            professionalOfferId={"65e736cb55872f86077fe6ad"}
            slotId={"65e736cb55872f86077fe6dd"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

RequestConfirmPaymentScreen.displayName = "RequestConfirmPaymentScreen";
