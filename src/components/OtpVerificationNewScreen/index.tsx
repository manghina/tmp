import React, { JSX, memo } from "react";
import { TouchableOpacity } from "react-native-ui-lib";
import { useOtpVerificationNewScreen } from "./index.hooks";

type OtpVerificationNewScreenProps = {
  componentProps: {
    componentTitle: string;
    componentDescription: string;
  };
  handleGoBack: () => void;
  handleVerification: (otp: string) => void;
  children: JSX.Element;
};

export const OtpVerificationNewScreen = memo(
  ({
    componentProps,
    children,
    handleGoBack,
    handleVerification,
  }: OtpVerificationNewScreenProps) => {
    const { onOpenScreenClicked } = useOtpVerificationNewScreen({
      componentProps,
      handleGoBack,
      handleVerification,
    });
    return (
      <TouchableOpacity onPress={onOpenScreenClicked}>
        {children}
      </TouchableOpacity>
    );
  },
);

OtpVerificationNewScreen.displayName = "OtpVerificationNewScreen";
