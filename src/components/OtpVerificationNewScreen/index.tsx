import React, { JSX, ReactElement, memo } from "react";
import { TouchableOpacity, View } from "react-native-ui-lib";
import { useOtpVerificationNewScreen } from "./index.hooks";

type OtpVerificationNewScreenProps = {
  componentProps: {
    componentTitle: string;
    componentDescription: string;
  };
  handleVerification: (otp: string) => void;
  handleResendCode: () => void;
  children: ReactElement;
  handleGoBack?: () => void;
  disableChildrenPointerEvents?: boolean;
  hideGoBack?: boolean;
  hideHeader?: boolean;
};

export const OtpVerificationNewScreen = memo(
  ({
    componentProps,
    children,
    handleGoBack,
    handleVerification,
    disableChildrenPointerEvents,
    hideGoBack,
    hideHeader,
    handleResendCode,
  }: OtpVerificationNewScreenProps) => {
    const { onOpenScreenClicked } = useOtpVerificationNewScreen({
      componentProps,
      handleGoBack,
      handleVerification,
      hideGoBack,
      hideHeader,
      handleResendCode,
    });
    return (
      <TouchableOpacity onPress={onOpenScreenClicked}>
        <View pointerEvents={disableChildrenPointerEvents ? "none" : "auto"}>
          {children}
        </View>
      </TouchableOpacity>
    );
  },
);

OtpVerificationNewScreen.displayName = "OtpVerificationNewScreen";
