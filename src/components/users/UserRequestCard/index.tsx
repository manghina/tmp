import { memo } from "react";
import { useUserRequestCard } from "./index.hooks";
import { Animated } from "react-native";
import { Text, TouchableOpacity, View } from "react-native-ui-lib";
import { Request } from "@app/models/Request";

type UserRequestCardProps = {
  request: Request;
};

export const UserRequestCard = memo(({ request }: UserRequestCardProps) => {
  const {
    cardContainerStyles,
    cardTitleStyles,
    cardDescriptionStyles,
    cardIcon,
    onCardPressed,
  } = useUserRequestCard(request);

  return (
    <TouchableOpacity onPress={onCardPressed}>
      <Animated.View style={cardContainerStyles}>
        <View style={{ flexDirection: "row", gap: 15 }}>
          {cardIcon}
          <View flex style={{ gap: 10 }}>
            <Text style={cardTitleStyles}>{request.currentStatus}</Text>
            <Text style={cardDescriptionStyles}>{request.currentStatus}</Text>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
});

UserRequestCard.displayName = "UserRequestCard";
