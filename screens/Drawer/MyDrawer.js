// REACT NATIVE
import React from "react";
import { Text, View } from "react-native";

// NAVIGATOR
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

// SCREENS
import JokeScreen from "../JokeScreen";
import QuoteScreen from "../QuoteScreen";
import HomeScreen from "../HomeScreen";
import SettingScreen from "../SettingScreen";

// STYLES
import { colors, fontSizes } from "../../styles/Styles";

// ICONS
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { Image } from "native-base";

// HOME SCREEN
function Home({ navigation }) {
  return <HomeScreen navigation={navigation} />;
}

// JOKE SCREEN
function Joke({ navigation }) {
  return <JokeScreen navigation={navigation} />;
}

// QOUTE SCREEN
function Quote({ navigation }) {
  return <QuoteScreen navigation={navigation} />;
}
// SETTINGS SCREEN
function Settings({ navigation }) {
  return <SettingScreen navigation={navigation} />;
}

// ADDITIONAL DRAWER MENU
function Help(props) {
  // IMAGE LOGO
  const logoImage = require("../../assets/Humors.png");
  return (
    <DrawerContentScrollView {...props}>
      {/* DRAWER TITLE */}
      <View style={{ padding: 30, alignItems: "center" }}>
        <Image alt="logo" source={logoImage} borderRadius={100} size="md" />
        <Text
          style={{
            marginVertical: 20,
            fontSize: fontSizes.regular,
            color: colors.secondary,
          }}
        >
          Humors you loved
        </Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator
      // ADDITIONAL DRAWER MENU
      drawerContent={(props) => <Help {...props} />}
      screenOptions={{
        // PROPS FOR THE DRAWER
        header: () => null,
        // STYLESHEETS FOR THE DRAWER
        drawerStyle: {
          paddingHorizontal: 20,
          paddingVertical: 30,
          backgroundColor: colors.mainBackground,
        },
        drawerActiveBackgroundColor: colors.secondary,
        drawerActiveTintColor: colors.mainBackground,
        drawerInactiveTintColor: colors.primary,
        drawerType: "back",
        overlayColor: colors.mainBackground,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          drawerIcon: ({ focused }) => (
            <Feather
              name="home"
              size={22}
              color={focused ? colors.mainBackground : colors.primary}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Joke"
        component={Joke}
        options={{
          title: "Customize Jokes",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="gamepad-circle-outline"
              size={22}
              color={focused ? colors.mainBackground : colors.primary}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Quote"
        component={Quote}
        options={{
          title: "Generate Quotes",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="format-quote-open-outline"
              size={22}
              color={focused ? colors.mainBackground : colors.primary}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          drawerIcon: ({ focused }) => (
            <Feather
              name="settings"
              size={22}
              color={focused ? colors.mainBackground : colors.primary}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
