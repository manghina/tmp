import { useOtpVerificationScreen } from "./index.hooks";
import { SafeAreaView } from "react-native";
import { style } from "./styles";
import { OtpVerification } from "@app/components/OtpVerification";

export const OtpVerificationScreen = () => {
  const {
    componentDescription,
    componentTitle,
    handleGoBack,
    handleVerification,
    hideGoBack,
    handleResendCode,
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
          handleResendCode={handleResendCode}
        />
      </SafeAreaView>
    </>
  );
};

OtpVerificationScreen.displayName = "OtpVerificationScreen";
OtpVerificationScreen.RouteName = "otp-verification" as const;
