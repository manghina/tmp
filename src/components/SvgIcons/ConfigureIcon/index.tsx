import { useSvgSizes } from "@app/hooks/useSvgSizes";
import { colorTokens } from "@app/theme/colors/tokens";
import Svg, { Path, G, SvgProps } from "react-native-svg";

const ConfigureIcon = ({ color, size, ...props }: SvgProps) => {
  const { width, height, viewBox } = useSvgSizes({ size });
  return (
    <Svg width={width} height={height} viewBox={viewBox} {...props}>
      <G fill={color ?? colorTokens.colorIcon}>
        <Path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM7.67 5.5c0-.41.34-.75.75-.75s.75.34.75.75v3.9c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.5Zm1.853 10.931a.566.566 0 0 0-.353.505V18.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.564a.567.567 0 0 0-.353-.505A2.713 2.713 0 0 1 5.7 13.95c0-1.5 1.22-2.73 2.72-2.73 1.5 0 2.73 1.22 2.73 2.73 0 1.108-.67 2.057-1.627 2.481ZM16.33 18.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.9c0-.41.34-.75.75-.75s.75.34.75.75v3.9Zm-.75-5.73c-1.5 0-2.73-1.22-2.73-2.73 0-1.108.67-2.057 1.627-2.481a.566.566 0 0 0 .353-.505V5.5c0-.41.34-.75.75-.75s.75.34.75.75v1.564c0 .223.15.414.353.505A2.713 2.713 0 0 1 18.3 10.05c0 1.5-1.22 2.72-2.72 2.72Z" />
      </G>
    </Svg>
  );
};

export default ConfigureIcon;
