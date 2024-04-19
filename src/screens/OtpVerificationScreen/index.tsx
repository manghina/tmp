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
    hideGoBack,
  } = useOtpVerificationScreen();

  return (
    <>
      <SafeAreaView style={style.pageContainer}>
        <OtpVerification
          componentProps={{
            componentTitle,
            componentDescription,
          }}
          handleGoBack={handleGoBack}
          handleVerification={handleVerification}
          hideGoBack={hideGoBack}
        />
      </SafeAreaView>
    </>
  );
};

OtpVerificationScreen.displayName = "OtpVerificationScreen";
OtpVerificationScreen.RouteName = "otp-verification" as const;
