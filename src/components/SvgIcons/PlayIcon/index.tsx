import { useSvgSizes } from "@app/hooks/useSvgSizes";
import { colorTokens } from "@app/theme/colors/tokens";
import Svg, { Path, G, SvgProps } from "react-native-svg";

const PlayIcon = ({ color, size, ...props }: SvgProps) => {
  const { width, height, viewBox } = useSvgSizes({ size });
  return (
    <Svg width={width} height={height} viewBox={viewBox} {...props}>
      <G fill={color ?? colorTokens.colorIcon}>
        <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm2.66 11.73-1.28.74-1.28.74c-1.65.95-3 .17-3-1.73v-2.96c0-1.91 1.35-2.68 3-1.73l1.28.74 1.28.74c1.65.95 1.65 2.51 0 3.46Z" />
      </G>
    </Svg>
  );
};

export default PlayIcon;
