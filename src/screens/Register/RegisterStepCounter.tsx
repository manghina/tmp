import React from "react";
import { Text, View } from "react-native-ui-lib";

interface RegisterStepCounterProps {
  stepperCounter: number;
}

export const RegisterStepCounter: React.FC<RegisterStepCounterProps> = ({
  stepperCounter,
}) => {
  return (
    <View row style={{ alignItems: "flex-end" }}>
      {stepperCounter === 1 ? (
        <>
          <Text Title>01</Text>
          <Text gray24stepper marginB-2>
            02
          </Text>
        </>
      ) : (
        <>
          <Text gray24stepper marginB-2>
            01
          </Text>
          <Text Title>02</Text>
        </>
      )}
    </View>
  );
};
