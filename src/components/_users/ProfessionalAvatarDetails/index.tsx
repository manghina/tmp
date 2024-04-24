import { Text, View } from "react-native-ui-lib";
import { memo } from "react";
import { IProfessionalSummary } from "@app/models/Professional";

import { styles } from "./styles";
import { useProfessionalAvatarDetails } from "./index.hooks";
import { Avatar } from "@app/components/Avatar";

type ProfessionalAvatarDetailsProps = {
  professional: IProfessionalSummary;
};

export const ProfessionalAvatarDetails = memo(
  ({ professional }: ProfessionalAvatarDetailsProps) => {
    const {} = useProfessionalAvatarDetails();

    return (
      <View style={styles.doctorGeneralitiesContainer}>
        <View style={styles.doctorAvatar}>
          <Avatar data={professional} />
        </View>
        <View>
          <Text style={styles.doctorNameText}>
            Dott. {professional.name} {professional.lastName[0].toUpperCase()}.
          </Text>
          <Text style={styles.doctorSpecializationText}>
            Specialità: {professional?.specializations[0] ?? "xxxxxxxxx"}
          </Text>
          <Text style={styles.doctorDistanceText}>a 10 min da te</Text>
        </View>
      </View>
    );
  },
);

ProfessionalAvatarDetails.displayName = "ProfessionalAvatarDetails";
