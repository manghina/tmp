import { memo } from "react";
import { useUserRequestsList } from "./index.hooks";
import { View, Text } from "react-native-ui-lib";
import { RequestCard } from "@app/components/RequestCard";

type UserRequestsListProps = {};

export const UserRequestsList = memo(({}: UserRequestsListProps) => {
  const { requestsList } = useUserRequestsList();

  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <Text h6>Prenotazioni in corso</Text>
      {requestsList.map((request) => (
        <RequestCard key={request._id} requestSummary={request.toSummary()} />
      ))}
    </View>
  );
});

UserRequestsList.displayName = "UserRequestsList";
