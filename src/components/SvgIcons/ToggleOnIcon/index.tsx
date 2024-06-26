import { useSvgSizes } from "@app/hooks/useSvgSizes";
import { colorTokens } from "@app/theme/colors/tokens";
import Svg, { Path, G, SvgProps } from "react-native-svg";

const ToggleOnIcon = ({ color, size, ...props }: SvgProps) => {
  const { width, height, viewBox } = useSvgSizes({ size });
  return (
    <Svg width={width} height={height} viewBox={viewBox} {...props}>
      <G fill={color ?? colorTokens.colorIconSelected}>
        <Path d="M16.65 3.85999H7.35C3.25 3.85999 2 5.10999 2 9.20999V14.79C2 18.89 3.25 20.14 7.35 20.14H16.65C20.75 20.14 22 18.89 22 14.79V9.20999C22 5.10999 20.75 3.85999 16.65 3.85999ZM18.74 13.12C18.74 15.37 17.69 16.42 15.44 16.42H13.21C10.96 16.42 9.91 15.37 9.91 13.12V10.89C9.91 8.63999 10.96 7.58999 13.21 7.58999H15.44C17.69 7.58999 18.74 8.63999 18.74 10.89V13.12Z" />
      </G>
    </Svg>
  );
};

export default ToggleOnIcon;
