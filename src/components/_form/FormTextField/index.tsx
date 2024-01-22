import React, { memo } from "react";
import { useFormTextField } from "./index.hooks";
import {
  Assets,
  Button,
  Colors,
  Text,
  TextField,
  TextFieldProps,
} from "react-native-ui-lib";

const TextInputStyle: TextFieldProps["style"] = {
  paddingTop: 16,
  paddingLeft: 16,
  paddingRight: 16,
  paddingBottom: 16,
  borderWidth: 1.5,
  borderRadius: 12,
  borderColor: "black",
};

export type FormTextFieldProps = {
  name: string;
  label?: string;
  type?: "text" | "password";
} & Omit<TextFieldProps, "style">;

export const FormTextField = memo(
  ({ name, label, type = "text", ...props }: FormTextFieldProps) => {
    const { value, handleChange, error, hideText, onVisibilityIconTapped } =
      useFormTextField(name, type);

    return (
      <TextField
        marginT-8
        grey10
        value={value}
        label={label}
        onChangeText={handleChange}
        secureTextEntry={hideText}
        enableErrors={!!error}
        validationMessage={error ?? undefined}
        autoCapitalize="none"
        autoCorrect={false}
        style={{
          ...TextInputStyle,
        }}
        trailingAccessory={
          type === "password" && (
            <Button
              round
              onPress={onVisibilityIconTapped}
              iconSource={
                hideText ? Assets.icons.visibility : Assets.icons.visibilityOff
              }
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginLeft: 5,
              }}
              color={Colors.white}
              iconProps={{
                width: 30,
                height: 30,
              }}
            />
          )
        }
        {...(props as any)}
      />
    );
  },
);
FormTextField.displayName = "FormTextField";