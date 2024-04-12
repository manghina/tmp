import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { textVariants } from "../../theme/typographies/variants";
import { colorTokens } from "../../theme/colors/tokens";

export const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: colorTokens.elevationSurface,
    height: "100%",
  },
  scrollView: {
    height: "100%",
  },
  stepContent: {
    gap: dimensionsTokens.paddingXs,
    padding: dimensionsTokens.paddingSm,
  },
  fieldsColumn: {
    flexDirection: "column",
    gap: dimensionsTokens.paddingXs,
  },
  phoneNumberLabel: {
    ...textVariants.p2MediumNormal,
    marginBottom: Dimensions.small.spacing_100,
  },
  phoneInputContainer: { width: "100%" },
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
  stepperControlsContainer: {
    alignItems: "center",
    gap: dimensionsTokens.padding3Xs,
    paddingHorizontal: dimensionsTokens.paddingSm,
    paddingBottom: dimensionsTokens.paddingMd,
  },
  callToAction: {
    width: "100%",
  },
});
