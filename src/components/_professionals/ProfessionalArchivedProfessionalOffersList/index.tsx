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
      archivedProfessionalOffers,
      onProfessionalOfferClickedCallbacks,
      onLoadMoreArchivedOffersClicked,
    } = useProfessionalArchivedProfessionalOffersList();

    return (
      <View style={styles.listContainer}>
        {archivedProfessionalOffers.map((professionalOffer, index) => (
          <TouchableOpacity
            key={professionalOffer._id}
            onPress={onProfessionalOfferClickedCallbacks[index]}
          >
            <RequestCard requestSummary={professionalOffer.request} />
          </TouchableOpacity>
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
