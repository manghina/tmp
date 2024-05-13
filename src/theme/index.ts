import { Colors, ThemeManager, Typography } from "react-native-ui-lib";
import {  subscribeToAppearanceChanges, colorTokens } from "./colors/tokens";
import { textVariants } from "./typographies/variants";
import { Appearance,ColorSchemeName } from "react-native";


const updateComponentThemes = (colorScheme: ColorSchemeName) => {
  // Update component themes based on color scheme
  ThemeManager.setComponentTheme("Text", {
    color: colorTokens.colorTextDefault,
  });

  ThemeManager.setComponentTheme("TextField", {
    regular16: true,
    selectionColor: colorTokens.colorBorderFocused,
  });

  ThemeManager.setComponentTheme("Button", (props: any, context: any) => {
    return {
      color: Colors.red10,
      borderRadius: 12,
      labelStyle: {
        color: props.disabled
          ? colorTokens.colorTextAccentGray
          : props.GrayButton
          ? colorTokens.colorTextDefault
          : colorTokens.colorTextAlternativeDefault,
        fontWeight: "500",
        fontSize: 16,
        fontFamily: "HelveticaNeue",
      },
      backgroundColor: (() => {
        if (props.GrayButton) {
          return colorTokens.colorBackgroundDisabled;
        } else if (props.whiteTransparentButton) {
          return Colors.transparent; // Set background color to transparent
        }
       
      })(),
      outlineWidth: props.whiteTransparentButton ? 2 : 0,
      outlineColor: colorTokens.colorTextAlternativeDefault,
    };
  });
};


export const initTheme = () => {
  // Load typographies
  Typography.loadTypographies({
    h1: { ...textVariants.h1CondensedBlackNormal },
    h2: { ...textVariants.h2CondensedBlackNormal },
    h3: { ...textVariants.h3CondensedBlackNormal },
    h4: { ...textVariants.h4CondensedBlackNormal },
    h5: { ...textVariants.h5CondensedBlackNormal },
    h6: { ...textVariants.h6CondensedBlackNormal },
  });

  // Call the subscription function to start listening to appearance changes
  subscribeToAppearanceChanges();
  updateComponentThemes(Appearance.getColorScheme());
};
