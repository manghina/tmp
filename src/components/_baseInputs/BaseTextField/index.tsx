import React, { memo, useEffect, useRef } from "react";
import { useBaseTextField } from "./index.hooks";
import {
  Text,
  TextField,
  TextFieldProps,
  TextFieldRef,
  View,
} from "react-native-ui-lib";
import { styles } from "./styles";
import { TextInput } from "react-native";

type BaseTextFieldProps = TextFieldProps & {
  focus?: boolean;
};

export const BaseTextField = memo(
  ({
    ref,
    label,
    enableErrors,
    validationMessage,
    style,
    focus,
    ...props
  }: BaseTextFieldProps) => {
    const { isFocused, onFocus, onBlur, inputRef, handleFocus } =
      useBaseTextField();

    if (focus) {
      handleFocus();
    }

    return (
      <View style={styles.fieldContainer}>
        {label && <Text style={styles.label}>{label}</Text>}
        <View>
          <TextField
            ref={(ref: any) => (inputRef.current = ref)}
            onFocus={onFocus}
            onBlur={onBlur}
            autoCapitalize="none"
            autoCorrect={false}
            containerStyle={[
              styles.field,
              style,
              isFocused ? styles.focused : undefined,
              enableErrors ? styles.error : undefined,
            ]}
            style={styles.input}
            {...props}
          />
          {enableErrors && (
            <Text style={styles.errorText}>{validationMessage}</Text>
          )}
        </View>
      </View>
    );
  },
);
BaseTextField.displayName = "BaseTextField";
