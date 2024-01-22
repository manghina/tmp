import * as React from "react";
import Svg, { Path } from "react-native-svg";

type CalendarErrorIconProps = {
  color?: string;
};

const CalendarErrorIcon = ({ color, ...props }: CalendarErrorIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={color ?? "#000"}
      d="M16.75 3.56V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5h-6.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.56c-2.7.25-4.01 1.86-4.21 4.25-.02.29.22.53.5.53h16.92c.29 0 .53-.25.5-.53-.2-2.39-1.51-4-4.21-4.25ZM20 9.84H4c-.55 0-1 .45-1 1V17c0 3 1.5 5 5 5h4.93c.69 0 1.17-.67.95-1.32-.2-.58-.37-1.22-.37-1.68 0-3.03 2.47-5.5 5.5-5.5.29 0 .58.02.86.07.6.09 1.14-.38 1.14-.98v-1.74A1.02 1.02 0 0 0 20 9.84ZM9.21 17.71c-.19.18-.45.29-.71.29-.13 0-.26-.03-.38-.08s-.23-.12-.33-.21c-.18-.19-.29-.44-.29-.71 0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.1-.09.21-.16.33-.21.36-.16.81-.07 1.09.21.09.1.16.2.21.33.05.12.08.25.08.38 0 .27-.11.52-.29.71Zm0-3.5c-.19.18-.45.29-.71.29-.13 0-.26-.02-.38-.08-.12-.05-.23-.12-.33-.21-.18-.19-.29-.45-.29-.71 0-.13.03-.26.08-.38s.12-.23.21-.33c.1-.09.21-.16.33-.21.36-.15.81-.07 1.09.21.09.1.16.21.21.33.05.12.08.25.08.38 0 .26-.11.52-.29.71Zm3.71-.33c-.05.12-.12.23-.21.33-.1.09-.21.16-.33.21-.12.06-.25.08-.38.08-.26 0-.52-.11-.71-.29-.09-.1-.16-.21-.21-.33a.995.995 0 0 1-.08-.38c0-.26.11-.52.29-.71.28-.28.72-.37 1.09-.21.12.05.23.12.33.21.18.19.29.45.29.71 0 .13-.02.26-.08.38Z"
    />
    <Path
      fill={color ?? "#000"}
      d="M19 15c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4Zm1.6 5.64c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.53-.53-.55.55c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.55-.55-.53-.53a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.53.54.5-.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.5.5.53.53c.29.29.29.76 0 1.05Z"
    />
  </Svg>
);

export default CalendarErrorIcon;