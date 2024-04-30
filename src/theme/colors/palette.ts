export const withOpacity = (hexColor: string, opacity: number): string => {
  if (!/^#[0-9A-F]{6}$/i.test(hexColor)) {
    throw new Error("Color should be a hex string");
  }

  if (opacity > 1 || opacity < 0) {
    throw new Error("Opacity should be a number between 0 and 1");
  }

  return (
    hexColor +
    Math.round(opacity * 255)
      .toString(16)
      .toUpperCase()
  );
};

export const Colors = {
  Red: {
    100: "#FFCECB",
    200: "#FFD5D2",
    300: "#FD9891",
    400: "#F87168",
    500: "#F15B50",
    600: "#E24B3D",
    700: "#C9372C",
    800: "#AE2E24",
    900: "#5D1F1A",
    1000: "#42221F",
  },
  Orange: {
    100: "#FFF3EB",
    200: "#FEDCC8",
    300: "#FEC195",
    400: "#FEA362",
    500: "#F38A3F",
    600: "#E56910",
    700: "#C25100",
    800: "#A54800",
    900: "#702E00",
    1000: "#38291E",
  },
  Yellow: {
    100: "#FFF7D6",
    200: "#F8E6A0",
    300: "#F5CD47",
    400: "#E2B203",
    500: "#CF9F02",
    600: "#B38800",
    700: "#946F00",
    800: "#7F5F01",
    900: "#533F04",
    1000: "#332E1B",
  },
  Lime: {
    100: "#EFFFD6",
    200: "#D3F1A7",
    300: "#B3DF72",
    400: "#9AC748",
    500: "#82B536",
    600: "#6A9A23",
    700: "#5B7F24",
    800: "#4C6B1F",
    900: "#37471F",
    1000: "#28311B",
  },
  Green: {
    100: "#DCFFF1",
    200: "#BAF3DB",
    300: "#7EE2B8",
    400: "#4BCE97",
    500: "#2ABB7F",
    600: "#22A06B",
    700: "#1F845A",
    800: "#216E4E",
    900: "#164B35",
    1000: "#1C3329",
  },
  Teal: {
    100: "#E7F9FF",
    200: "#C6EDFB",
    300: "#9DD9EE",
    400: "#6CC3E0",
    500: "#42B2D7",
    600: "#2989BD",
    700: "#227D9B",
    800: "#206A83",
    900: "#164555",
    1000: "#1E3137",
  },
  Blue: {
    100: "#E9F2FF",
    200: "#CCE0FF",
    300: "#85B8FF",
    400: "#579DFF",
    500: "#388BFF",
    600: "#1D7AFC",
    700: "#0C66E4",
    800: "#0055CC",
    900: "#09326C",
    1000: "#1C2841",
  },
  Purple: {
    100: "#F3F0FF",
    200: "#DFDBFD",
    300: "#B8ACF6",
    400: "#9F8FEF",
    500: "#8F7EE7",
    600: "#8270DB",
    700: "#6E5DC6",
    800: "#5E4DB2",
    900: "#352C63",
    1000: "#2B273F",
  },
  Magenta: {
    100: "#FFECF8",
    200: "#FDD0EC",
    300: "#F979D2",
    400: "#E774BB",
    500: "#DA62AC",
    600: "#CD519D",
    700: "#AE4787",
    800: "#943D73",
    900: "#50253F",
    1000: "#3D2232",
  },
  Neutral: {
    0: "#FEFEFE",
    100: "#F7F8F9",
    200: "#EFF1F3",
    300: "#DCDFE4",
    400: "#B3B9C4",
    500: "#8590A2",
    600: "#758195",
    700: "#626F86",
    800: "#44546F",
    900: "#2C3E5D",
    1000: "#172B4D",
    1100: "#091E42",
  },
  NeutralAlpha: {
    100: "#091E4208",
    200: "#091E420F",
    300: "#091E4224",
    400: "#091E424F",
    500: "#091E427D",
  },
  DarkNeutral: {
    "-100": "#101214",
    0: "#161A1D",
    100: "#1D2125",
    200: "#22272B",
    250: "#282E33",
    300: "#2C333A",
    350: "#38414A",
    400: "#454F59",
    500: "#596773",
    600: "#738496",
    700: "#8C9BAB",
    800: "#9FABBC",
    900: "#B6C2CF",
    1000: "#C7D1DB",
    1100: "#DEE4EA",
  },
  DarkNeutralAlpha: {
    100: "#03040442",
    200: "#BCDF00A",
    250: "#C8EF191A",
    300: "#A6C5E229",
    350: "#C3DEFE33",
    400: "#BFDBF847",
    500: "#9BB4CA80",
  },
  LightNeutralAlternative: {
    neutral: "#011820",
  },
  DarkNeutralAlternative: {
    neutral: "#011820",
  },
  Brand: {
    100: "#D3DDDC",
    200: "#B2C3C1",
    300: "#91A8A7",
    400: "#708E8C",
    500: "#4F7471",
    600: "#3F5D5A",
    700: "#2F4644",
    800: "#202E2D",
    900: "#182322",
    1000: "#101717",
  },
  Unlisted: {
    LoginBackground: withOpacity("#4377e8", 0.15),
    GreenBackground: "#023440",
    BackgroundAlpha: withOpacity("#fefefe", 0.1),
    IconAlternativeDisabled: "#ABB0BC",
    AiChatBubbleBg: withOpacity("#3c77e8", 0.2),
    UserChatBubbleBg: withOpacity("#ABB0BA", 0.2),
  },
};
