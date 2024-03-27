import { Colors, ThemeManager, Typography } from "react-native-ui-lib";
import { colorTokens } from "./colors/tokens";
import { textVariants } from "./typographies/variants";

export const initTheme = () => {
  Colors.loadColors({
    defaultColor: "#002A38", // ???
    whiteText: "#F6F6F6",
    whiteBackground: "#FEFEFE",
    cardGray: "#F2F2F2",
    buttonGray: "#E5E6E6",
    loadingBlue: "#427BEA",
    buttonBlue: "#3C77E8",
    disabledBlue: "#6784BD",
  });

  Typography.loadTypographies({
    h1: { ...textVariants.h1CondensedBlackNormal },
    h2: { ...textVariants.h2CondensedBlackNormal },
    h3: { ...textVariants.h3CondensedBlackNormal },
    h4: { ...textVariants.h4CondensedBlackNormal },
    h5: { ...textVariants.h5CondensedBlackNormal },
    h6: { ...textVariants.h6CondensedBlackNormal },
  });

  ThemeManager.setComponentTheme("Text", {
    color: colorTokens.colorTextDefault,
  });

  ThemeManager.setComponentTheme("TextField", {
    regular16: true,
    selectionColor: Colors.buttonBlue,
  });

  ThemeManager.setComponentTheme("Button", (props: any, context: any) => {
    return {
      color: Colors.red10,
      borderRadius: 12,
      labelStyle: {
        color: props.disabled
          ? Colors.grayText
          : props.GrayButton
            ? Colors.blackText
            : Colors.whiteText,
        fontWeight: "500",
        fontSize: 16,
        fontFamily: "HelveticaNeue",
      },
      backgroundColor: (() => {
        if (props.GrayButton) {
          return Colors.buttonGray;
        } else if (props.whiteTransparentButton) {
          return Colors.transparent;
        }
        return Colors.buttonBlue;
      })(),
      outlineWidth: props.whiteTransparentButton ? 2 : 0,
      outlineColor: Colors.whiteText,
    };
  });
};
