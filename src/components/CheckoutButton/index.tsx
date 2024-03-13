import { memo } from "react";
import { Button, Text, View } from "react-native-ui-lib";
import { useCheckoutButton } from "./index.hooks";
import { styles } from "./styles";
import { ActivityIndicator } from "react-native";

type CheckoutButtonProps = {
  professionalOfferId: string;
  slotId: string;
};

export const CheckoutButton = memo(
  ({ professionalOfferId, slotId }: CheckoutButtonProps) => {
    const { isReady, isLoading, onPress } = useCheckoutButton(
      professionalOfferId,
      slotId,
    );

    return (
      <View style={styles.container}>
        <Text style={styles.label}>Finalizza iter di prenotazione</Text>
        <Button
          style={styles.button}
          onPress={onPress}
          disabled={!isReady || isLoading}
        >
          {isLoading && <ActivityIndicator style={styles.activityIndicator} />}
          <Text style={styles.buttonText}>Procedi al pagamento</Text>
        </Button>
      </View>
    );
  },
);

CheckoutButton.displayName = "CheckoutButton";
