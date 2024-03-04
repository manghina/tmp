import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";

export const styles = StyleSheet.create({
  date: {
    ...textVariants.p1BoldNormal,
  },
  time: {
    ...textVariants.p1MediumNormal,
  },
  cost: {
    ...textVariants.p1BoldNormal,
  },

});