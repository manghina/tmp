import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";

export const styles = StyleSheet.create({
  professionalName: {
    ...textVariants.p2BoldNormal,
  },
  speciality: {
    ...textVariants.p3BoldItalic,
  },
  distance: {
    ...textVariants.p3BoldNormal,
  },
  sectionTitle: {
    ...textVariants.p3MediumNormal,
  },
  informativeContent: {
    ...textVariants.p3BoldItalic,
  },
  moreInformations: {
    ...textVariants.p3BoldNormal,
  },
  discount: {
    ...textVariants.p3MediumNormal,
  },

});