// REACT NATIVE
import React from "react";
import { View, Text } from "react-native";

// NAVIGATOR
import { createDrawerNavigator } from "@react-navigation/drawer";

// SCREENS

// JOKE SCREEN
function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

// QOUTE SCREEN
function Article() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  );
}
