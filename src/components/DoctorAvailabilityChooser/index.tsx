import React, { memo } from "react";
import {
  Colors,
  RadioButton,
  RadioGroup,
  Text,
  View,
} from "react-native-ui-lib";

type DoctorAvailabilityChooserProps = {
  availabilityList: Array<availability>;
};

type availability = {
  dateTime: Date;
  bonusCost: number;
};

export const DoctorAvailabilityChooser = memo(
  ({ availabilityList }: DoctorAvailabilityChooserProps) => {
    const formatDay = (date: Date) => {
      const days = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
      return days[date.getDay()];
    };

    const isToday = (dateTime: Date) => {
      const today = new Date();
      return (
        dateTime.getDate() === today.getDate() &&
        dateTime.getMonth() === today.getMonth() &&
        dateTime.getFullYear() === today.getFullYear()
      );
    };

    const formatDate = (dateTime: Date) => {
      const day = formatDay(dateTime);
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      return `${day} ${dateTime.toLocaleDateString("it-IT")}`;
    };

    return (
      <View row={false}>
        <RadioGroup>
          {availabilityList.map((item, index) => {
            return (
              <View
                row
                key={index}
                width={"100%"}
                backgroundColor={Colors.cardGray}
                padding-15
                style={{
                  borderBottomRightRadius:
                    index === availabilityList.length - 1 ? 10.8 : 0,
                  borderBottomLeftRadius:
                    index === availabilityList.length - 1 ? 10.8 : 0,
                  borderTopLeftRadius: index === 0 ? 10.8 : 0,
                  borderTopRightRadius: index === 0 ? 10.8 : 0,
                  justifyContent: "space-between",
                }}
              >
                <View row={false}>
                  <Text regular14Text>
                    {formatDate(item.dateTime)}{" "}
                    {isToday(item.dateTime) && (
                      <Text style={{ fontStyle: "italic" }}>(Oggi)</Text>
                    )}
                  </Text>
                  <Text regular14Text>
                    {item.dateTime.toLocaleTimeString("it-IT", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Text>
                </View>
                <View
                  padding-10
                  backgroundColor={"#9747FF33"}
                  style={{ borderRadius: 90 }}
                >
                  <Text
                    style={{ fontFamily: "HelveticaNeue-Bold" }}
                    color="#9747FF"
                  >
                    +{item.bonusCost}%
                  </Text>
                </View>
                <RadioButton
                  value={index}
                  label={""}
                  color={Colors.defaultColor}
                />
              </View>
            );
          })}
        </RadioGroup>
      </View>
    );
  },
);
