import {Text, View, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import "../global.css"
import { useFonts, Fustat_400Regular, Fustat_700Bold } from "@expo-google-fonts/fustat";
import CardScroller from "@/components/CardScroller";
import AppLoading from "expo-app-loading";

const styles = StyleSheet.create({
    textRegular: {
        fontFamily: "Fustat_400Regular",
        color: "white",
        fontSize: 32,
    },
    textBold: {
        fontFamily: "Fustat_700Bold",
        color: "white",
        fontSize: 32,
    },
});
export default function Index() {
    const [fontsLoaded] = useFonts({
        Fustat_400Regular,
        Fustat_700Bold,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
  return (<SafeAreaView style={{ flex: 1 }}>
          <View className=""
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
          display: "flex",
          width: "100%",
          height : "100%",
          backgroundColor: "#0F0E0E",
          paddingHorizontal : 20,
          paddingVertical : 20

      }}
    >
        <View className="flex w-full flex-col">
            <View className="flex w-full flex-row">
                <Text style={styles.textRegular}>My </Text>
                <Text style={styles.textBold}>Space</Text>
            </View>

            <CardScroller />
            <CardScroller />
            <CardScroller />
            <CardScroller />
            <CardScroller />
            <CardScroller />
        </View>
    </View>
      </SafeAreaView>
  );
}
