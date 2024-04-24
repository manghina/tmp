import { StyleSheet } from "react-native";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { colorTokens } from "@app/theme/colors/tokens";
import { textVariants } from "@app/theme/typographies/variants";

export const styles = StyleSheet.create({
  userGeneralitiesContainer: {
    flexDirection: "row",
    gap: Dimensions.small.spacing_100,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    flexShrink: 0,
    borderWidth: 2,
    borderColor: colorTokens.colorBorder,
  },
  userNameText: {
    ...textVariants.p1BoldNormal,
    color: colorTokens.colorTextDefault,
  },
  userAge: {
    ...textVariants.p2BoldItalic,
    color: colorTokens.colorTextInformation,
  },
  userIllness: {
    ...textVariants.p2BoldNormal,
    color: colorTokens.colorTextInformation,
  },
});
