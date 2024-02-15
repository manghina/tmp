import * as React from "react";
import {
  ActivityIndicator,
  Easing,
  Image,
  ImageSourcePropType,
  ImageURISource,
  StyleProp,
  StyleSheet,
  Text,
  TransformsStyle,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  AnimatedProps,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { useMemo } from "react";

const colors = [
  "#26292E",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

type CarouselProps = {};

export const ProfessionalSearchCarousel = ({}: CarouselProps) => {
  const [pageWidth, setPageWidth] = React.useState<number>(0);
  const baseOptions = useMemo(
    () => ({
      vertical: false as const,
      width: pageWidth,
      height: 300,
    }),
    [pageWidth],
  );

  return (
    <View
      style={{
        alignItems: "center",
        width: "100%",
      }}
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout;
        setPageWidth(width);
      }}
    >
      {baseOptions.width > 0 && (
        <Carousel
          {...baseOptions}
          loop
          style={{
            height: pageWidth * 0.8,
            width: pageWidth,
            justifyContent: "center",
            alignItems: "center",
          }}
          autoPlay={true}
          autoPlayInterval={0}
          scrollAnimationDuration={2000}
          customAnimation={(value: number) => {
            "worklet";
            const size = pageWidth;
            const scale = interpolate(
              value,
              [-2, -1, 0, 1, 2],
              [1.2, 0.8, 0.5, 0.8, 1.2],
              Extrapolation.CLAMP,
            );

            const translate = interpolate(
              value,
              [-2, -1, 0, 1, 2],
              [-size * 1.45, -size * 0.9, 0, size * 0.9, size * 1.45],
            );

            const transform = {
              transform: [
                { scale },
                {
                  translateX: translate,
                },
                { perspective: 100 },
                {
                  rotateY: `${interpolate(
                    value,
                    [-1, 0, 1],
                    [30, 0, -30],
                    Extrapolation.CLAMP,
                  )}deg`,
                },
              ],
            };

            return {
              ...withAnchorPoint(
                transform,
                { x: 0.5, y: 0.5 },
                {
                  width: baseOptions.width,
                  height: baseOptions.height,
                },
              ),
            };
          }}
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 50,
          }}
          data={colors}
          renderItem={({ index }) => <SBItem index={index} />}
        />
      )}
    </View>
  );
};

interface SBItemProps extends AnimatedProps<ViewProps> {
  style?: StyleProp<ViewStyle>;
  index?: number;
  showIndex?: boolean;
  img?: ImageSourcePropType;
}

export const SBItem: React.FC<SBItemProps> = (props) => {
  const {
    style,
    showIndex = true,
    index,
    img,
    testID,
    ...animatedViewProps
  } = props;

  return (
    <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>
      <SBImageItem
        style={style}
        index={index}
        showIndex={typeof index === "number" && showIndex}
        img={img}
      />
    </Animated.View>
  );
};

export interface Point {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

const isValidSize = (size: Size): boolean => {
  "worklet";

  return size && size.width > 0 && size.height > 0;
};

const defaultAnchorPoint = { x: 0.5, y: 0.5 };

export const withAnchorPoint = (
  transform: TransformsStyle,
  anchorPoint: Point,
  size: Size,
) => {
  "worklet";

  if (!isValidSize(size)) return transform;

  let injectedTransform = transform.transform;
  if (!injectedTransform) return transform;

  if (anchorPoint.x !== defaultAnchorPoint.x && size.width) {
    const shiftTranslateX = [];

    // shift before rotation
    shiftTranslateX.push({
      translateX: size.width * (anchorPoint.x - defaultAnchorPoint.x),
    });
    (injectedTransform as unknown as any[]) = [
      ...shiftTranslateX,
      ...injectedTransform,
    ];
    // shift after rotation
    (injectedTransform as unknown as any[]).push({
      translateX: size.width * (defaultAnchorPoint.x - anchorPoint.x),
    });
  }

  if (!Array.isArray(injectedTransform))
    return { transform: injectedTransform };

  if (anchorPoint.y !== defaultAnchorPoint.y && size.height) {
    const shiftTranslateY = [];
    // shift before rotation
    shiftTranslateY.push({
      translateY: size.height * (anchorPoint.y - defaultAnchorPoint.y),
    });
    injectedTransform = [...shiftTranslateY, ...injectedTransform];
    // shift after rotation
    injectedTransform.push({
      translateY: size.height * (defaultAnchorPoint.y - anchorPoint.y),
    });
  }

  return { transform: injectedTransform };
};

interface Props {
  style?: StyleProp<ViewStyle>;
  index?: number;
  showIndex?: boolean;
  img?: ImageSourcePropType;
}

export const SBImageItem: React.FC<Props> = ({
  style,
  index: _index,
  showIndex = true,
  img,
}) => {
  const index = _index ?? 0;
  const source = React.useRef<ImageURISource>({
    uri: `https://picsum.photos/id/${index}/400/300`,
  }).current;

  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size="small" />
      <Image key={index} style={styles.image} source={img ?? source} />
      {showIndex && (
        <Text
          style={{
            position: "absolute",
            color: "#6E6E6E",
            fontSize: 40,
            backgroundColor: "#EAEAEA",
            borderRadius: 5,
            overflow: "hidden",
            paddingHorizontal: 10,
            paddingTop: 2,
          }}
        >
          {index}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
