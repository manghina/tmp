import React, { memo } from "react";
import { useForm } from "react-hook-form";
import { Colors, RadioButton, Text, View, Button } from "react-native-ui-lib";
import { TouchableWithoutFeedback } from "react-native";

type DoctorAvailabilityChooserProps = {
  availabilityList: Array<availability>;
};

type availability = {
  dateTime: Date;
  bonusCost: number;
};

export const DoctorAvailabilityChooser = memo(
  ({ availabilityList }: DoctorAvailabilityChooserProps) => {
    const { register, handleSubmit, setValue, watch } = useForm();
    const selectedAvailabilityIndex = watch("selectedAvailability");

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
      return `${day} ${dateTime.toLocaleDateString("it-IT")}`;
    };

    const handleSelect = (index: number) => {
      setValue("selectedAvailability", index);
    };

    return (
      <View row={false}>
        {availabilityList.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => {
                setValue("selectedAvailability", index);
              }}
            >
              <View
                row
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
                  onPress={() => handleSelect(index)}
                  label={""}
                  selected={selectedAvailabilityIndex == index}
                  color={Colors.defaultColor}
                />
              </View>
            </TouchableWithoutFeedback>
          );
        })}

        <Button
          label="Log for debug"
          onPress={() =>
            console.log(
              "Selected Item:",
              availabilityList[selectedAvailabilityIndex],
            )
          }
          disabled={selectedAvailabilityIndex === undefined}
        />
      </View>
    );
  },
);
