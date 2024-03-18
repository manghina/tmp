import { Colors, ThemeManager } from "react-native-ui-lib";
import { colorTokens } from "./colors/tokens";

export const initTheme = () => {
  Colors.loadColors({
    blackText: "#181818",
    defaultColor: "#002A38",
    grayText: "#ABB0BC",
    whiteText: "#F6F6F6",
    whiteBackground: "#FEFEFE",
    cardGray: "#F2F2F2",
    buttonGray: "#E5E6E6",
    loadingBlue: "#427BEA",
    buttonBlue: "#3C77E8",
    disabledBlue: "#6784BD",
  });

  ThemeManager.setComponentTheme("Text", {
    color: colorTokens.colorText,
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
