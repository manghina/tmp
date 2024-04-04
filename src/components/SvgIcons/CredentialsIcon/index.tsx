import { colorTokens } from "@app/theme/colors/tokens";
import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

type CredentialsIconProps = {
  color?: string;
};

const CredentialsIcon = ({ color, ...props }: CredentialsIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill={color ?? colorTokens.colorIcon}>
      <Path d="M20.91 11.12V6.73c0-.82-.62-1.75-1.39-2.06l-5.57-2.28a5.187 5.187 0 0 0-3.91 0L4.47 4.67c-.76.31-1.38 1.24-1.38 2.06v4.39c0 4.89 3.55 9.47 8.4 10.81.33.09.69.09 1.02 0 4.85-1.34 8.4-5.92 8.4-10.81Zm-8.16 1.75v2.63c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.63A2.497 2.497 0 0 1 9.5 10.5a2.5 2.5 0 0 1 5 0c0 1.12-.74 2.05-1.75 2.37Z" />
    </G>
  </Svg>
);

export default CredentialsIcon;
