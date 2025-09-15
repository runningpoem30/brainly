import React from 'react';
import { View, Text } from 'react-native';
import {Stack, Tabs} from "expo-router";
import "../global.css"
const _layout = () => {
  return (
    <Tabs screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarIcon: () => null,
        tabBarItemStyle: {
            height: "100%",
            width: "100%",
            backgroundColor: "transparent",
        },
        tabBarStyle:{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            marginBottom:20,
            marginHorizontal:20,
        }
    }}>
        <Tabs.Screen
        name="index" options={{
            title: 'Home',
            headerShown: false,
            tabBarLabel: ({ focused }) => (
                <Text className={focused ? "text-blue-600 font-medium tracking-wide" : "text-gray-500 font-medium tracking-wide"}>
                    {focused ? "Home" : "Home"}
                </Text>
            )

        }}/>
        <Tabs.Screen
            name="search" options={{
            title: 'Search',
            headerShown: false,
            tabBarLabel: ({ focused }) => (
                <Text className={focused ? "text-blue-600 font-medium tracking-wide" : "text-gray-500 font-medium tracking-wide"}>
                    {focused ? "Search" : "Search"}
                </Text>
            )
        }}/>
        <Tabs.Screen
            name="team" options={{
            title: 'Team',
            headerShown: false,
            tabBarLabel: ({ focused }) => (
                <Text className={focused ? "text-blue-600 font-medium tracking-wide" : "text-gray-500 font-medium tracking-wide"}>
                    {focused ? "Team" : "Team"}
                </Text>
            )
        }}/>
    </Tabs>
  );
};

export default _layout;
