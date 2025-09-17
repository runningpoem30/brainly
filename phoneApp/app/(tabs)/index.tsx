import {Text, View, StyleSheet, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import "../global.css"
import { useFonts, Fustat_400Regular, Fustat_700Bold } from "@expo-google-fonts/fustat";
import CardScroller from "@/components/CardScroller";
import * as SplashScreen from 'expo-splash-screen';
import MemoryDisplay from "@/components/Memorybase";
import React, {useEffect , useCallback} from "react";

// SplashScreen.preventAutoHideAsync();
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
    divider: {
        height: 1,
        backgroundColor: "rgba(255,255,255,1)",
        marginTop: 12,
        marginHorizontal: -20,
    },
});
export default function Index() {
    const [fontsLoaded] = useFonts({
        Fustat_400Regular,
        Fustat_700Bold,
    });
    // useEffect(() => {
    //     async function hideSplash() {
    //         if (fontsLoaded) {
    //             await SplashScreen.hideAsync();
    //         }
    //     }
    //     hideSplash();
    // }, [fontsLoaded]);
    //
    // if (!fontsLoaded) {
    //     return null; // render nothing until fonts are loaded
    // }
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
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
            <ScrollView vertical className="">
                <CardScroller />
                <View style={styles.divider} />
                <View className="flex justify-center items-center mt-4 bg-white rounded-2xl pb-2 pt-2">
                    <Text style={{fontFamily : "Fustat_400Regular"}} className="text-2xl font-semibold tracking-tighter">11-02-2025</Text>
                </View>

                <MemoryDisplay/>
                <MemoryDisplay url = "https://chatgpt.com/share/68cb14bf-05bc-8003-bc27-31d77f72b1b1"/>
                <MemoryDisplay url = "https://x.com/PoemRunning/status/1964282794924003570"/>
                <MemoryDisplay url = "https://x.com/PoemRunning/status/1964282794924003570"/>
            </ScrollView>

        </View>
    </View>
      </SafeAreaView>
  );
}

