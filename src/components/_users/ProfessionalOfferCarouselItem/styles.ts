import { StyleSheet, Dimensions as DeviceDimensions } from "react-native";
import { dimensionsTokens } from "@app/theme/spacings/tokens";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { colorTokens } from "@app/theme/colors/tokens";
import { textVariants } from "../../../theme/typographies/variants";

const { width } = DeviceDimensions.get("screen");

export const styles = StyleSheet.create({
  cardContainer: {
    width: width,
    paddingHorizontal: dimensionsTokens.paddingMd,
  },
  card: {
    width: "100%",
    padding: dimensionsTokens.paddingXs,
    gap: dimensionsTokens.paddingXs,
    backgroundColor: colorTokens.elevationSurfaceRaised,
    borderRadius: Dimensions.medium.spacing_200,
    borderColor: colorTokens.colorBorder,
    borderWidth: 2,
  },
  doctorGeneralitiesContainer: {
    flexDirection: "row",
    gap: Dimensions.small.spacing_100,
  },
  doctorAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    flexShrink: 0,
    borderWidth: 2,
    borderColor: colorTokens.colorBorder,
  },
  doctorInfoContainer: {},
  doctorNameText: {
    ...textVariants.p1BoldNormal,
    color: colorTokens.colorTextDefault,
  },
  doctorSpecializationText: {
    ...textVariants.p2BoldItalic,
    color: colorTokens.colorTextBrand,
  },
  doctorDistanceText: {
    ...textVariants.p2BoldNormal,
    color: colorTokens.colorTextBrand,
  },
});
