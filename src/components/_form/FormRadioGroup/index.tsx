import { memo } from "react";
import { View, Text } from "react-native-ui-lib";
import { useFormRadioGroup } from "./index.hooks";

type FormRadioGroupProps = {
  name: string;
};

export const FormRadioGroup = memo(({ name }: FormRadioGroupProps) => {
  const {} = useFormRadioGroup(name);

  return (
    <View>
      <Text>Form radio group</Text>
    </View>
  );
});
