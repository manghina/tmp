import React, { memo } from "react";
import { useBaseTextField } from "./index.hooks";
import { Text, TextField, TextFieldProps, View } from "react-native-ui-lib";
import { styles } from "./styles";
import { TextInput } from "react-native";

type BaseTextFieldProps = TextFieldProps & {
  focus?: boolean;
  blur?: boolean;
  subText?: string;
  inputRef?: React.MutableRefObject<TextInput>;
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
    subText,
    inputRef: _inputRef,
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
            ref={(ref: TextInput) =>
              _inputRef ? (_inputRef.current = ref) : (inputRef.current = ref)
            }
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
            style={[
              styles.input,
              subText ? styles.inputWithSubText : undefined,
            ]}
            {...props}
          />
          {subText && (
            <View style={styles.subTextContainer}>
              <Text style={styles.subText}>{subText}</Text>
            </View>
          )}
          {enableErrors && (
            <Text style={styles.errorText}>{validationMessage}</Text>
          )}
        </View>
      </View>
    );
  },
);
BaseTextField.displayName = "BaseTextField";
