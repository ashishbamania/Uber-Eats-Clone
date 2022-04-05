import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BottomTabs = () => {
    return (
        <View style={{ flexDirection: "row", margin: 8, marginHorizontal: 30, justifyContent: "space-between", marginBottom: -4 }}>
            <Icon icon="home" text="Home" />
            <Icon icon="search" text="Browse" />
            <Icon icon="shopping-bag" text="Grocery" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="user" text="Account" />
        </View>
    )
}

export default BottomTabs;

const Icon = ({ icon, text }) => (
    <TouchableOpacity>
        <FontAwesome5 name={icon} size={25} style={{ marginBottom: 3, alignSelf: "center" }} />
        <Text>{text}</Text>
    </TouchableOpacity>
);
