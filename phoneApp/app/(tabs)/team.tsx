import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import { useFonts, Fustat_400Regular, Fustat_700Bold } from "@expo-google-fonts/fustat";
import TeamMemory from "@/components/TeamMemory";
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
const teamSpace = () => {
  return (
      <SafeAreaView className="flex-1">
          <View style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
              width: "100%",
              height : "100%",
              backgroundColor: "#0F0E0E",
              paddingHorizontal : 20,
              paddingVertical : 20

          }}>
              <View className="flex w-full flex-col">
                  <View className="flex w-full flex-row">
                      <Text style={styles.textRegular}>My </Text>
                      <Text style={styles.textBold}>Team</Text>
                  </View>
                  <ScrollView vertical >
                      <View className="flex justify-center items-center mt-4 bg-white rounded-2xl pb-2 pt-2">
                          <Text style={{fontFamily : "Fustat_400Regular"}} className="text-white/50 text-xl font-semibold tracking-tighter">11-02-2025</Text>
                      </View>
                      <TeamMemory/>
                      <TeamMemory/>
                      <TeamMemory/>
                      <TeamMemory/>
                      <View className="flex justify-center items-center mt-4 bg-white rounded-2xl pb-2 pt-2">
                          <Text style={{fontFamily : "Fustat_400Regular"}} className="text-white/50 text-xl font-semibold tracking-tighter">05-02-2025</Text>
                      </View>
                      <TeamMemory/>

                  </ScrollView>
              </View>

          </View>
      </SafeAreaView>

  );
};

export default teamSpace;
