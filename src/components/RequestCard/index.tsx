import { memo } from "react";
import { useRequestCard } from "./index.hooks";
import { Animated } from "react-native";
import { Text, TouchableOpacity, View } from "react-native-ui-lib";
import { IRequestSummary } from "@app/models/Request";

type RequestCardCardProps = {
  requestSummary: IRequestSummary;
};

export const RequestCard = memo(({ requestSummary }: RequestCardCardProps) => {
  const {
    cardContainerStyles,
    cardTitleStyles,
    cardDescriptionStyles,
    cardIcon,
    onCardPressed,
  } = useRequestCard(requestSummary);

  return (
    <TouchableOpacity onPress={onCardPressed}>
      <Animated.View style={cardContainerStyles}>
        <View style={{ flexDirection: "row", gap: 15 }}>
          {cardIcon}
          <View flex style={{ gap: 10 }}>
            <Text style={cardTitleStyles}>{requestSummary.currentStatus}</Text>
            <Text style={cardDescriptionStyles}>
              {requestSummary.currentStatus}
            </Text>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
});

RequestCard.displayName = "RequestCard";
