import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { textVariants } from "../../theme/typographies/variants";
import { colorTokens } from "../../theme/colors/tokens";

export const styles = StyleSheet.create({
  pageContainer: {
    height: "100%",
    paddingTop: Dimensions.large.spacing_500,
    backgroundColor: colorTokens.elevationSurface,
    paddingHorizontal: dimensionsTokens.paddingXs,
  },
  patientPageContainer: {
    marginTop: dimensionsTokens.paddingMd,
    marginBottom: dimensionsTokens.paddingXs,
  },
  patientCardContainer: {
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: colorTokens.colorBorder,
    padding: dimensionsTokens.paddingXs,
  },
  profilePic: {
    width: 48.6,
    height: 48.6,
    marginRight: 10,
    borderRadius: 50,
  },
  requestPageContainer: {
    marginTop: dimensionsTokens.paddingXs,
  },
  requestContainer: {
    borderRadius: 8,
    padding: dimensionsTokens.paddingXs,
    backgroundColor: colorTokens.colorBackgroundNeutral,
  },
  ButtonsSection: {
    alignItems: "center",
    gap: Dimensions.small.spacing_100,
  },
  buttonGray: {
    width: "100%",
    backgroundColor: colorTokens.colorBackgroundNeutral,
    color: colorTokens.colorText,
  },
  buttonRed: {
    width: "100%",
    backgroundColor: colorTokens.colorBackgroundDangerBold,
    color: colorTokens.colorTextInverse,
  },
  acceptedRequest: {},
  availabilityBox: {
    backgroundColor: colorTokens.colorBackgroundNeutral,
    padding: Dimensions.small.spacing_100,
    marginTop: dimensionsTokens.paddingXs,
  },
  pageTitleText: {
    ...textVariants.h3CondensedBlackNormal,
  },
  pSubtleText: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  pText: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorText,
  },
  patientName: {
    ...textVariants.p1CondensedBoldNormal,
  },
  patientAge: {
    ...textVariants.p2BoldItalic,
    color: colorTokens.colorTextInformation,
  },
  patientIllness: {
    ...textVariants.p2BoldNormal,
    color: colorTokens.colorTextInformation,
  },
  requestText: {
    ...textVariants.p2MediumItalic,
    color: colorTokens.colorText,
  },
  acceptedTitle: {
    ...textVariants.h6CondensedBlackNormal,
    color: colorTokens.colorText,
  },
  acceptedSubtitle: {
    ...textVariants.p1MediumNormal,
    color: colorTokens.colorTextSubtle,
  },
  availabilityText: {
    ...textVariants.p2MediumNormal,
    color: colorTokens.colorText,
  },
});
