import { memo } from "react";
import { Button, View, Text, TouchableOpacity } from "react-native-ui-lib";
import { useProfessionalArchivedProfessionalOffersList } from "./index.hooks";
import { styles } from "./styles";
import { RequestCard } from "src/components/RequestCard";

type ProfessionalArchivedProfessionalOffersListProps = {};

export const ProfessionalArchivedProfessionalOffersList = memo(
  ({}: ProfessionalArchivedProfessionalOffersListProps) => {
    const {
      hasMore,
      isLoadingProfessionalOffers,
      cards,
      onProfessionalOfferClickedCallbacks,
      onLoadMoreArchivedOffersClicked,
    } = useProfessionalArchivedProfessionalOffersList();

    return (
      <View style={styles.listContainer}>
        {cards.map((card) => (
          <RequestCard key={card._id} {...card} />
        ))}
        {hasMore && (
          <Button
            onPress={onLoadMoreArchivedOffersClicked}
            disabled={isLoadingProfessionalOffers}
          >
            <Text>Carica altre richieste</Text>
          </Button>
        )}
      </View>
    );
  },
);

ProfessionalArchivedProfessionalOffersList.displayName =
  "ProfessionalArchivedProfessionalOffersList";
