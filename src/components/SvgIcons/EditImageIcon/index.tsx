import * as React from "react";
import Svg, { Path, Circle, SvgProps, Mask } from "react-native-svg";
import { useSvgSizes } from "@app/hooks/useSvgSizes";
import { colorTokens } from "@app/theme/colors/tokens";

const EditImageIcon = ({ size, color, ...props }: SvgProps) => {
  const { width, height, viewBox } = useSvgSizes({
    size,
    viewBoxHeight: 48,
    viewBoxWidth: 48,
  });

  return (
    <Svg width={width} height={height} viewBox={viewBox} fill="none" {...props}>
      <Mask
        id="a"
        width={width}
        height={height}
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
      <Circle cx={24} cy={24} r={10} fill="#FEFEFE" />
      <Path
        fill={color ?? colorTokens.colorIcon}
        d="M28.54 13.166H19.46c-3.943 0-6.294 2.351-6.294 6.295v9.067c0 3.954 2.35 6.305 6.294 6.305h9.068c3.943 0 6.294-2.35 6.294-6.294v-9.078c.01-3.944-2.34-6.294-6.284-6.294ZM22.863 29.97c-.314.314-.91.617-1.343.682l-2.665.38c-.098.01-.195.021-.293.021-.444 0-.856-.151-1.148-.444-.358-.357-.51-.877-.423-1.451l.38-2.666c.064-.444.357-1.029.682-1.343l4.831-4.831a8.17 8.17 0 0 0 .65 1.397c.109.184.228.358.326.488.119.184.26.357.346.454.054.076.098.13.12.152.27.325.584.628.855.856.076.076.12.12.141.13.163.13.325.26.466.357.173.13.346.25.53.347.217.13.456.25.694.368.25.109.477.206.704.282l-4.853 4.821Zm6.955-6.955-.997 1.008a.336.336 0 0 1-.238.097c-.033 0-.076 0-.098-.01a6.719 6.719 0 0 1-4.582-4.583c-.033-.12 0-.25.087-.325l1.007-1.008c1.647-1.646 3.218-1.614 4.832 0 .823.823 1.224 1.614 1.224 2.438-.011.78-.412 1.56-1.235 2.383Z"
      />
    </Svg>
  );
};

export default EditImageIcon;
