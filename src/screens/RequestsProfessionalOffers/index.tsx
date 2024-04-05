import { memo } from "react";
import { useRequestProfessionalOffersScreen } from "./index.hooks";
import { View, Text, TouchableOpacity } from "react-native-ui-lib";
import { ProfessionalSearchCarousel } from "@app/components/_users/ProfessionalResearchCarousel";
import { SafeAreaView } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { headerHeight } from "@app/theme/spacings/dimensions";

type RequestsProfessionalOffersScreenProps = {};

export const RequestsProfessionalOffersScreen = memo(
  ({}: RequestsProfessionalOffersScreenProps) => {
    const { onBackButtonPress } = useRequestProfessionalOffersScreen();

    return (
      <SafeAreaView>
        <View
          style={{
            paddingVertical: headerHeight + dimensionsTokens.paddingXs,
            flexDirection: "column",
            gap: dimensionsTokens.paddingMd,
          }}
        >
          <View style={{ paddingHorizontal: dimensionsTokens.paddingSm }}>
            <Text h3>Prenotazione</Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum
              metus.
            </Text>
          </View>
          <ProfessionalSearchCarousel />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              gap: dimensionsTokens.paddingXs,
              paddingHorizontal: dimensionsTokens.paddingSm,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Ricerca in corso
            </Text>
            <Text>
              {`Sto analizzando in tempo reale migliaia di informazioni per trovare il professionista ideale per la tua esigenza.

A breve troverai qui sotto le proposte perfette per te con relativi orari e onorari dei medici disponibili.

Riceverai una notifica al termine della ricerca.`}
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: dimensionsTokens.paddingSm,
              paddingVertical: dimensionsTokens.paddingXs,
            }}
          >
            <TouchableOpacity onPress={onBackButtonPress}>
              <Text
                style={{
                  textDecorationLine: "underline",
                }}
              >
                Torna indietro
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  },
);

RequestsProfessionalOffersScreen.displayName =
  "RequestsProfessionalOffersScreen";
