// REACT NATIVE
import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";

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

import { Box, Center, Image } from "native-base";
import { StoreContext } from "../../components/StoreContext";
import { StatusBar } from "expo-status-bar";

import { authentication } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

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

export default function MyDrawer({ navigation }) {
  const [auth, setAuth] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [logEmail, setLogEmail] = useState("User");

  // SIGNIN
  const sign = () => {
    const theAuth = authentication;
    createUserWithEmailAndPassword(theAuth, email, password)
      .then((cred) => {
        const user = cred.user;
        console.log(user);
        alert("successfull");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // LOGIN
  const login = () => {
    const theAuth = authentication;
    signInWithEmailAndPassword(theAuth, email, password)
      .then((cred) => {
        const user = cred.user;
        console.log(user);
        alert("successfull" + user.email);
        setAuth(true);
        setLogEmail(user.email);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  if (auth === false) {
    return (
      <Box bg={colors.secondary} flex={1}>
        <StatusBar hidden={true} />
        <ScrollView>
          <TextInput
            style={{ borderWidth: 1, paddingVertical: 5 }}
            value={email}
            onChangeText={(e) => setEmail(e)}
            placeholder="email"
          />
          <TextInput
            style={{ borderWidth: 1, paddingVertical: 5 }}
            value={password}
            onChangeText={(e) => setPassword(e)}
            placeholder="password"
          />
          <Button title="Signin" onPress={() => sign()} />
          <Button title="login" onPress={() => login()} />
        </ScrollView>
      </Box>
    );
  } else {
    return (
      <StoreContext.Provider value={{ logEmail }}>
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
      </StoreContext.Provider>
    );
  }
}
