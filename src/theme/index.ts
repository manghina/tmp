import { Colors, ThemeManager, Typography } from "react-native-ui-lib";

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

  Typography.loadTypographies({
    regular: {
      fontFamily: "HelveticaNeue",
      fontWeight: "500",
    },
    Title: {
      fontFamily: "HelveticaNeue-CondensedBlack",
      color: Colors.red,
      fontSize: 32,
    },
    link: {
      fontFamily: "HelveticaNeue",
      color: Colors.buttonBlue,
      fontSize: 14,
      fontWeight: "700",
    },
    regular14: {
      fontFamily: "HelveticaNeue",
      color: Colors.defaultColor,
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
      color: Colors.defaultColor,
      fontSize: 16,
      fontWeight: "500",
    },
    white16: {
      fontFamily: "HelveticaNeue",
      color: Colors.whiteText,
      fontSize: 16,
      fontWeight: "500",
    },
    gray12: {
      fontFamily: "HelveticaNeue",
      color: Colors.grayText,
      fontSize: 12,
      fontWeight: "500",
    },
    gray24stepper: {
      fontFamily: "HelveticaNeue-CondensedBlack",
      color: Colors.grayText,
      fontSize: 24,
    },
  });

  ThemeManager.setComponentTheme("Text", {
    regular14: true,
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
