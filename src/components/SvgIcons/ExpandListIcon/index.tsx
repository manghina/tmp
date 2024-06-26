import { useSvgSizes } from "@app/hooks/useSvgSizes";
import { colorTokens } from "@app/theme/colors/tokens";

import Svg, { Path, SvgProps } from "react-native-svg";

const ExpandListIcon = ({ color, size, ...props }: SvgProps) => {
  const { width, height, viewBox } = useSvgSizes({
    size,
    viewBoxWidth: 32,
    viewBoxHeight: 24,
  });
  return (
    <Svg width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        d="M12.4396 20.0001H19.5596C23.9862 20.0001 25.7862 16.8667 23.5862 13.0401L22.5996 11.3334C22.3596 10.9201 21.9196 10.6667 21.4396 10.6667H10.5596C10.0796 10.6667 9.63957 10.9201 9.39957 11.3334L8.41291 13.0401C6.21291 16.8667 8.01291 20.0001 12.4396 20.0001Z"
        fill={color ?? colorTokens.colorIcon}
      />
      <Path
        d="M11.7181 9.33349H20.2915C20.8115 9.33349 21.1315 8.77349 20.8648 8.33349L20.0115 6.86683C17.8115 3.04016 14.1848 3.04016 11.9848 6.86683L11.1315 8.33349C10.8781 8.77349 11.1981 9.33349 11.7181 9.33349Z"
        fill={color ?? colorTokens.colorIcon}
      />
    </Svg>
  );
};

export default ExpandListIcon;
