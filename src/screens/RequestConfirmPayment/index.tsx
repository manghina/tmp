import { memo } from "react";
import { Button, Text, View } from "react-native-ui-lib";
import { useRequestConfirmPaymentScreen } from "./index.hooks";
import { SafeAreaView, ScrollView } from "react-native";
import { styles } from "./styles";

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
  const { didTapCheckoutButton } = useRequestConfirmPaymentScreen();

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
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionName}>Metodo di pagamento</Text>
            <View style={styles.paymentMethodsContainer}>
              <View style={styles.paymentMethodRow}>
                <Text>Visa **** 1234</Text>
              </View>
              <View style={styles.dividerLight} />
              <View style={styles.paymentMethodRow}>
                <Text>Apple Pay</Text>
              </View>
              <View style={styles.dividerLight} />
              <View style={styles.paymentMethodRow}>
                <Text>Paypal</Text>
              </View>
            </View>
            <Button
              label={"Aggiungi metodo di pagamento"}
              onPress={didTapCheckoutButton}
            />
          </View>
          <View style={styles.ctaContainer}>
            <Text style={styles.ctaLabel}>Finalizza iter di prenotazione</Text>
            <Button style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Procedi al pagamento</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

RequestConfirmPaymentScreen.displayName = "RequestConfirmPaymentScreen";
