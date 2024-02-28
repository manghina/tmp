import React, { memo } from "react";
import { Text, View } from "react-native-ui-lib";
import { current } from "@reduxjs/toolkit";
import { styles } from "./styles";

interface HeaderStepperCounterProps {
  totalSteps: number;
  currentStep: number;
}

export const HeaderStepperCounter = memo(
  ({ totalSteps, currentStep }: HeaderStepperCounterProps) => {
    return (
      <View row style={styles.container}>
        {new Array(totalSteps).fill(0).map((_, index) => {
          const isActive = index + 1 === currentStep;

          return (
            <Text
              key={(index + 1).toString()}
              style={[styles.digit, isActive && styles.active]}
            >
              {(index + 1).toString().padStart(2, "0")}
            </Text>
          );
        })}
      </View>
    );
  },
);

HeaderStepperCounter.displayName = "HeaderStepperCounter";
