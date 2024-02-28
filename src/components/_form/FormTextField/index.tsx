import React, { memo } from "react";
import { useFormTextField } from "./index.hooks";
import {
  Assets,
  Button,
  Colors,
  Text,
  TextField,
  TextFieldProps,
  View,
} from "react-native-ui-lib";
import { styles } from "./styles";
import VisibilityIcon from "@app/components/SvgIcons/VisibilityIcon";
import VisibilityOffIcon from "@app/components/SvgIcons/VisibilityOffIcon";

export type FormTextFieldProps = {
  name: string;
  label?: string;
  type?: "text" | "password";
} & TextFieldProps;

export const FormTextField = memo(
  ({ name, label, type = "text", ...props }: FormTextFieldProps) => {
    const {
      isFocused,
      hideText,
      value,
      handleChange,
      error,
      onFocus,
      onBlur,
      onVisibilityIconTapped,
    } = useFormTextField(name, type);

    return (
      <View style={styles.fieldContainer}>
        {label && <Text style={styles.label}>{label}</Text>}
        <View>
          <TextField
            value={value}
            onChangeText={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            secureTextEntry={hideText}
            autoCapitalize="none"
            autoCorrect={false}
            containerStyle={[
              styles.field,
              props.style,
              isFocused ? styles.focused : undefined,
              Boolean(error) ? styles.error : undefined,
            ]}
            style={styles.input}
            trailingAccessory={
              type === "password" && (
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
              )
            }
            {...(props as any)}
          />
          {Boolean(error) && <Text style={styles.errorText}>{error}</Text>}
        </View>
      </View>
    );
  },
);
FormTextField.displayName = "FormTextField";
