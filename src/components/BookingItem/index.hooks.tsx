import { styles } from "./styles";
import CalendarCheckIcon from "../SvgIcons/CalendarCheckIcon";
import React from "react";
import ChatIcon from "../SvgIcons/ChatIcon";
import ClockIcon from "../SvgIcons/ClockIcon";
import ReviewIcon from "../SvgIcons/ReviewIcon";

export const useBookingItem = () => {
  const getItemStyle = (bookingType: string) => {
    switch (bookingType) {
      case "scheduled":
        return styles.bookingListItemScheduled;
      case "past":
        return styles.bookingListItemPast;
      case "expiring":
        return styles.bookingListItemExpiring;
      case "expired":
        return styles.bookingListItemExpired;
      case "review":
        return styles.bookingListItemReview;
      default:
        return styles.bookingListItemScheduled;
    }
  };

  const getItemIcon = (bookingType: string) => {
    switch (bookingType) {
      case "scheduled":
        return <ChatIcon color={"#1D7AFC"} />;
      case "past":
        return <CalendarCheckIcon color={"#22A06B"} />;
      case "expiring":
        return <ClockIcon color={"#E56910"} />;
      case "expired":
        return <ChatIcon color={"#44546F"} />;
      case "review":
        return <ReviewIcon color={"#E56910"} />;
      default:
        return <ChatIcon color={"#1D7AFC"} />;
    }
  };

  const getItemTitleStyle = (bookingType: string) => {
    switch (bookingType) {
      case "scheduled":
        return styles.bookingListItemTitleScheduled;
      case "past":
        return styles.bookingListItemTitlePast;
      case "expiring":
        return styles.bookingListItemTitleExpiring;
      case "expired":
        return styles.bookingListItemTitleExpired;
      case "review":
        return styles.bookingListItemTitleReview;
      default:
        return styles.bookingListItemTitleScheduled;
    }
  };

  const getItemBookingTextStyle = (bookingType: string) => {
    switch (bookingType) {
      case "scheduled":
        return styles.bookingListItemBookingTextScheduled;
      case "past":
        return styles.bookingListItemBookingTextPast;
      case "expiring":
        return styles.bookingListItemBookingTextExpiring;
      case "expired":
        return styles.bookingListItemBookingTextExpired;
      case "review":
        return styles.bookingListItemBookingTextReview;
      default:
        return styles.bookingListItemBookingTextScheduled;
    }
  };

  return {
    getItemStyle,
    getItemIcon,
    getItemTitleStyle,
    getItemBookingTextStyle,
  };
};
