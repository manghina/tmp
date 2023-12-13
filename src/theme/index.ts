import { Colors, ThemeManager, Typography } from "react-native-ui-lib";

export const initTheme = () => {
  Colors.loadColors({
    blackText: "#181818",
    defaultText: "#002A38",
    grayText: "#ABB0BC",
    whiteText: "#F6F6F6",
    buttonGray: "#E5E6E6",
    loadingBlue: "#427BEA",
    buttonBlue: "#3C77E8",
    disabledBlue: "#6784BD",
  });

  Typography.loadTypographies({
    regular: {
      fontFamily: "HelveticaNeue",
      fontWeight: "500",
    },
    Title: {
      fontFamily: "HelveticaNeue",
      color: Colors.blackText,
      fontSize: 24,
      fontWeight: "900",
    },
    regular14: {
      fontFamily: "HelveticaNeue",
      color: Colors.defaultText,
      fontSize: 14,
      fontWeight: "500",
    },
    regular16Text: {
      fontFamily: "HelveticaNeue",
      fontSize: 16,
      fontWeight: "500",
    },
    regular16: {
      fontFamily: "HelveticaNeue",
      color: Colors.defaultText,
      fontSize: 16,
      fontWeight: "500",
    },
    white16: {
      fontFamily: "HelveticaNeue",
      color: Colors.whiteText,
      fontSize: 16,
      fontWeight: "500",
    },
  });

  ThemeManager.setComponentTheme("Text", {
    regular14: true,
  });

  ThemeManager.setComponentTheme("TextField", {
    regular16: true,
  });

  ThemeManager.setComponentTheme("Button", {
    fontFamily: "HelveticaNeue",
    color: Colors.whiteText,
    fontSize: 16,
    fontWeight: "500",
    backgroundColor: Colors.buttonBlue,
  });

  ThemeManager.setComponentTheme("Button", (props: any, context: any) => {
    return {
      color: Colors.red10,
      borderRadius: 12,
      labelStyle: {
        color: props.grayButton ? Colors.blackText : Colors.whiteText,
        fontWeight: "500",
        fontSize: 16,
        fontFamily: "HelveticaNeue",
      },
      backgroundColor: (() => {
        if (props.grayButton) {
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
