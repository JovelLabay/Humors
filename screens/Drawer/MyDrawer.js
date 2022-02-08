// REACT NATIVE
import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";

import { authentication } from "../../firebase/firebase.config";

// NAVIGATOR
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import JokeScreen from "../JokeScreen";
import QuoteScreen from "../QuoteScreen";
import HomeScreen from "../HomeScreen";
import SettingScreen from "../SettingScreen";

// STYLES
import { colors, fontSizes } from "../../styles/Styles";

import { useNavigation } from "@react-navigation/core";

// ICONS
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { Image } from "native-base";
import { StatusBar } from "expo-status-bar";
import Welcome from "../../components/LogSign/Welcome";
import LogSign from "../../components/LogSign/LogSign";

const Seconday = () => {
  const Drawer = createDrawerNavigator();

  // ADDITIONAL DRAWER COMPONENTS
  function Help(props) {
    // IMAGE LOGO
    const logoImage = require("../../assets/Humors.png");

    // NAVIGATION
    const navigation = useNavigation();
    const handleSignOut = () => {
      authentication
        .signOut()
        .then(() => {
          navigation.replace("LogSign");
        })
        .catch((error) => alert(error.message));
    };

    const { email, uid } = authentication.currentUser;
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          {/* APP TITLE */}
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
        <View
          style={{
            position: "absolute",
            bottom: 0,
          }}
        >
          <Text onPress={() => handleSignOut()}>Logout</Text>
          <Text>
            {"Email: "}
            {email}
          </Text>
          <Text>
            {"ID No: "}
            {uid}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <>
      <StatusBar hidden={false} />
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
          component={HomeScreen}
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
          component={JokeScreen}
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
          component={QuoteScreen}
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
          component={SettingScreen}
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
    </>
  );
};

const Stack = createNativeStackNavigator();

export default function MyDrawer() {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack.Navigator
        screenOptions={{
          header: () => null,
          gestureEnabled: false,
          animation: "fade_from_bottom",
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="LogSign" component={LogSign} />
        <Stack.Screen name="Secondary" component={Seconday} />
      </Stack.Navigator>
    </>
  );
}
