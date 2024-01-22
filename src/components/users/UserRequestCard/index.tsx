import { memo } from "react";
import { useUserRequestCard } from "./index.hooks";
import { Animated } from "react-native";
import { Text, View } from "react-native-ui-lib";
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
  } = useUserRequestCard(request);

  return (
    <Animated.View style={cardContainerStyles}>
      <View style={{ flexDirection: "row", gap: 15 }}>
        {cardIcon}
        <View flex style={{ gap: 10 }}>
          <Text style={cardTitleStyles}>{request.status}</Text>
          <Text style={cardDescriptionStyles}>{request.description}</Text>
        </View>
      </View>
    </Animated.View>
  );
});

UserRequestCard.displayName = "UserRequestCard";
