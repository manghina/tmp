import { FC, memo } from "react";
import { styles } from "./styles";
import { Text, View } from "react-native-ui-lib";
import ChatIcon from "../SvgIcons/ChatIcon";

type BookingItemProps = {
  bookingType: "scheduled" | "past" | "expiring" | "expired" | "review";
  title: string;
  bookingText: string;
  notes?: string;
};

export const BookingItem: FC<BookingItemProps> = memo(
  ({ bookingType, title, bookingText, notes }: BookingItemProps) => {
    return (
      <View style={styles.bookingListItem}>
        <View>
          <ChatIcon color={"#1D7AFC"} />
        </View>
        <View style={styles.bookingListItemContent}>
          <View style={styles.bookingListItemHeader}>
            <Text style={styles.bookingListItemTitle}>{title}</Text>
            {notes && (
              <Text style={styles.bookingListItemTimeLeftText}>{notes}</Text>
            )}
          </View>
          <Text style={styles.bookingListItemContentText}>{bookingText}</Text>
        </View>
      </View>
    );
  },
);
