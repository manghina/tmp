import { useSvgSizes } from "@app/hooks/useSvgSizes";
import { colorTokens } from "@app/theme/colors/tokens";
import Svg, { Path, G, SvgProps, Mask } from "react-native-svg";

const ImageIcon = ({ color, size, ...props }: SvgProps) => {
  const { width, height, viewBox } = useSvgSizes({
    size,
    viewBoxHeight: 48,
    viewBoxWidth: 48,
  });

  return (
    <Svg width={width} height={height} viewBox={viewBox} {...props}>
      <Mask
        id="a"
        width={48}
        height={48}
        x={0}
        y={0}
        fill="#000"
        maskUnits="userSpaceOnUse"
      >
        <Path fill="#fff" d="M0 0h48v48H0z" />
        <Path d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24Z" />
      </Mask>
      <Path
        fill={color ?? colorTokens.colorIcon}
        d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24Z"
      />
      <Path
        fill="#FEFEFE"
        d="M24 40c-8.837 0-16-7.163-16-16H0c0 13.255 10.745 24 24 24v-8Zm16-16c0 8.837-7.163 16-16 16v8c13.255 0 24-10.745 24-24h-8ZM24 8c8.837 0 16 7.163 16 16h8C48 10.745 37.255 0 24 0v8Zm0-8C10.745 0 0 10.745 0 24h8c0-8.837 7.163-16 16-16V0Z"
        mask="url(#a)"
      />
      <Path
        fill="#FEFEFE"
        d="m14.58 31.01-.02.02c-.27-.59-.44-1.26-.51-2 .07.73.26 1.39.53 1.98ZM21 22.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76Z"
      />
      <Path
        fill="#FEFEFE"
        d="M28.19 14h-8.38C16.17 14 14 16.17 14 19.81v8.38c0 1.09.19 2.04.56 2.84.86 1.9 2.7 2.97 5.25 2.97h8.38c3.64 0 5.81-2.17 5.81-5.81V19.81c0-3.64-2.17-5.81-5.81-5.81Zm4.18 10.5c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28c-.71-.62-1.84-.68-2.64-.14l-3.74 2.51c-.22-.56-.35-1.21-.35-1.97v-8.38c0-2.82 1.49-4.31 4.31-4.31h8.38c2.82 0 4.31 1.49 4.31 4.31v4.8l-.13-.11Z"
      />
    </Svg>
  );
};

export default ImageIcon;
