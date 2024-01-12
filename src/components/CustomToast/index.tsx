import { memo } from "react";
import { Incubator, Text, View } from "react-native-ui-lib";
import SuccessIcon from "../SuccessIcon";
import WarningIcon from "../WarningIcon";
import ErrorIcon from "../ErrorIcon";
import InfoIcon from "../InfoIcon";
import { useCustomToast } from "./index.hooks";

const feedbackIconSize = 30;

export const CustomToast = memo(() => {
  const {
    isToastVisible,
    toastMessage,
    backgroundColor,
    color,
    iconColor,
    feedbackType,
  } = useCustomToast();

  const renderIcon = () => {
    switch (feedbackType) {
      case "success":
        return (
          <SuccessIcon
            width={feedbackIconSize}
            height={feedbackIconSize}
            color={iconColor}
          />
        );
      case "warning":
        return (
          <WarningIcon
            width={feedbackIconSize}
            height={feedbackIconSize}
            color={iconColor}
          />
        );
      case "error":
        return (
          <ErrorIcon
            width={feedbackIconSize}
            height={feedbackIconSize}
            color={iconColor}
          />
        );
      case "info":
        return (
          <InfoIcon
            width={feedbackIconSize}
            height={feedbackIconSize}
            color={iconColor}
          />
        );
      default:
        return (
          <InfoIcon
            width={feedbackIconSize}
            height={feedbackIconSize}
            color={color}
          />
        );
    }
  };

  return (
    <Incubator.Toast visible={isToastVisible} position={"top"} zIndex={1000}>
      <View
        style={{
          backgroundColor,
          padding: 10,
          marginHorizontal: 10,
          borderColor: color,
          borderWidth: 1,
          borderRadius: 5,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View style={{ flex: 0 }}>{renderIcon()}</View>
        <View style={{ flex: 1 }}>
          <Text style={{ color }}>{toastMessage}</Text>
        </View>
      </View>
    </Incubator.Toast>
  );
});
