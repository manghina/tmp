import { memo } from "react";
import { useUserRequestsList } from "./index.hooks";
import { View, Text } from "react-native-ui-lib";
import { UserRequestCard } from "@app/components/users/UserRequestCard";

type UserRequestsListProps = {};

export const UserRequestsList = memo(({}: UserRequestsListProps) => {
  const { requestsList } = useUserRequestsList();

  return (
    <View
      style={{
        gap: 10,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "900",
          }}
        >
          Prenotazioni in corso
        </Text>
      </View>
      {requestsList.map((request) => (
        <UserRequestCard key={request._id} request={request} />
      ))}
    </View>
  );
});

UserRequestsList.displayName = "UserRequestsList";
