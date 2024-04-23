import React, { memo } from "react";
import { useFormTextField } from "./index.hooks";
import { Button, TextFieldProps, View } from "react-native-ui-lib";
import { styles } from "./styles";
import VisibilityIcon from "@app/components/SvgIcons/VisibilityIcon";
import VisibilityOffIcon from "@app/components/SvgIcons/VisibilityOffIcon";
import { BaseTextField } from "@app/components/_baseInputs/BaseTextField";

export type FormTextFieldProps = {
  name: string;
  type?: "text" | "password";
  trailingAccessory?: TextFieldProps["trailingAccessory"];
  textContentType?: string;
  autoCorrect?: boolean;
  keyboardType?: string;
  disabled?: boolean;
} & TextFieldProps;

export const FormTextField = memo(
  ({
    name,
    type = "text",
    trailingAccessory,
    textContentType,
    autoCorrect,
    keyboardType,
    disabled = false,
    ...props
  }: FormTextFieldProps) => {
    const {
      isFocused,
      hideText,
      value,
      error,
      handleChange,
      onVisibilityIconTapped,
    } = useFormTextField(name, type);

    return (
      <BaseTextField
        editable={!disabled}
        value={value !== undefined && value !== null ? `${value}` : undefined}
        onChangeText={handleChange}
        secureTextEntry={hideText}
        enableErrors={Boolean(error)}
        validationMessage={error}
        textContentType={textContentType}
        autoCorrect= {autoCorrect}
        keyboardType= {keyboardType}
        trailingAccessory={
          trailingAccessory ||
          (type === "password" && (
            <Button
              round
              onPress={onVisibilityIconTapped}
              style={[
                styles.showHidePasswordButton,
                isFocused ? { opacity: 1 } : undefined,
              ]}
            >
              <View style={styles.showHidePasswordIcon}>
                {hideText ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </View>
            </Button>
          ))
        }
        {...(props as any)}
      />
    );
  },
);
FormTextField.displayName = "FormTextField";
