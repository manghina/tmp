import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { OtpVerificationScreen } from "@app/screens/OtpVerificationScreen";

type OtpVerificationNewScreenProps = {
  componentProps: {
    componentTitle: string;
    componentDescription: string;
  };
  handleGoBack: () => void;
  handleVerification: (otp: string) => void;
};

export const useOtpVerificationNewScreen = ({
  componentProps,
  handleGoBack,
  handleVerification,
}: OtpVerificationNewScreenProps) => {
  const navigation = useNavigation<any>();

  const onOpenScreenClicked = useCallback(() => {
    navigation.navigate(OtpVerificationScreen.RouteName, {
      handleGoBack,
      componentProps,
      handleVerification,
    });
  }, [navigation, componentProps]);

  return { onOpenScreenClicked };
};
