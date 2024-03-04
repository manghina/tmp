import { StyleSheet } from "react-native";
import { textVariants } from "@app/theme/typographies/variants";

export const styles = StyleSheet.create({
  card: {
    width: 325,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "#091E4225",
    shadowColor: "#000",
    shadowOpacity: 0,
    elevation: 0,
  },
  cardFocused: {
    borderColor: "#388BFF",
    shadowOpacity: 0.12,
    elevation: 5,
  },
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