import { useCallback, useEffect, useMemo, useState } from "react";
import { NativeSyntheticEvent, TextInputKeyPressEventData } from "react-native";

export const useOtpVerification = ({
  handleVerification,
  handleGoBack,
}: {
  handleVerification: (otp: string) => void;
  handleGoBack: () => void;
}) => {
  const [otpCode, setOtpCode] = useState<string>("");

  // fake code
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleOtpCodeChange = useCallback(
    (value: string, index: number) => {
      const newValues = otpCode.split("");
      if (value.length > 0) {
        newValues.push(value.slice(0, 6));
      } else {
        newValues.splice(index, 1);
      }
      setOtpCode(newValues.join("").slice(0, 6));
    },
    [otpCode],
  );

  const onOtpKeyPressCallbacks = useMemo(
    () =>
      new Array(6)
        .fill(0)
        .map(
          (_, index) =>
            ({
              nativeEvent,
            }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
              if (
                nativeEvent.key === "Backspace" &&
                !otpCode[index] &&
                index > 0
              ) {
                handleOtpCodeChange("", index - 1);
              }
            },
        ),
    [otpCode],
  );

  const onOtpChangeTextCallbacks = useMemo(
    () =>
      new Array(6).fill(0).map((_, index) => (value: string) => {
        handleOtpCodeChange(value, index);
      }),
    [otpCode],
  );

  useEffect(() => {
    if (otpCode.length === 6) {
      handleVerification(otpCode);
      // fake code
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        handleGoBack();
      }, 3000);
    }
  }, [otpCode, handleVerification]);

  return {
    otpCode,
    onOtpChangeTextCallbacks,
    onOtpKeyPressCallbacks,
    isLoading,
    isError,
  };
};
