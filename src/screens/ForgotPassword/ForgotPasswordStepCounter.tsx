import React from "react";
import { Text, View } from "react-native-ui-lib";

interface ForgotPasswordStepCounterProps {
  stepperCounter: number;
}

export const ForgotPasswordStepCounter: React.FC<
  ForgotPasswordStepCounterProps
> = ({ stepperCounter }) => {
  return (
    <View row style={{ alignItems: "flex-end" }}>
      {(() => {
        switch (stepperCounter) {
          case 1:
            return (
              <>
                <Text Title marginR-4>
                  01
                </Text>
                <Text gray24stepper marginB-2 marginR-4>
                  02
                </Text>
                <Text gray24stepper marginB-2>
                  03
                </Text>
              </>
            );
          case 2:
            return (
              <>
                <Text gray24stepper marginB-2 marginR-4>
                  01
                </Text>
                <Text Title marginR-4>
                  02
                </Text>
                <Text gray24stepper marginB-2>
                  03
                </Text>
              </>
            );
          case 3:
            return (
              <>
                <Text gray24stepper marginB-2 marginR-4>
                  01
                </Text>
                <Text gray24stepper marginB-2 marginR-4>
                  02
                </Text>
                <Text Title marginR-4>
                  03
                </Text>
              </>
            );
        }
      })()}
    </View>
  );
};
