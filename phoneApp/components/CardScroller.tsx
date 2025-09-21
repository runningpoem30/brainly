// components/CardScroller.tsx
import React from "react";
import { ScrollView, View, StyleSheet , TouchableOpacity } from "react-native";
import {WebView} from "react-native-webview";
import { useRouter} from "expo-router";
export default function CardScroller() {
    const router = useRouter();
    const data = {
        title: "My Image",
        webviewUrl:
            "https://x.com/escapevinay/status/1969126859301413011",
    };
    const encodedData = encodeURIComponent(JSON.stringify(data));
    return (
        <View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.container}
        >
            <TouchableOpacity
                style={styles.card}
                onPress={() =>
                    router.push(`/detailsp?data=${encodedData}`)

                }
            >
                <WebView
                    source={{
                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJPWCnWpPYDyqvpV0loSZuiI1bCPaQMN-mg&s",
                    }}
                />
            </TouchableOpacity>
            <View style={styles.card}>
                <WebView source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgHSO7GzRDFQ4nwbppkWvmYS5qvFlkOknKQ&s" }}
                />
            </View>
            <View style={styles.card} />
            <View style={styles.card} />
        </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 16,
        paddingVertical: 10,
        // width: "100%",
        paddingHorizontal: 16
    },
    card: {
        width: 120,
        height: 180,
        backgroundColor: "#d1d1d1",
        borderRadius: 30,
        overflow: "hidden",
    },
    divider: {
        height: 0.5,
        backgroundColor: "rgba(255,255,255,0.2)", // subtle white line
        marginTop: 12,
        marginHorizontal: -20,
    },
});
