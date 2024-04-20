import { useRoute } from "@react-navigation/native";
import { useMemo } from "react";

type OtpVerificationScreenRouteParams = {
  componentProps: {
    componentTitle: string;
    componentDescription: string;
  };
  handleGoBack?: () => void;
  handleVerification: (otp: string) => void;
  handleResendCode: () => void;
  hideGoBack?: boolean;
};

export const useOtpVerificationScreen = () => {
  const route = useRoute();

  const componentRouteData = useMemo<OtpVerificationScreenRouteParams>(
    () =>
      (route.params as OtpVerificationScreenRouteParams) ?? {
        componentProps: {
          componentTitle: "",
          componentDescription: "",
        },
        handleVerification: () => {},
        handleResendCode: () => {},
        handleGoBack: undefined,
        hideGoBack: false,
      },
    [route.params],
  );

  const {
    componentProps: { componentDescription, componentTitle },
    handleGoBack,
    handleVerification,
    hideGoBack,
    handleResendCode,
  } = useMemo(
    () =>
      componentRouteData ?? {
        componentProps: {
          componentTitle: "",
          componentDescription: "",
        },
        handleVerification: () => {},
        handleResendCode: () => {},
        handleGoBack: undefined,
        hideGoBack: false,
      },
    [componentRouteData],
  );

  return {
    componentDescription,
    componentTitle,
    handleGoBack,
    handleVerification,
    hideGoBack,
    handleResendCode,
  };
};
