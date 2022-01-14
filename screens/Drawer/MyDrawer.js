// REACT NATIVE
import React from "react";

// NAVIGATOR
import { createDrawerNavigator } from "@react-navigation/drawer";

// SCREENS
import JokeScreen from "../JokeScreen";
import QuoteScreen from "../QuoteScreen";
import HomeScreen from "../HomeScreen";

// HOME SCREEN
function Home({ navigation }) {
  return <HomeScreen navigation={navigation} />;
}

// JOKE SCREEN
function Joke() {
  return <JokeScreen />;
}

// QOUTE SCREEN
function Quote() {
  return <QuoteScreen />;
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Joke" component={Joke} />
      <Drawer.Screen name="Quote" component={Quote} />
    </Drawer.Navigator>
  );
}
