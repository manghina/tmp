import { dimensionsTokens } from "../../theme/spacings/tokens";
import { textVariants } from "../../theme/typographies/variants";
import { StyleSheet } from "react-native";
import { Dimensions } from "../../theme/spacings/dimensions";

export const styles = StyleSheet.create({
  bookingListItem: {
    backgroundColor: "#e9f2ff",
    borderRadius: 8,
    flexDirection: "row",
    gap: Dimensions.small.spacing_100,
    padding: dimensionsTokens.paddingXs,
  },
  bookingListItemContent: {
    flex: 1,
  },
  bookingListItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookingListItemTimeLeftText: {
    color: "#A54800",
    ...textVariants.p2MediumNormal,
  },
  bookingListItemTitle: {
    color: "#0C66E4",
    ...textVariants.p1BoldNormal,
  },
  bookingListItemContentText: {
    color: "#172B4D",
    marginTop: 6,
    ...textVariants.p2MediumItalic,
  },
});
