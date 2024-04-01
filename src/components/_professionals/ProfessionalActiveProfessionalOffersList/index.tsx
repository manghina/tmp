import { memo } from "react";
import { View } from "react-native-ui-lib";
import { useProfessionalActiveProfessionalOffersList } from "./index.hooks";
import { styles } from "./styles";
import { RequestCard } from "src/components/RequestCard";

type ProfessionalActiveProfessionalOffersListProps = {};

export const ProfessionalActiveProfessionalOffersList = memo(
  ({}: ProfessionalActiveProfessionalOffersListProps) => {
    const { cards } = useProfessionalActiveProfessionalOffersList();

    return (
      <View style={styles.listContainer}>
        {cards.map((card, index) => (
          <RequestCard key={card._id} {...card} />
        ))}
      </View>
    );
  },
);
