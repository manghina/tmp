import { colorTokens } from "@app/theme/colors/tokens";
import * as React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";
import { View } from "react-native-ui-lib";
import { editImageStyles } from "./styles";

const EditImageIcon = ({ ...props }) => (
  <View style={editImageStyles.container}>
    <Svg
      width={20}
      height={20}
      fill="none"
      style={editImageStyles.backgroundIcon}
    >
      <Circle cx={10} cy={10} r={10} fill={colorTokens.colorIconInverse} />
    </Svg>
    <Svg width={26} height={26} {...props}>
      <G fill={colorTokens.colorIcon}>
        <Path d="M17.54 2.167H8.46c-3.943 0-6.294 2.35-6.294 6.294v9.067c0 3.954 2.35 6.305 6.294 6.305h9.068c3.943 0 6.294-2.35 6.294-6.294V8.461c.01-3.944-2.34-6.295-6.284-6.295Zm-5.677 16.802c-.314.314-.91.617-1.343.682l-2.666.38c-.097.01-.195.021-.292.021-.444 0-.856-.151-1.148-.444-.358-.357-.51-.877-.423-1.451l.38-2.665c.064-.445.357-1.03.682-1.344l4.831-4.832a8.17 8.17 0 0 0 .65 1.398c.109.184.228.357.326.487.119.185.26.358.346.455.054.076.098.13.12.152.27.325.584.629.855.856.076.076.12.12.141.13.163.13.325.26.466.357.173.13.346.25.53.347.217.13.456.25.694.369.25.108.477.205.704.281l-4.853 4.821Zm6.955-6.955-.997 1.008a.336.336 0 0 1-.238.097c-.033 0-.076 0-.098-.01a6.719 6.719 0 0 1-4.582-4.583c-.033-.12 0-.25.086-.325l1.008-1.008c1.647-1.646 3.218-1.614 4.832 0 .823.824 1.224 1.614 1.224 2.438-.011.78-.412 1.56-1.235 2.383Z" />
      </G>
    </Svg>
  </View>
);

export default EditImageIcon;
