import { useRoute } from "@react-navigation/native";
import { useMemo } from "react";

type OtpVerificationScreenRouteParams = {
  componentProps: {
    componentTitle: string;
    componentDescription: string;
  };
  handleGoBack?: () => void;
  handleVerification: (otp: string) => void;
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
  } = useMemo(
    () =>
      componentRouteData ?? {
        componentProps: {
          componentTitle: "",
          componentDescription: "",
        },
        handleVerification: () => {},
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
  };
};
