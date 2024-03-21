import { TouchableOpacity, View, Text, Button } from "react-native-ui-lib";
import { useCustomRadioButton } from "./index.hooks";
import EmptyIcon from "../SvgIcons/EmptyIcon";
import { styles } from "./styles";

type CustomRadioButtonProps = {
  label: string;
  style?;
};

export const CustomRadioButton = ({ label, style }: CustomRadioButtonProps) => {
  const { selected, handlePress } = useCustomRadioButton();
  console.log(label, selected);
  return (
    <View>
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.radioBtn, style, selected && styles.selectedRadioBtn]}
      >
        <Text style={styles.label}>{label}</Text>
        <EmptyIcon
          color="red"
          styles={[styles.icon/* , selected && style.selectedIcon */]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomRadioButton;
