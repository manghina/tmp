import { memo } from "react";
import { TouchableOpacity, View } from "react-native-ui-lib";
import { useProfessionalActiveProfessionalOffersList } from "./index.hooks";
import { styles } from "./styles";
import { RequestCard } from "src/components/RequestCard";

type ProfessionalActiveProfessionalOffersListProps = {};

export const ProfessionalActiveProfessionalOffersList = memo(
  ({}: ProfessionalActiveProfessionalOffersListProps) => {
    const { activeProfessionalOffers, onProfessionalOfferClickedCallbacks } =
      useProfessionalActiveProfessionalOffersList();

    return (
      <View style={styles.listContainer}>
        {activeProfessionalOffers.map((professionalOffer, index) => (
          <TouchableOpacity
            key={professionalOffer._id}
            onPress={onProfessionalOfferClickedCallbacks[index]}
          >
            <RequestCard requestSummary={professionalOffer.request} />
          </TouchableOpacity>
        ))}
      </View>
    );
  },
);
