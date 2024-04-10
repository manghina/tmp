import { useRoute } from "@react-navigation/native";
import { useMemo } from "react";

type OtpVerificationScreenRouteParams = {
  componentProps: {
    componentTitle: string;
    componentDescription: string;
  };
  handleGoBack: () => void;
  handleVerification: (otp: string) => void;
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
        handleGoBack: () => {},
        handleVerification: () => {},
      },
    [route.params],
  );

  const {
    componentProps: { componentDescription, componentTitle },
    handleGoBack,
    handleVerification,
  } = useMemo(
    () =>
      componentRouteData ?? {
        componentProps: {
          componentTitle: "",
          componentDescription: "",
        },
        handleGoBack: () => {},
        handleVerification: () => {},
      },
    [componentRouteData],
  );

  return {
    componentDescription,
    componentTitle,
    handleGoBack,
    handleVerification,
  };
};
