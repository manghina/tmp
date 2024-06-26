import { useSvgSizes } from "@app/hooks/useSvgSizes";
import { colorTokens } from "@app/theme/colors/tokens";
import Svg, { Path, G, SvgProps } from "react-native-svg";

const ToggleOffIcon = ({ color, size, ...props }: SvgProps) => {
  const { width, height, viewBox } = useSvgSizes({ size });
  return (
    <Svg width={width} height={height} viewBox={viewBox} {...props}>
      <G fill={color ?? colorTokens.colorIconSubtle}>
        <Path d="M16.65 3.85999H7.35C3.25 3.85999 2 5.10999 2 9.20999V14.79C2 18.89 3.25 20.14 7.35 20.14H16.65C20.75 20.14 22 18.89 22 14.79V9.20999C22 5.10999 20.75 3.85999 16.65 3.85999ZM14.09 13.12C14.09 15.37 13.04 16.42 10.79 16.42H8.56C6.31 16.42 5.26 15.37 5.26 13.12V10.89C5.26 8.63999 6.31 7.58999 8.56 7.58999H10.79C13.04 7.58999 14.09 8.63999 14.09 10.89V13.12Z" />
      </G>
    </Svg>
  );
};

export default ToggleOffIcon;
