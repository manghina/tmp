import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";

export const styles = StyleSheet.create({
  title: {
    ...textVariants.h3CondensedBlackNormal,
  },
  info: {
    ...textVariants.p1MediumNormal,
  },
  sectionTitle: {
    ...textVariants.p2MediumNormal,
  },
});
