import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NativeSyntheticEvent, TextInputKeyPressEventData } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";

export const useOtpVerification = ({
  handleVerification,
  handleResendCode,
  handleGoBack,
}: {
  handleVerification: (otp: string) => void;
  handleResendCode: () => void;
  handleGoBack?: () => void;
}) => {
  const navigation = useNavigation<any>();
  const [otpCode, setOtpCode] = useState<string>("");
  const isOtpError = useSelector(selectors.getIsOtpError);
  const dispatch = useDispatch();

  const [countdown, setCountdown] = useState(600);
  const [isCountdownActive, setIsCountdownActive] = useState(true);
  const countdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  // fake loader
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
        if (isOtpError) {
          dispatch(actions.setIsOtpError(null));
        }
      }),
    [otpCode, isOtpError],
  );

  const triggerGoBack = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (handleGoBack) {
      handleGoBack();
    } else {
      navigation.pop();
    }
  }, [handleGoBack, navigation, timerRef]);

  const triggerResendCode = useCallback(() => {
    handleResendCode();
    setIsCountdownActive(true);
  }, [handleResendCode, setIsCountdownActive]);

  useEffect(() => {
    if (otpCode.length === 6 && !isOtpError) {
      handleVerification(otpCode);
      // fake loader
      setIsLoading(true);
      timerRef.current = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, [otpCode, handleVerification, isOtpError, timerRef]);

  useEffect(() => {
    if (isLoading && isOtpError && timerRef.current) {
      setOtpCode("");
      // fake loader
      clearTimeout(timerRef.current);
      setIsLoading(false);
    }
  }, [isLoading, isOtpError, setOtpCode, setIsLoading, timerRef]);

  useEffect(() => {
    if (isCountdownActive) {
      countdownTimerRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 0) {
            setIsCountdownActive(false);
            clearInterval(countdownTimerRef.current!);
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (countdownTimerRef.current) {
        clearInterval(countdownTimerRef.current);
      }
    };
  }, [isCountdownActive]);

  return {
    otpCode,
    onOtpChangeTextCallbacks,
    onOtpKeyPressCallbacks,
    isLoading,
    isOtpError,
    triggerGoBack,
    countdown,
    isCountdownActive,
    triggerResendCode,
  };
};
