import { FC, memo } from "react";
import { styles } from "./styles";
import { Text, View } from "react-native-ui-lib";
import { useBookingItem } from "./index.hooks";

type BookingItemProps = {
  bookingType: "scheduled" | "past" | "expiring" | "expired" | "review";
  title: string;
  bookingText: string;
  notes?: string;
};

export const BookingItem: FC<BookingItemProps> = memo(
  ({ bookingType, title, bookingText, notes }: BookingItemProps) => {
    const {
      getItemStyle,
      getItemIcon,
      getItemTitleStyle,
      getItemBookingTextStyle,
    } = useBookingItem();

    return (
      <View style={getItemStyle(bookingType)}>
        <View>{getItemIcon(bookingType)}</View>
        <View style={styles.bookingListItemContent}>
          <View style={styles.bookingListItemHeader}>
            <Text style={getItemTitleStyle(bookingType)}>{title}</Text>
            {notes && (
              <Text style={styles.bookingListItemNotesText}>{notes}</Text>
            )}
          </View>
          <Text style={getItemBookingTextStyle(bookingType)}>
            {bookingText}
          </Text>
        </View>
      </View>
    );
  },
);
