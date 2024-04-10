export const useSvgSizes = ({
  size = 24,
  viewBoxWidth = 24,
  viewBoxHeight = 24,
}: {
  size?: number;
  viewBoxHeight?: number;
  viewBoxWidth?: number;
}) => {
  const aspectRatio = viewBoxWidth / viewBoxHeight;
  const width = size * aspectRatio;
  const height = size;

  return {
    width,
    height,
    viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
  };
};
