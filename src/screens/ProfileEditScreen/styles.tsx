import { StyleSheet } from "react-native";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { textVariants } from "../../theme/typographies/variants";
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
  phoneNUmberVerificationContainer: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
});
