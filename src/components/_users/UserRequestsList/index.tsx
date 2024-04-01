import { memo } from "react";
import { useUserRequestsList } from "./index.hooks";
import { View, Text } from "react-native-ui-lib";
import { RequestCard } from "@app/components/RequestCard";

type UserRequestsListProps = {};

export const UserRequestsList = memo(({}: UserRequestsListProps) => {
  const { cards } = useUserRequestsList();

  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <Text h6>Prenotazioni in corso</Text>
      {cards.map((card) => (
        <RequestCard key={card._id} {...card} />
      ))}
    </View>
  );
});

UserRequestsList.displayName = "UserRequestsList";
