import { StyleSheet } from "react-native";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { colorTokens } from "@app/theme/colors/tokens";
import { textVariants } from "@app/theme/typographies/variants";

export const styles = StyleSheet.create({
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
