import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import {WebView} from "react-native-webview";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Detailsp() {
    const { data } = useLocalSearchParams();
    const parsedData = data ? JSON.parse(data) : null;

    return (<SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' , paddingVertical: 20 , paddingHorizontal: 20}} className="">
                <Stack.Screen options={{ headerShown: false }} />
                {parsedData && (
                    <>
                        <View className="flex w-full flex-col">
                            <View>
                                <Text style={styles.textRegular}>My </Text>
                                <Text style={styles.textBold}>Space</Text>
                            </View>

                            <View className="">
                                <Text style={styles.Bold} className="text-xl">{parsedData.title}</Text></View>
                        </View>

                        <View className="h-40 w-full">
                            <WebView source={{ uri: parsedData.webviewUrl }} />
                        </View>

                    </>
                )}
            </View>
    </SafeAreaView>

    );
}
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
    Bold: {
        fontFamily: "Fustat_700Bold",
        color: "white",
    },
    divider: {
        height: 1,
        backgroundColor: "rgba(255,255,255,1)",
        marginTop: 12,
        marginHorizontal: -20,
    },
});

