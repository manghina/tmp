import { memo } from "react";
import { CardStatus, useRequestCard } from "./index.hooks";
import { Animated } from "react-native";
import { Text, TouchableOpacity, View } from "react-native-ui-lib";

export type RequestCardProps = {
  _id: string;
  status: CardStatus;
  title: string;
  description: string;
  onPress: () => void;
};

export const RequestCard = memo(
  ({ status, title, description, onPress }: RequestCardProps) => {
    const {
      cardContainerStyles,
      cardTitleStyles,
      cardDescriptionStyles,
      cardIcon,
    } = useRequestCard(status);

    return (
      <TouchableOpacity onPress={onPress}>
        <Animated.View style={cardContainerStyles}>
          <View style={{ flexDirection: "row", gap: 15 }}>
            {cardIcon}
            <View flex style={{ gap: 10 }}>
              <Text style={cardTitleStyles}>{title}</Text>
              <Text style={cardDescriptionStyles}>{description}</Text>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  },
);

RequestCard.displayName = "RequestCard";
