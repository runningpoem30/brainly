import React from 'react';
import { View, Text ,Image} from 'react-native';
import {Stack, Tabs} from "expo-router";
import "../global.css"
import "@/assets/icons/home.png"
import { BlurView } from "expo-blur";
const icons = {
    home: require("@/assets/icons/home.png"),
    search: require("@/assets/icons/search.png"),
    team: require("@/assets/icons/team.png"),
    profile: require("@/assets/icons/profile.png")
};
const CTabBarIcon = ({ focused, icon }: any) => {
    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: 60,
            }}
        >
            <View
                style={{
                    backgroundColor: focused ? "rgba(255,255,255,0.15)" : "transparent",

                    paddingVertical: 25,
                    paddingHorizontal : 30,
                    borderRadius: 30,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Image
                    source={icons[icon]}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: focused ? "#fff" : "#fff",
                    }}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
};

const _layout = () => {
  return (
    <Tabs

        screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
            tabBarBackground: () => (
                <BlurView
                    intensity={30}
                    tint="dark"
                    style={{ flex: 1, borderRadius: 50 }}
                />
            ),
        tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
        },
            tabBarStyle: {
                height:78,
                position: "absolute",
                borderRadius: 50,
                marginBottom: 20,
                marginHorizontal: 20,
                paddingHorizontal: 10,
                backgroundColor: "rgba(255,255,255,0.1)",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                overflow: "hidden",
            },

        }}>
        <Tabs.Screen
        name="index" options={{
            title: 'Home',
            headerShown: false,
            // tabBarLabel: ({ focused }) => (
            //     <Text className={focused ? "text-blue-600 font-medium tracking-wide" : "text-gray-500 font-medium tracking-wide"}>
            //         {focused ? "Home" : "Home"}
            //     </Text>
            // )
            tabBarIcon: ({ focused }) => (
                <CTabBarIcon focused = {focused} icon={"home"} />
            )

        }}/>
        <Tabs.Screen
            name="team" options={{
            title: 'Team',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <CTabBarIcon focused = {focused} icon={"team"} />
            )
        }}/>
        <Tabs.Screen
            name="search" options={{
            title: 'Search',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <CTabBarIcon focused = {focused} icon={"search"} />
            )
        }}/>
        <Tabs.Screen
            name="profile" options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <CTabBarIcon focused = {focused} icon={"profile"} />
            )
        }}/>

    </Tabs>
  );
};

export default _layout;
