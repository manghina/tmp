import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";

export const styles = StyleSheet.create({
  date: {
    ...textVariants.p2BoldNormal,
  },
  time: {
    ...textVariants.p2MediumNormal,
  },
  cost: {
    ...textVariants.p2BoldNormal,
  },

});