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
      {(() => {
        return (
          <>
            {[1,2].map(step => {
              const isActive = step === stepperCounter;

              return (
                <Text key={step.toString()} marginB-2={!isActive} Title={isActive} gray24stepper={!isActive} marginR-4>
                  {step.toString().padStart(2,"0")}
                </Text>
              )
            })}
          </>
        )
      })()}
    </View>
  );
};
