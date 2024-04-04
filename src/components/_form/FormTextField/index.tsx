import React, { memo } from "react";
import { useFormTextField } from "./index.hooks";
import { Button, Colors, TextFieldProps, View } from "react-native-ui-lib";
import { styles } from "./styles";
import VisibilityIcon from "@app/components/SvgIcons/VisibilityIcon";
import VisibilityOffIcon from "@app/components/SvgIcons/VisibilityOffIcon";
import { BaseTextField } from "@app/components/_baseInputs/BaseTextField";

export type FormTextFieldProps = {
  name: string;
  type?: "text" | "password";
  trailingAccessory?: TextFieldProps["trailingAccessory"];
  disabled: boolean;
} & TextFieldProps;

export const FormTextField = memo(
  ({
    name,
    type = "text",
    trailingAccessory,
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
              color={Colors.white}
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
