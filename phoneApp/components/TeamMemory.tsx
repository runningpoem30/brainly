import React from 'react';
import { View, Text } from 'react-native';
import { useFonts, Fustat_400Regular, Fustat_700Bold } from "@expo-google-fonts/fustat";
import {useState} from "react";
type Contributer = {
    name: string;
}
type TeamMemoryProps = {
    Date : string;
    Name : string;
    Time : string;
    Contributers : Contributer[];
}
const TeamMemory = ({Date , Contributers , Name , Time} : TeamMemoryProps) => {
    const mockContributors = [
        { name: "Vinay", role: "Frontend Developer", email: "alice@test.com" },
        { name: "Salvi", role: "Backend Developer", email: "bob@test.com" },
        { name: "Nama", role: "ML Engineer", email: "charlie@test.com" },

    ];
    const layerCount = useState(0);
    return (
    <View className=" relative w-full h-40 bg-white rounded-3xl overflow-hidden p-4 mt-4">
      <Text style={{fontFamily : 'Fustat_400Regular'}}>BIGTechy</Text>
        <View className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded-md">
            <Text style={{fontFamily : "Fustat_400Regular"}} className="text-white text-xs">Last Modified -
                {Time || "11:02am"}
            </Text>
        </View>
        <View className="absolute bottom-2 right-2 flex-row">
            {mockContributors.map((contributor, index) => {
                const hue = (index * 60) % 360;
                return (
                    <View
                        key={index}
                        className="w-6 h-6 rounded-full items-center justify-center"
                        style={{
                            backgroundColor: `hsl(${hue}, 70%, 50%)`,
                            marginLeft: index === 0 ? 0 : -8,
                            opacity: 0.4 + (index / (mockContributors.length - 1)) * 0.6
                        }}
                    >
                        <Text className="text-white/80 font-bold text-sm" style={{fontFamily :"Fustat_400Regular" }}>
                            {contributor.name[0]}
                        </Text>
                    </View>
                );
            })}
        </View>
    </View>
  );
};

export default TeamMemory;
