import React from "react";
import { View, Text, StyleSheet } from "react-native";
import "@/app/global.css";
import { WebView } from "react-native-webview";

const styles = StyleSheet.create({
    textRegular: {
        fontFamily: "Fustat_400Regular",
    },
    textBold: {
        fontFamily: "Fustat_700Bold",
    },
    divider: {
        height: 1,
        backgroundColor: "rgba(255,255,255,1)",
        marginTop: 12,
        marginHorizontal: -20,
    },
});

const MemoryDisplay = ({ date, url, savedTime }: any) => {
    return (
        <View className="flex justify-center items-center mt-4 gap-4">
            <View className="bg-white h-40 w-full rounded-3xl overflow-hidden relative">

                <WebView
                    source={{ uri: url || "" }}
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={true}
                    showsHorizontalScrollIndicator={false}
                    scrollEnabled={true}
                />

                <View className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded-md">
                    <Text style={styles.textRegular} className="text-white text-xs">
                        {savedTime || "11:02am"}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default MemoryDisplay;
