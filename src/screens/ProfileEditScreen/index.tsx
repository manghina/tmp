import React from "react";
import { useUserProfileEditScreen } from "./index.hooks";
import { SafeAreaView, ScrollView } from "react-native";
import { userProfileEditStyles } from "./styles";
import { Button, Text, View } from "react-native-ui-lib";
import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { FormDatePicker } from "@app/components/_form/FormDatePicker";
import { FormNewScreenFilterableSelect } from "@app/components/_form/FormNewScreenFilterableSelect";
import { FormRadioGroup } from "@app/components/_form/FormRadioGroup";
import { SuccessFilledIcon, WarningFilledIcon } from "@app/components/SvgIcons";
import { OtpVerificationNewScreen } from "@app/components/OtpVerificationNewScreen";

const otpComponentProps = {
  componentTitle: "Numero di contatto",
  componentDescription:
    "Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus.",
};

export const ProfileEditScreen = () => {
  const {
    formData,
    countryOptions,
    phonePrefixOptions,
    genderOptions,
    triggerProfileEditSubmit,
    isToVerifyPhoneNumber,
    isVerifiedPhoneNumber,
    handleGoBackFromOtpVerification,
    handleOtpVerification,
    submitDisabled,
  } = useUserProfileEditScreen();

  const OtpNewScreenWrapper = ({ children }: { children: JSX.Element }) => {
    return (
      <OtpVerificationNewScreen
        componentProps={otpComponentProps}
        handleGoBack={handleGoBackFromOtpVerification}
        handleVerification={handleOtpVerification}
      >
        {children}
      </OtpVerificationNewScreen>
    );
  };

  const renderPageContent = () => (
    <View style={userProfileEditStyles.container}>
      <View style={userProfileEditStyles.headingContainer}>
        <Text style={userProfileEditStyles.title}>Modifica profilo</Text>
        <Text style={userProfileEditStyles.subTitle}>
          Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus.
        </Text>
      </View>
      <View style={userProfileEditStyles.formColumn}>
        <FormTextField name="name" label="Nome" />
        <FormTextField name="lastName" label="Cognome" />
        <FormDatePicker name="birthDate" label="Data di nascita" />
        <FormNewScreenFilterableSelect
          key="country"
          name="country"
          label="Nazione (cittadinanza)"
          options={countryOptions}
          pageProps={{
            pageTitle: "Nazionalità",
            searchTextLabel: "Cerca...",
            listTitle: "Lista nazioni",
          }}
        />
        <FormRadioGroup
          name="gender"
          listTitle="Sesso biologico"
          options={genderOptions}
        />
        <View>
          <View style={userProfileEditStyles.phoneNumberLabelContainer}>
            <Text style={userProfileEditStyles.phoneNumberLabel}>
              Numero di cellulare
            </Text>
            {isToVerifyPhoneNumber && (
              <OtpNewScreenWrapper>
                <Text style={userProfileEditStyles.phoneNumberVerifyText}>
                  Verifica
                </Text>
              </OtpNewScreenWrapper>
            )}
          </View>
          <View style={userProfileEditStyles.phoneInputContainer}>
            <View style={userProfileEditStyles.phonePrefixContainer}>
              <FormNewScreenFilterableSelect
                key="phonePrefix"
                name="phonePrefix"
                label=""
                options={phonePrefixOptions}
                pageProps={{
                  pageTitle: "Seleziona prefisso",
                  pageDescription:
                    "Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus.",
                  searchTextLabel: "Trova nazione",
                  listTitle: "Lista nazioni",
                }}
                style={userProfileEditStyles.phonePrefix}
                reducedLabel
              />
            </View>
            <View style={userProfileEditStyles.phoneNumberContainer}>
              <FormTextField
                key="phoneNumber"
                name="phoneNumber"
                trailingAccessory={
                  isToVerifyPhoneNumber ? (
                    <OtpNewScreenWrapper>
                      <View style={userProfileEditStyles.iconContainer}>
                        <WarningFilledIcon
                          color={userProfileEditStyles.warningIcon.color}
                        />
                      </View>
                    </OtpNewScreenWrapper>
                  ) : isVerifiedPhoneNumber ? (
                    <View style={userProfileEditStyles.iconContainer}>
                      <SuccessFilledIcon
                        color={userProfileEditStyles.successIcon.color}
                      />
                    </View>
                  ) : (
                    <></>
                  )
                }
                keyboardType="phone-pad"
                style={{
                  ...userProfileEditStyles.phoneNumber,
                  ...(isToVerifyPhoneNumber
                    ? userProfileEditStyles.phoneNumberToVerify
                    : {}),
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <View>
        <Button
          label="Salva informazioni"
          disabled={submitDisabled}
          onPress={triggerProfileEditSubmit}
        />
      </View>
    </View>
  );

  return (
    <>
      <SafeAreaView style={userProfileEditStyles.safeAreaView} >
        <ScrollView style={userProfileEditStyles.scrollView}  automaticallyAdjustKeyboardInsets={true} >
          <FormProvider {...formData}>{renderPageContent()}</FormProvider>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

ProfileEditScreen.displayName = "ProfileEditScreen";
ProfileEditScreen.RouteName = "user-edit" as const;
