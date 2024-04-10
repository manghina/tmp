import { useSvgSizes } from "@app/hooks/useSvgSizes";
import { colorTokens } from "@app/theme/colors/tokens";
import Svg, { Path, SvgProps } from "react-native-svg";

const SearchIcon = ({ color, size, ...props }: SvgProps) => {
  const { width, height, viewBox } = useSvgSizes({ size });
  return (
    <Svg width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        fill={color ?? colorTokens.colorIcon}
        d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
      />
      <Path
        fill={color ?? colorTokens.colorIcon}
        d="M22.0014 22.7499C21.8114 22.7499 21.6214 22.6799 21.4714 22.5299L19.4714 20.5299C19.1814 20.2399 19.1814 19.7599 19.4714 19.4699C19.7614 19.1799 20.2414 19.1799 20.5314 19.4699L22.5314 21.4699C22.8214 21.7599 22.8214 22.2399 22.5314 22.5299C22.3814 22.6799 22.1914 22.7499 22.0014 22.7499Z"
      />
    </Svg>
  );
};

export default SearchIcon;
