import { StyleSheet } from "react-native";
import { Dimensions } from "@app/theme/spacings/dimensions";
import { textVariants } from "../../theme/typographies/variants";

export const userProfileEditStyles = StyleSheet.create({
  safeAreaView: {
    height: "100%",
    backgroundColor: "#fff",
  },
  container: {
    position: "relative",
  },
  formColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
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
  phoneNUmberVerificationContainer: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
});
