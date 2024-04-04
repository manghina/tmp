import { colorTokens } from "@app/theme/colors/tokens";
import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

type PaymentsIconProps = {
  color?: string;
};

const PaymentsIcon = ({ color, ...props }: PaymentsIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G fill={color ?? colorTokens.colorIcon}>
      <Path d="M22 10.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87-.06-.63.18-1.22.6-1.63.37-.38.88-.6 1.44-.6H21c.56.02 1 .47 1 1.02Z" />
      <Path d="M20.47 15.55h-1.43c-1.9 0-3.5-1.43-3.66-3.25-.09-1.04.29-2.08 1.05-2.82.64-.66 1.53-1.03 2.49-1.03h1.55c.29 0 .53-.24.5-.53-.22-2.43-1.83-4.09-4.22-4.37-.24-.04-.49-.05-.75-.05H7c-.28 0-.55.02-.81.06C3.64 3.88 2 5.78 2 8.5v7c0 2.76 2.24 5 5 5h9c2.8 0 4.73-1.75 4.97-4.42a.49.49 0 0 0-.5-.53ZM13 9.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z" />
    </G>
  </Svg>
);

export default PaymentsIcon;
