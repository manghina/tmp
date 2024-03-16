import { StyleSheet } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { textVariants } from "../../theme/typographies/variants";
import { colorTokens } from "../../theme/colors/tokens";

export const styles = StyleSheet.create({
  pageContainer: {
    height: "100%",
    backgroundColor: colorTokens.elevationSurface,
  },
  stepContent: {
    display: "flex",
    flexDirection: "column",
    gap: dimensionsTokens.paddingXs,
    padding: dimensionsTokens.paddingSm,
  },
  fieldsColumn: {
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
  stepperControlsContainer: {
    display: "flex",
    alignItems: "center",
    gap: Dimensions.small.spacing_100,
    marginVertical: Dimensions.small.spacing_100,
  },
  callToAction: {
    width: "100%",
  },
});
