import { TouchableOpacity, View, Text, Button } from "react-native-ui-lib";
import { useAppRadioButton } from "./index.hooks";
import EmptyIcon from "../SvgIcons/EmptyIcon";
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
  console.log(label, selected);
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
        <Text>{label}</Text>
        <EmptyIcon selected={selected} />
      </TouchableOpacity>
    </View>
  );
};

export default AppRadioButton;
