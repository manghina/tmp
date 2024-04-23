import { memo } from "react";
import { Text, View } from "react-native-ui-lib";

type LogoProps = {
  color?: string;
};

export const Logo = memo(({ color }: LogoProps) => {
  return (
    <Text
      Title
      style={{
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize : 28,
        color: color ?? "#FFF",
      }}
    >
      Sweep
    </Text>
  );
});
