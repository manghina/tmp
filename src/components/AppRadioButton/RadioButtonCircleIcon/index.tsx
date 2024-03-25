import * as React from "react";
import { View } from "react-native-ui-lib";
import { styles } from "./styles";

type RadioButtonCircleIconProps = {
  selected?: boolean;
};

const RadioButtonCircleIcon = ({ selected = false }: RadioButtonCircleIconProps) => (
  <View>
    <View
      width={20}
      height={20}
      style={[
        styles.outerIcon,
        selected ? styles.selectedOuterIcon : styles.unselectedOuterIcon,
      ]}
    >
      {selected && <View width={8} height={8} style={styles.innerIcon} />}
    </View>
  </View>
);

export default RadioButtonCircleIcon;
