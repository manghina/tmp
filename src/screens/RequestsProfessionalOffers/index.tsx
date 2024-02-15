import { memo } from "react";
import { useRequestProfessionalOffersScreen } from "./index.hooks";
import { View, Text, TouchableOpacity } from "react-native-ui-lib";
import { ProfessionalSearchCarousel } from "@app/components/users/ProfessionalResearchCarousel";
import { SafeAreaView } from "react-native";

type RequestsProfessionalOffersScreenProps = {};

export const RequestsProfessionalOffersScreen = memo(
  ({}: RequestsProfessionalOffersScreenProps) => {
    const { onBackButtonPress } = useRequestProfessionalOffersScreen();

    return (
      <SafeAreaView>
        <View
          style={{
            paddingTop: 50,
          }}
        >
          <View style={{ paddingHorizontal: 20, marginBottom: 16 }}>
            <Text Title>Prenotazione</Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum
              metus.
            </Text>
          </View>
          <ProfessionalSearchCarousel />
          <View
            style={{
              paddingHorizontal: 20,
              marginTop: 16,
              display: "flex",
              flexDirection: "column",
              gap: 20,
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
              Ci siamo già messi all'opera. Stiamo contattando i professionisti
              in linea con le tue richieste.
            </Text>
            <Text>
              A breve troverai qui sotto le nostre proposte con relativi orari e
              onorari dei medici disponibili.
            </Text>
            <Text>Riceverai una notifica al termine della ricerca.</Text>
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 24 }}>
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
