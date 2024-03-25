import { TouchableOpacity, View, Text } from "react-native-ui-lib";
import { useAppRadioButton } from "./index.hooks";
import RadioButtonCircleIcon from "./RadioButtonCircleIcon";
import { styles } from "./styles";

type AppRadioButtonProps = {
  label: string;
  style?;
  selected: boolean;
  handlePress: () => void;
};

export const AppRadioButton = ({
  label,
  style,
  selected,
  handlePress,
}: AppRadioButtonProps) => {
  const {} = useAppRadioButton();

  return (
    <View>
      <TouchableOpacity
        style={[
          style,
          styles.radioBtn,
          selected ? styles.selectedRadioBtn : styles.unselectedRadioBtn,
        ]}
        onPress={handlePress}
      >
        <Text style={[styles.label, selected && styles.selectedLabel]}>
          {label}
        </Text>
        <RadioButtonCircleIcon selected={selected} />
      </TouchableOpacity>
    </View>
  );
};

export default AppRadioButton;
