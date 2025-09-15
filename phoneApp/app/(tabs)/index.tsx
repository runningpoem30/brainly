import { Text, View } from "react-native";
import "../global.css"
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
          display: "flex",
          width: "100%",
          height : "100%"
      }}
    >
        <View className="w-40 h-32 bg-black">
            <Text>Hello</Text>
        </View>
    </View>
  );
}
