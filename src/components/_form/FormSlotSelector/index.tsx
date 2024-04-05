import React, { memo } from "react";
import { Colors, RadioButton, Text, View } from "react-native-ui-lib";
import { TouchableWithoutFeedback } from "react-native";
import { useFormSlotSelector } from "./index.hooks";
import FlashSVG from "@assets/icons/flash.svg";
import { styles } from "./styles";
import { colorTokens } from "../../../theme/colors/tokens";

type availability = {
  dateTime: Date;
  cost: number;
};

type FormSlotSelectorProps = {
  availabilityList: Array<availability>;
};

export const FormSlotSelector = memo(
  ({ availabilityList }: FormSlotSelectorProps) => {
    const { selectedAvailabilityIndex, isToday, formatDate, handleSelect } =
      useFormSlotSelector();

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
                marginB-5={
                  index !== availabilityList.length - 1 ? true : undefined
                }
                backgroundColor={
                  index === selectedAvailabilityIndex ? "#E9F2FF" : Colors.white
                }
                padding-15
                style={{
                  borderWidth: 1.5,
                  borderColor:
                    index === selectedAvailabilityIndex
                      ? "#0C66E4"
                      : "#091E4225",
                  borderRadius: 8,
                  justifyContent: "space-between",
                }}
              >
                <RadioButton
                  onPress={() => handleSelect(index)}
                  label={""}
                  selected={selectedAvailabilityIndex == index}
                  color={
                    index === selectedAvailabilityIndex
                      ? "#0C66E4"
                      : "#091E4225"
                  }
                />
                <View row={false} flex left marginL-8>
                  <Text
                    color={colorTokens.colorTextDefault}
                    style={styles.date}
                  >
                    {formatDate(item.dateTime)}{" "}
                    {isToday(item.dateTime) && (
                      <Text
                        color={colorTokens.colorTextDefault}
                        style={{ fontStyle: "italic" }}
                      >
                        (oggi)
                      </Text>
                    )}
                  </Text>
                  <Text
                    color={colorTokens.colorTextDefault}
                    style={styles.time}
                  >
                    {item.dateTime.toLocaleTimeString("it-IT", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Text>
                </View>
                {isToday(item.dateTime) && (
                  <View style={{ justifyContent: "center" }}>
                    <FlashSVG />
                  </View>
                )}
                <Text
                  style={[
                    styles.cost,
                    {
                      verticalAlign: "middle",
                      color: colorTokens.colorTextDefault,
                    },
                  ]}
                >
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
