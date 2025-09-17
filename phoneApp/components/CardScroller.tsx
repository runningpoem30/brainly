// components/CardScroller.tsx
import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import {WebView} from "react-native-webview";

export default function CardScroller() {
    return (
        <View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.container}
        >
            <View style={styles.card}>
                <WebView source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJPWCnWpPYDyqvpV0loSZuiI1bCPaQMN-mg&s" }}
                         />
            </View>
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
