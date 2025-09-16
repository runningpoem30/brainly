// components/CardScroller.tsx
import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";

export default function CardScroller() {
    return (
        <View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            <View style={styles.card} />
            <View style={styles.card} />
            <View style={styles.card} />
            <View style={styles.card} />
        </ScrollView>
            <View style={styles.divider} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 16,
        paddingVertical: 10,
    },
    card: {
        width: 120,
        height: 180,
        backgroundColor: "#d1d1d1",
        borderRadius: 30,
    },
    divider: {
        height: 0.5,
        backgroundColor: "rgba(255,255,255,0.2)", // subtle white line
        marginTop: 12,
        marginHorizontal: -20,
    },
});
