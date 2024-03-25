import * as React from "react";
import { View } from "react-native-ui-lib";
import { styles } from "./styles";

type EmptyIconProps = {
  selected?: boolean;
};

const EmptyIcon = ({ selected = false }: EmptyIconProps) => (
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

export default EmptyIcon;
