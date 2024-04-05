import { StyleSheet } from "react-native";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { textVariants } from "@app/theme/typographies/variants";
import { colorTokens } from "@app/theme/colors/tokens";
import { dimensionsTokens } from "@app/theme/spacings/tokens";

export const userProfileEditStyles = StyleSheet.create({
  safeAreaView: {
    height: "100%",
    backgroundColor: colorTokens.elevationSurface,
  },
  scrollView: {
    height: "100%",
  },
  container: {
    position: "relative",
    padding: dimensionsTokens.paddingXs,
    gap: dimensionsTokens.paddingMd,
  },
  headingContainer: {
    gap: dimensionsTokens.padding4Xs,
  },
  title: {
    ...textVariants.h3CondensedBlackNormal,
  },
  subTitle: {
    ...textVariants.p1MediumNormal,
  },
  formColumn: {
    display: "flex",
    flexDirection: "column",
    gap: dimensionsTokens.paddingXs,
  },
  phoneNumberLabelContainer: {
    marginBottom: Dimensions.small.spacing_100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  phoneNumberLabel: {
    ...textVariants.p2MediumNormal,
  },
  phoneNumberVerifyText: {
    ...textVariants.p2BoldItalic,
    color: colorTokens.colorTextWarning,
  },
  phoneInputContainer: {
    width: "100%",
    flexDirection: "row",
  },
  phonePrefixContainer: { width: "25%" },
  phonePrefix: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 0,
  },
  phoneNumberContainer: {
    width: "75%",
  },
  phoneNumber: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  phoneNumberToVerify: {
    borderBlockColor: colorTokens.colorBorderWarning,
    borderLeftColor: colorTokens.colorBorderWarning,
    borderRightColor: colorTokens.colorBorderWarning,
  },
  iconContainer: {
    paddingHorizontal: dimensionsTokens.paddingXs,
  },
  warningIcon: {
    color: colorTokens.colorIconWarning,
  },
  successIcon: {
    color: colorTokens.colorIconSuccess,
  },
});
