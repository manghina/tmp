import { useSvgSizes } from "@app/hooks/useSvgSizes";
import { colorTokens } from "@app/theme/colors/tokens";
import Svg, { Path, G, SvgProps } from "react-native-svg";

const ContactIcon = ({ color, size, ...props }: SvgProps) => {
  const { width, height, viewBox } = useSvgSizes({ size });
  return (
    <Svg width={width} height={height} viewBox={viewBox} {...props}>
      <G fill={color ?? colorTokens.colorIcon}>
        <Path d="M20 6.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z" />
        <Path d="M19.04 8.15a4.226 4.226 0 0 1-3.19-3.19c-.13-.61-.14-1.2-.03-1.76a.988.988 0 0 0-.97-1.2H7C4.24 2 2 4.24 2 7v6.95c0 2.76 2.24 5 5 5h1.5c.28 0 .64.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99a1 1 0 0 1 .8-.4h1.51c2.76 0 4.99-2.23 4.99-4.99V9.15c0-.63-.58-1.09-1.2-.97-.56.1-1.15.1-1.76-.03ZM8 12c-.56 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.44 1-1 1Zm4 0c-.56 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.44 1-1 1Zm4 0c-.56 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.44 1-1 1Z" />
      </G>
    </Svg>
  );
};

export default ContactIcon;
