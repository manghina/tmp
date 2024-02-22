import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";

export const styles = StyleSheet.create({
  professionalName: {
    ...textVariants.p1BoldNormal,
  },
  speciality: {
    ...textVariants.p2BoldItalic,
  },
  moreInformations: {
    ...textVariants.p3BoldNormal,
  },
  distance: {
    ...textVariants.p2BoldNormal,
  },
  sectionTitle: {
    ...textVariants.p2MediumNormal,
  },
  informativeContent: {
    ...textVariants.p2BoldItalic,
  },
});