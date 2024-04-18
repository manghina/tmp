import React, { memo } from "react";
import { useOtpVerificationScreen } from "./index.hooks";
import { SafeAreaView, ScrollView } from "react-native";
import { style } from "./styles";
import { OtpVerification } from "@app/components/OtpVerification";

export const OtpVerificationScreen = () => {
  const {
    componentDescription,
    componentTitle,
    handleGoBack,
    handleVerification,
  } = useOtpVerificationScreen();

  return (
    <>
      <SafeAreaView style={style.pageContainer}>
        <ScrollView>
          <OtpVerification
            componentProps={{
              componentTitle,
              componentDescription,
            }}
            handleGoBack={handleGoBack}
            handleVerification={handleVerification}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

OtpVerificationScreen.displayName = "OtpVerificationScreen";
OtpVerificationScreen.RouteName = "otp-verification" as const;
