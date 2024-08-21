import { GoogleInputProps } from "@/types/type";
import { View, Text } from "react-native";

const GoogleTextInput = ({
  handlePress,
  containerStyle,
  icon,
  textInputBackgroundColor,
  initialLocation,
}: GoogleInputProps) => {
  return (
    <View
      className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle} mb-5`}
    >
      <Text>Search</Text>
    </View>
  );
};

export default GoogleTextInput;
