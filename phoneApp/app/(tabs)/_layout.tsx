import React from 'react';
import { View, Text ,Image} from 'react-native';
import {Stack, Tabs} from "expo-router";
import "../global.css"
import "@/assets/icons/home.png"
import { BlurView } from "expo-blur";
import { Dimensions } from "react-native";
import Animated, { useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';
const { height, width } = Dimensions.get("window");
const TAB_BAR_HEIGHT = height * 0.10; // 10% of screen height
const ICON_SIZE = width * 0.07; // ~7% of screen width
const PADDING = width * 0.05;
const icons = {
    home: require("@/assets/icons/home.png"),
    search: require("@/assets/icons/search.png"),
    team: require("@/assets/icons/team.png"),
    profile: require("@/assets/icons/profile.png")
};
// const CTabBarIcon = ({ focused, icon }: any) => {
//     return (
//         <View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
//             <View
//                 style={{
//                     backgroundColor: focused ? "#0F0E0E" : "transparent",
//                     paddingVertical: TAB_BAR_HEIGHT * 0.2,
//                     paddingHorizontal : TAB_BAR_HEIGHT * 0.3,
//                     borderRadius: ICON_SIZE,
//                     justifyContent: "center",
//                     alignItems: "center",
//                 }}
//             >
//                 <Image
//                     source={icons[icon]}
//                     style={{
//                         width: ICON_SIZE,
//                         height: ICON_SIZE,
//                         tintColor: focused ? "#fff" : "#aaa",
//                     }}
//                     resizeMode="contain"
//                 />
//             </View>
//         </View>
//     );
// };
const CTabBarIcon = ({ focused, icon }: any) => {
    // Animated scale for focus
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: withSpring(focused ? 1.2 : 1, { damping: 8 }), // bounce effect
                },
            ],
            opacity: withTiming(focused ? 1 : 0.6, { duration: 250 }),
        };
    }, [focused]);

    return (
        <Animated.View
            style={[
                {
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                },
                animatedStyle,
            ]}
        >
            <View
                style={{
                    backgroundColor: focused ? "#0F0E0E" : "transparent",
                    paddingVertical: TAB_BAR_HEIGHT * 0.2,
                    paddingHorizontal: TAB_BAR_HEIGHT * 0.3,
                    borderRadius: ICON_SIZE,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Image
                    source={icons[icon]}
                    style={{
                        width: ICON_SIZE,
                        height: ICON_SIZE,
                        tintColor: focused ? "#fff" : "#aaa",
                    }}
                    resizeMode="contain"
                />
            </View>
        </Animated.View>
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
                    intensity={90}
                    tint="dark"
                    style={{ flex: 1, borderRadius: 50 }}
                />
            ),
        tabBarItemStyle: {
            justifyContent: "center",
            alignItems: "center",
        },
            tabBarStyle: {
                height: TAB_BAR_HEIGHT,
                position: "absolute",
                borderRadius: TAB_BAR_HEIGHT / 2,
                marginBottom: height * 0.025,
                marginHorizontal: width * 0.05,
                paddingHorizontal: width * 0.02,
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
