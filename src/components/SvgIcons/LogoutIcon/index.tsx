import { useSvgSizes } from "@app/hooks/useSvgSizes";
import { colorTokens } from "@app/theme/colors/tokens";
import Svg, { Path, G, SvgProps } from "react-native-svg";

const LogoutIcon = ({ color, size, ...props }: SvgProps) => {
  const { width, height, viewBox } = useSvgSizes({ size });
  return (
    <Svg width={width} height={height} viewBox={viewBox} {...props}>
      <G fill={color ?? colorTokens.colorIcon}>
        <Path d="M7.88 12.07c0-.41.34-.75.75-.75h5.48V2.86a.869.869 0 0 0-.87-.86c-5.89 0-10 4.11-10 10s4.11 10 10 10c.47 0 .86-.38.86-.86v-8.33H8.63a.734.734 0 0 1-.75-.74Z" />
        <Path d="M20.54 11.54 17.7 8.69a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.56 1.56h-4.1v1.5h4.09l-1.56 1.56c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.84-2.85c.3-.28.3-.75.01-1.04Z" />
      </G>
    </Svg>
  );
};

export default LogoutIcon;
