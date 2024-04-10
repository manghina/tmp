import React, { memo } from "react";
import { useBaseTextField } from "./index.hooks";
import { Text, TextField, TextFieldProps, View } from "react-native-ui-lib";
import { styles } from "./styles";

type BaseTextFieldProps = TextFieldProps & {
  focus?: boolean;
  blur?: boolean;
};

export const BaseTextField = memo(
  ({
    ref,
    label,
    enableErrors,
    validationMessage,
    style,
    editable,
    focus,
    blur,
    ...props
  }: BaseTextFieldProps) => {
    const { isFocused, onFocus, onBlur, inputRef } = useBaseTextField({
      focus,
      blur,
    });

    return (
      <View style={styles.fieldContainer}>
        {label && <Text style={styles.label}>{label}</Text>}
        <View>
          <TextField
            editable={editable}
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
