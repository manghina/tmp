import React, { memo } from "react";
import { Colors, Text, View } from "react-native-ui-lib";
import { TouchableWithoutFeedback } from "react-native";
import { useFormSlotSelector } from "./index.hooks";
import FlashSVG from "@assets/icons/flash.svg";
import { styles } from "./styles";

type availability = {
  dateTime: Date;
  cost: number;
};

type FormSlotSelectorProps = {
  availabilityList: Array<availability>;
};

export const FormSlotSelector = memo(
  ({ availabilityList }: FormSlotSelectorProps) => {
    const {
      selectedAvailabilityIndex,
      getColor,
      isToday,
      formatDate,
      handleSelect,
    } = useFormSlotSelector();

    return (
      <View row={false}>
        {availabilityList.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => handleSelect(index)}
            >
              <View
                row
                width={"100%"}
                backgroundColor={
                  index === selectedAvailabilityIndex
                    ? Colors.defaultColor
                    : Colors.cardGray
                }
                padding-15
                style={{
                  borderWidth: 1,
                  borderColor: Colors.defaultColor,
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
                  <Text color={getColor(index)} style={styles.date}>
                    {formatDate(item.dateTime)}{" "}
                    {isToday(item.dateTime) && (
                      <Text
                        color={getColor(index)}
                        style={{ fontStyle: "italic" }}
                      >
                        (oggi)
                      </Text>
                    )}
                  </Text>
                  <Text color={getColor(index)} style={styles.time}>
                    {item.dateTime.toLocaleTimeString("it-IT", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Text>
                </View>
                {isToday(item.dateTime) && (
                  <View style={{ justifyContent: "center"}}>
                    <FlashSVG/>
                  </View>
                )}
                <Text style={[styles.cost, { verticalAlign: "middle", color: getColor(index) }]}>
                  {item.cost.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    );
  },
);
