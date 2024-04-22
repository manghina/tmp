import React, { memo } from "react";
import { useFormGooglePlacesTextField } from "./index.hooks";
import { Text, TextFieldProps, View } from "react-native-ui-lib";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { styles } from "./styles";

export type FormGooglePlacesTextFieldProps = {
  name: string;
} & TextFieldProps;

export const FormGooglePlacesTextField = memo(
  ({ name, placeholder, ...props }: FormGooglePlacesTextFieldProps) => {
    const { isFocused, onBlur, onFocus, handleChange, error, handleSelect } =
      useFormGooglePlacesTextField(name);

    return (
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>{props.label}</Text>
        <GooglePlacesAutocomplete
          placeholder={placeholder ?? "Cerca..."}
          onPress={(data) => {
            handleSelect(data.description);
          }}
          fetchDetails={true}
          query={{
            key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
            components: "country:it",
            language: "it",
          }}
          disableScroll={true}
          listEmptyComponent={
            <View style={styles.noResultsContainer}>
              <Text style={styles.noResultsText}>
                Nessun risultato trovato.
              </Text>
            </View>
          }
          textInputProps={{
            onFocus,
            onBlur,
            style: styles.input,
            onChange: (e) => handleChange(e.nativeEvent.text),
          }}
          styles={{
            textInputContainer: [
              styles.field,
              isFocused ? styles.focused : undefined,
              Boolean(error) ? styles.fieldWithError : undefined,
            ],
            poweredContainer: styles.poweredByGoogleContainer,
            listView: styles.listView,
            row: styles.listRow,
          }}
        />
        {Boolean(error) && <Text style={styles.textError}>{error}</Text>}
      </View>
    );
  },
);
FormGooglePlacesTextField.displayName = "FormGooglePlacesTextField";
