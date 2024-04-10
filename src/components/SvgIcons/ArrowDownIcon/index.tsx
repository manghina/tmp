import { useSvgSizes } from "@app/hooks/useSvgSizes";
import { colorTokens } from "@app/theme/colors/tokens";
import Svg, { Path, SvgProps } from "react-native-svg";

const ArrowDownIcon = ({ color, size = 32, ...props }: SvgProps) => {
  const { width, height, viewBox } = useSvgSizes({
    size,
    viewBoxWidth: 32,
    viewBoxHeight: 32,
  });
  return (
    <Svg width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        fill={color ?? colorTokens.colorIcon}
        d="M0 16c0 8.832 7.168 16 16 16s16-7.168 16-16S24.832 0 16 0 0 7.168 0 16Zm17.2-5.6v8.304l2.752-2.752a1.207 1.207 0 0 1 1.696 0c.24.24.352.544.352.848 0 .304-.112.608-.352.848l-4.8 4.8a1.207 1.207 0 0 1-1.696 0l-4.8-4.8a1.207 1.207 0 0 1 0-1.696 1.207 1.207 0 0 1 1.696 0l2.752 2.752V10.4c0-.656.544-1.2 1.2-1.2.656 0 1.2.544 1.2 1.2Z"
      />
    </Svg>
  );
};

export default ArrowDownIcon;
