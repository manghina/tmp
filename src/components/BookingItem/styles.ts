import { dimensionsTokens } from "../../theme/spacings/tokens";
import { textVariants } from "../../theme/typographies/variants";
import { StyleSheet } from "react-native";
import { Dimensions } from "../../theme/spacings/dimensions";

export const styles = StyleSheet.create({
  bookingListItemScheduled: {
    backgroundColor: "#E9F2FF",
    borderWidth: 2,
    borderColor: "#E9F2FF",
    borderRadius: 8,
    flexDirection: "row",
    gap: Dimensions.small.spacing_100,
    padding: dimensionsTokens.paddingXs,
  },
  bookingListItemPast: {
    backgroundColor: "#F6F7F8",
    borderRadius: 8,
    flexDirection: "row",
    gap: Dimensions.small.spacing_100,
    padding: dimensionsTokens.paddingXs,
  },
  bookingListItemExpiring: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#E56910",
    borderRadius: 8,
    flexDirection: "row",
    gap: Dimensions.small.spacing_100,
    padding: dimensionsTokens.paddingXs,
  },
  bookingListItemExpired: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "rgba(68,84,111,0.25)",
    borderRadius: 8,
    flexDirection: "row",
    gap: Dimensions.small.spacing_100,
    padding: dimensionsTokens.paddingXs,
  },
  bookingListItemReview: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#E56910",
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
  bookingListItemNotesText: {
    color: "#A54800",
    ...textVariants.p2MediumNormal,
  },
  bookingListItemTitleScheduled: {
    color: "#0C66E4",
    ...textVariants.p1BoldNormal,
  },
  bookingListItemTitlePast: {
    color: "#172B4D",
    ...textVariants.p1BoldNormal,
  },
  bookingListItemTitleExpiring: {
    color: "#A54800",
    ...textVariants.p1BoldNormal,
  },
  bookingListItemTitleExpired: {
    color: "#172B4D",
    ...textVariants.p1BoldNormal,
  },
  bookingListItemTitleReview: {
    color: "#A54800",
    ...textVariants.p1BoldNormal,
  },

  bookingListItemBookingTextScheduled: {
    color: "#172B4D",
    marginTop: 6,
    ...textVariants.p2MediumItalic,
  },
  bookingListItemBookingTextPast: {
    color: "#44546F",
    marginTop: 6,
    ...textVariants.p2MediumItalic,
  },
  bookingListItemBookingTextExpiring: {
    color: "#44546F",
    marginTop: 6,
    ...textVariants.p2MediumItalic,
  },
  bookingListItemBookingTextExpired: {
    color: "#172B4D",
    marginTop: 6,
    ...textVariants.p2MediumItalic,
  },
  bookingListItemBookingTextReview: {
    color: "#626F86",
    marginTop: 6,
    ...textVariants.p2MediumItalic,
  },
});
