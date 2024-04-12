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
    const { isFocused, onBlur, onFocus, handleChange } =
      useFormGooglePlacesTextField(name);

    return (
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>{props.label}</Text>
        <GooglePlacesAutocomplete
          placeholder={placeholder ?? "Cerca..."}
          onPress={(data, details = null) => {
            console.log(data, details); // check the data and details object
            handleChange(data.description);
          }}
          fetchDetails={true}
          onFail={(error) => console.log(error)}
          onNotFound={() => console.log("no results")}
          query={{
            key: "AIzaSyAIjKhORY1ndCu3Xww0F7t70b29hjyUPg8",
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
          }}
          styles={{
            textInputContainer: [
              styles.field,
              isFocused ? styles.focused : undefined,
            ],
            poweredContainer: styles.poweredByGoogleContainer,
            listView: styles.listView,
            row: styles.listRow,
          }}
        />
      </View>
    );
  },
);
FormGooglePlacesTextField.displayName = "FormGooglePlacesTextField";
