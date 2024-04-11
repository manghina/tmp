import React, { memo } from "react";
import { useBaseTextField } from "./index.hooks";
import { Text, TextField, TextFieldProps, View } from "react-native-ui-lib";
import { styles } from "./styles";

export const BaseTextField = memo(
  ({
    ref,
    label,
    enableErrors,
    validationMessage,
    style,
    editable,
    ...props
  }: TextFieldProps) => {
    const { isFocused, onFocus, onBlur } = useBaseTextField();

    return (
      <View style={styles.fieldContainer}>
        {label && <Text style={styles.label}>{label}</Text>}
        <View>
          <TextField
            editable={editable}
            onFocus={onFocus}
            onBlur={onBlur}
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}

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
