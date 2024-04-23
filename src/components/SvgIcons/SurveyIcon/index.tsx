import { useSvgSizes } from "@app/hooks/useSvgSizes";
import { colorTokens } from "@app/theme/colors/tokens";
import Svg, { Path, G, SvgProps } from "react-native-svg";

const SurveyIcon = ({ color, size, ...props }: SvgProps) => {
  const { width, height, viewBox } = useSvgSizes({ size });
  return (
    <Svg width={width} height={height} viewBox={viewBox} {...props}>
      <G fill={color ?? colorTokens.colorIcon}>
        <Path d="M8.39 18.49V8.33c0-.4.12-.79.34-1.12l2.73-4.06c.43-.65 1.5-1.11 2.41-.77.98.33 1.63 1.43 1.42 2.41l-.52 3.27c-.04.3.04.57.21.78.17.19.42.31.69.31h4.11c.79 0 1.47.32 1.87.88.38.54.45 1.24.2 1.95l-2.46 7.49c-.31 1.24-1.66 2.25-3 2.25h-3.9c-.67 0-1.61-.23-2.04-.66l-1.28-.99c-.49-.37-.78-.96-.78-1.58ZM5.21 6.38H4.18C2.63 6.38 2 6.98 2 8.46v10.06c0 1.48.63 2.08 2.18 2.08h1.03c1.55 0 2.18-.6 2.18-2.08V8.46c0-1.48-.63-2.08-2.18-2.08Z" />
      </G>
    </Svg>
  );
};

export default SurveyIcon;
