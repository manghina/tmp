import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";

export const styles = StyleSheet.create({
  loadingIndicatorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  profileImageTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImageUserInitialsContainer: {
    backgroundColor: colorTokens.colorBackgroundAccentMagentaSubtle,
  },
  profileImageProfessionalInitialsContainer: {
    backgroundColor: colorTokens.colorBackgroundAccentBlueSubtle,
  },
  profileImageText: {
    color: colorTokens.colorTextInverse,
    textAlign: "center",
  },
  profileImageTextSmall: {
    ...textVariants.p1MediumNormal,
  },
  profileImageTextLarge: {
    ...textVariants.h1MediumNormal,
  },
});
