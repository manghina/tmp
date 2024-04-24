import { useEmailVerificationScreen } from "./index.hooks";
import { SafeAreaView } from "react-native";
import { style } from "./styles";
import { OtpVerification } from "@app/components/OtpVerification";

export const EmailVerificationScreen = () => {
  const { handleEmailVerification, handleResendEmailOtp } =
    useEmailVerificationScreen();

  return (
    <>
      <SafeAreaView style={style.pageContainer}>
        <OtpVerification
          componentProps={{
            componentTitle: "Verifica email",
            componentDescription:
              "Inserisci il codice numerico che abbiamo inviato al tuo indirizzo email",
          }}
          handleVerification={handleEmailVerification}
          handleResendCode={handleResendEmailOtp}
          hideGoBack={true}
        />
      </SafeAreaView>
    </>
  );
};

EmailVerificationScreen.displayName = "EmailVerificationScreen";
EmailVerificationScreen.RouteName = "email-verification" as const;
