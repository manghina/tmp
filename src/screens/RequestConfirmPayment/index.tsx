import { memo } from "react";
import { Button, Text, View } from "react-native-ui-lib";
import { useRequestConfirmPaymentScreen } from "./index.hooks";
import { SafeAreaView } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions, headerHeight } from "@app/theme/spacings/dimensions";
import { colorTokensLight } from "../../theme/colors/tokens";

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
      <View
        style={{
          paddingTop: headerHeight + dimensionsTokens.paddingXs,
          paddingBottom: dimensionsTokens.paddingXs,
          paddingHorizontal: dimensionsTokens.paddingMd,
          flexDirection: "column",
          gap: dimensionsTokens.paddingMd,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            gap: Dimensions.small.spacing_025,
          }}
        >
          <Text Title>Conferma visita</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum
            metus.
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            gap: dimensionsTokens.paddingXs,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              gap: Dimensions.small.spacing_025,
            }}
          >
            <Text>Dettagli</Text>
            <View
              style={{
                padding: dimensionsTokens.paddingXs,
                gap: dimensionsTokens.paddingXs,
                borderRadius: 8,
                backgroundColor: "rgba(9, 30, 66, 0.06)",
              }}
            >
              <View>
                {detailsContent.map((detail) => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>{detail.title}</Text>
                    <Text>{detail.value}</Text>
                  </View>
                ))}
              </View>
              <View
                style={{ borderBottomWidth: 0.5, borderBottomColor: "#44546F" }}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>TOTALE A GARANZIA</Text>
                <Text>€ 16,00</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              gap: Dimensions.small.spacing_025,
            }}
          >
            <Text>Metodo di pagamento</Text>
            <View
              style={{
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "rgba(9, 30, 66, 0.06)",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: dimensionsTokens.paddingXs,
                }}
              >
                <Text>Visa **** 1234</Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 0.5,
                  borderBottomColor: "rgba(9, 30, 66, 0.06)",
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: dimensionsTokens.paddingXs,
                }}
              >
                <Text>Apple Pay</Text>
              </View>
              <View
                style={{
                  borderBottomWidth: 0.5,
                  borderBottomColor: "rgba(9, 30, 66, 0.06)",
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: dimensionsTokens.paddingXs,
                }}
              >
                <Text>Paypal</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              gap: Dimensions.small.spacing_025,
            }}
          >
            <Text style={{ alignSelf: "center" }}>
              Finalizza iter di prenotazione
            </Text>
            <Button label="Procedi al pagamento" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
});

RequestConfirmPaymentScreen.displayName = "RequestConfirmPaymentScreen";
