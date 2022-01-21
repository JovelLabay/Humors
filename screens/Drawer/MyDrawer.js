// REACT NATIVE
import React from "react";
import { Text, View } from "react-native";

// NAVIGATOR
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
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
import {
  Feather,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";

import { Avatar } from "native-base";

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
function Setting({ navigation }) {
  return <SettingScreen navigation={navigation} />;
}

// ADDITIONAL DRAWER MENU
function Help(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* DRAWER TITLE */}
      <View style={{ padding: 30, alignItems: "center" }}>
        <Avatar bg="gray.500" size="xl">
          Logo
        </Avatar>
        <Text
          style={{
            marginVertical: 5,
            fontSize: fontSizes.regular,
            color: colors.secondary,
          }}
        >
          Humors you loved
        </Text>
      </View>
      <DrawerItemList {...props} />

      {/* HELP */}
      <DrawerItem
        onPress={() => alert("sdfdf")}
        style={{
          borderWidth: 2,
          borderColor: colors.secondary,
          marginTop: 20,
        }}
        labelStyle={{
          color: colors.primary,
        }}
        label="Help"
        icon={() => (
          <SimpleLineIcons name="question" size={22} color={colors.primary} />
        )}
      />

      {/* READ POLICY */}
      <DrawerItem
        onPress={() => alert("sdfsd")}
        style={{
          borderWidth: 2,
          borderColor: colors.secondary,
        }}
        labelStyle={{
          color: colors.primary,
        }}
        label="Read Policy"
        icon={() => (
          <Ionicons name="document-outline" size={24} color={colors.primary} />
        )}
      />

      {/* READ HATRED */}
      <DrawerItem
        onPress={() => alert("sdfsd")}
        style={{
          borderWidth: 2,
          borderColor: colors.secondary,
        }}
        labelStyle={{
          color: colors.primary,
        }}
        label="Void Emotion"
        icon={() => (
          <Ionicons
            name="stop-circle-outline"
            size={24}
            color={colors.primary}
          />
        )}
      />
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
          title: "Jokes",
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
          title: "Quotes",
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
        name="Setting"
        component={Setting}
        options={{
          title: "Setting",
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="cellphone-settings"
              size={22}
              color={focused ? colors.mainBackground : colors.primary}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
