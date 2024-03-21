import { TouchableOpacity, View, Text, Button } from "react-native-ui-lib";
import { useAppRadioButton } from "./index.hooks";
import EmptyIcon from "../SvgIcons/EmptyIcon";
import { styles } from "./styles";

type AppRadioButtonProps = {
  label: string;
  style?;
};

export const AppRadioButton = ({ label, style }: AppRadioButtonProps) => {
  const { selected, handlePress } = useAppRadioButton();
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

export default AppRadioButton;
