import { memo } from "react";
import { Button, Text, View } from "react-native-ui-lib";
import { useRequestConfirmPaymentScreen } from "./index.hooks";
import { SafeAreaView } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions, headerHeight } from "@app/theme/spacings/dimensions";
import { colorTokensLight } from "../../theme/colors/tokens";
import { FontSizes } from "../../theme/typographies/properties";
import { textVariants } from "../../theme/typographies/variants";

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
          <Text style={{ ...textVariants.h3CondensedBlackNormal }}>
            Conferma visita
          </Text>
          <Text style={{ ...textVariants.p1MediumNormal }}>
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
            <Text style={{ ...textVariants.p2MediumNormal }}>Dettagli</Text>
            <View
              style={{
                padding: dimensionsTokens.paddingXs,
                gap: dimensionsTokens.paddingXs,
                borderRadius: 8,
                backgroundColor: "rgba(9, 30, 66, 0.08)",
              }}
            >
              <View style={{ gap: Dimensions.small.spacing_025 }}>
                {detailsContent.map((detail) => (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ ...textVariants.p1MediumNormal }}>
                      {detail.title}
                    </Text>
                    <Text style={{ ...textVariants.p1CondensedBoldNormal }}>
                      {detail.value}
                    </Text>
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
                <Text
                  style={{
                    ...textVariants.h6CondensedBlackNormal,
                  }}
                >
                  TOTALE A GARANZIA
                </Text>
                <Text style={{ ...textVariants.h6CondensedBlackNormal }}>
                  € 16,00
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              gap: Dimensions.small.spacing_025,
            }}
          >
            <Text style={{ ...textVariants.p2MediumNormal }}>
              Metodo di pagamento
            </Text>
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
            <Text
              style={{ alignSelf: "center", ...textVariants.p2MediumNormal }}
            >
              Finalizza iter di prenotazione
            </Text>
            <Button
              style={{
                paddingVertical: dimensionsTokens.paddingXs,
              }}
            >
              <Text
                style={{
                  ...textVariants.p2MediumNormal,
                  color: "#FFF",
                }}
              >
                Procedi al pagamento
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
});

RequestConfirmPaymentScreen.displayName = "RequestConfirmPaymentScreen";
