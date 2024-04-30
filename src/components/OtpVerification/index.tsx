import { Fragment, memo } from "react";
import { styles } from "./styles";
import { Text, View, TouchableOpacity } from "react-native-ui-lib";
import { BaseTextField } from "@app/components/_baseInputs/BaseTextField";
import { useOtpVerification } from "./index.hooks";

interface OtpVerificationProps {
  componentProps: {
    componentTitle: string;
    componentDescription: string;
  };
  handleVerification: (otp: string) => void;
  handleResendCode: () => void;
  handleGoBack?: () => void;
  hideGoBack?: boolean;
  goBackText?: string;
}

export const OtpVerification = memo(
  ({
    componentProps: { componentTitle, componentDescription },
    handleGoBack,
    handleVerification,
    hideGoBack,
    handleResendCode,
    goBackText,
  }: OtpVerificationProps) => {
    const {
      otpCode,
      onOtpChangeTextCallbacks,
      onOtpKeyPressCallbacks,
      isLoading,
      isOtpError,
      triggerGoBack,
      countdown,
      isCountdownActive,
      triggerResendCode,
    } = useOtpVerification({
      handleVerification,
      handleGoBack,
      handleResendCode,
    });

    return (
      <View style={styles.otpContainer}>
        <View style={styles.otpHeading}>
          <Text style={styles.otpTitle}>{componentTitle}</Text>
          <Text style={styles.otpDescription}>{componentDescription}</Text>
        </View>
        <View style={styles.codeContainer}>
          <Text style={styles.codeReceivedByEmailText}>
            Codice di verifica ricevuto via email
          </Text>
          <View style={styles.otpInputContainer}>
            {new Array(6).fill(0).map((_, index) => (
              <Fragment key={index}>
                <BaseTextField
                  pointerEvents={
                    index === 0 && otpCode.length === 0 ? "auto" : "none"
                  }
                  id={index.toString()}
                  autoFocus={index === 0}
                  focus={index === otpCode.length && otpCode.length < 6}
                  blur={index === 5 && otpCode.length === 6}
                  value={otpCode[index]}
                  style={styles.otpInputItem}
                  keyboardType="number-pad"
                  onKeyPress={onOtpKeyPressCallbacks[index]}
                  onChangeText={onOtpChangeTextCallbacks[index]}
                />
                {index === 2 && <Text>-</Text>}
              </Fragment>
            ))}
          </View>
        </View>
        {isOtpError && (
          <Text style={styles.otpErrorText}>Codice non valido. Riprova</Text>
        )}
        <View style={styles.otpTextContainer}>
          {isLoading || isCountdownActive ? (
            <Text style={styles.otpTimerText}>
              {isLoading
                ? "Verifica codice in corso..."
                : `Inserisci codice entro 00:${
                    (countdown < 10 ? `0${countdown}` : countdown) ?? "00"
                  }`}
            </Text>
          ) : (
            <View style={styles.otpResetContainer}>
              <View>
                <Text style={styles.otpResetText}>
                  Non hai ricevuto il codice?
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={triggerResendCode}>
                  <Text style={styles.otpResetCta}>Clicca qui</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        {!hideGoBack && (
          <View style={styles.otpGoBackContainer}>
            <TouchableOpacity onPress={!isLoading ? triggerGoBack : () => {}}>
              <Text
                style={[
                  styles.otpGoBack,
                  isLoading ? styles.otpGoBackDisabled : undefined,
                ]}
              >
                {goBackText ?? "Torna indietro"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  },
);
