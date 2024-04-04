import React, { Fragment, memo } from "react";
import { useUserProfileEditScreen } from "./index.hooks";
import { SafeAreaView, ScrollView } from "react-native";
import { userProfileEditStyles } from "./styles";
import { Button, Text, TouchableOpacity, View } from "react-native-ui-lib";
import { FormProvider } from "react-hook-form";
import { FormTextField } from "@app/components/_form/FormTextField";
import { FormDateTimePicker } from "@app/components/_form/FormDatePicker";
import { FormNewScreenFilterableSelect } from "@app/components/_form/FormNewScreenFilterableSelect";
import { FormRadioGroup } from "@app/components/_form/FormRadioGroup";
import WarningIcon from "@app/components/WarningIcon";
import { Colors } from "@app/theme/colors/palette";
import { AnimatedProgressBar } from "@app/components/AnimatedProgressBar";
import { BaseTextField } from "@app/components/_baseInputs/BaseTextField";
import SuccessIcon from "@app/components/SuccessIcon";

export const ProfileEditScreen = memo(() => {
  const {
    formData,
    countryOptions,
    phonePrefixOptions,
    triggerProfileEditSubmit,
    submitError,
    isToVerifyPhoneNumber,
    isVerifiedPhoneNumber,
    showPhoneNumberVerificationStep,
    otpCode,
    handleOpenPhoneNumberVerification,
    onOtpKeyPressCallbacks,
    onOtpChangeTextCallbacks,
  } = useUserProfileEditScreen();

  const renderPhoneNumberVerification = () => (
    <View style={userProfileEditStyles.phoneNUmberVerificationContainer}>
      <AnimatedProgressBar value={(1 / 6) * otpCode.length} duration={250} />
      <View padding-20>
        <Text marginB-10 h3>
          Numero di contatto
        </Text>
        <Text marginB-20>
          Lorem ipsum dolor sit amet consectetur. Id facilisis vestibulum metus.
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {new Array(6).fill(0).map((_, index) => (
            <Fragment key={index}>
              <BaseTextField
                id={index.toString()}
                autoFocus={index === 0}
                focus={index === otpCode.length}
                value={otpCode[index]}
                style={{ width: 44 }}
                keyboardType="number-pad"
                maxLength={1}
                onKeyPress={onOtpKeyPressCallbacks[index]}
                onChangeText={onOtpChangeTextCallbacks[index]}
              />
              {index === 2 && <Text>-</Text>}
            </Fragment>
          ))}
        </View>
        <View
          marginT-30
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 30,
          }}
        >
          <Text color="#091E424D">Inserisci codice entro 00:29</Text>
          <TouchableOpacity onPress={handleOpenPhoneNumberVerification}>
            <Text style={{ textDecorationLine: "underline" }}>
              Torna indietro
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

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
        <FormDateTimePicker name="birthDate" label="Data di nascita" />
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
        <FormRadioGroup name="gender" />
        <Text>(Manca il componente radio group)</Text>
        <View>
          <Text style={userProfileEditStyles.phoneNumberLabel}>
            Numero di cellulare
          </Text>
          <View row style={userProfileEditStyles.phoneInputContainer}>
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
              />
            </View>
            <View style={userProfileEditStyles.phoneNumberContainer}>
              <FormTextField
                key="phoneNumber"
                name="phoneNumber"
                trailingAccessory={
                  isToVerifyPhoneNumber ? (
                    <TouchableOpacity
                      onPress={handleOpenPhoneNumberVerification}
                    >
                      <View paddingR-10>
                        <WarningIcon
                          width={24}
                          height={24}
                          color={Colors.Orange[600]}
                        />
                      </View>
                    </TouchableOpacity>
                  ) : isVerifiedPhoneNumber ? (
                    <View paddingR-10>
                      <SuccessIcon
                        width={24}
                        height={24}
                        color={Colors.Green[600]}
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
                    ? {
                        borderBlockColor: Colors.Orange[600],
                        borderLeftColor: Colors.Orange[600],
                        borderRightColor: Colors.Orange[600],
                      }
                    : {}),
                }}
              />
              {isToVerifyPhoneNumber && (
                <TouchableOpacity onPress={handleOpenPhoneNumberVerification}>
                  <View paddingT-5>
                    <Text
                      style={{ textDecorationLine: "underline" }}
                      color={Colors.Orange[600]}
                    >
                      Verifica il numero di telefono
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
      {/* {showPhoneNumberVerificationStep && renderPhoneNumberVerification()} */}
      <View padding-20 paddingT-0>
        {submitError && (
          <Text marginB-20 color="red">
            C'è stato un errore nel salvataggio delle informazioni.
          </Text>
        )}
        <Button label="Salva informazioni" onPress={triggerProfileEditSubmit} />
      </View>
    </View>
  );

  return (
    <>
      <SafeAreaView style={userProfileEditStyles.safeAreaView}>
        <ScrollView style={userProfileEditStyles.scrollView}>
          <FormProvider {...formData}>{renderPageContent()}</FormProvider>
        </ScrollView>
      </SafeAreaView>
    </>
  );
});

ProfileEditScreen.displayName = "ProfileEditScreen";
