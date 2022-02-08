// REACT
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

// EXPO
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Entypo } from "@expo/vector-icons";

// STYLES
import { colors, fontSizes } from "../../styles/Styles";

import { FontAwesome } from "@expo/vector-icons";

import { Box, Center, HStack } from "native-base";

import { authentication } from "../../firebase/firebase.config";

const settingOptions = [
  { id: 10, title: "Accounts" },
  { id: 20, title: "Loved Jokes" },
  { id: 30, title: "Saved Quotes" },
  { id: 40, title: "Themes" },
];
const settingOptions2 = [
  { id: 20, title: "Visit Developer's Website" },
  { id: 30, title: "Help" },
  { id: 40, title: "Terms and Conditions" },
];

// SETTINGS
const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainIntro}>
          <Text style={styles.title}>App Settings</Text>
          <Box bg="white" my={5} rounded="xl">
            {settingOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => {
                  if (option.id === 10) {
                    navigation.navigate("My Modal Screen");
                  } else if (option.id === 20) {
                    navigation.navigate("Loved Joke Screen");
                  } else {
                    return;
                  }
                }}
              >
                <HStack
                  justifyContent="space-between"
                  alignItems="center"
                  px={3}
                  h="12"
                >
                  <HStack alignItems="center">
                    <FontAwesome
                      name={
                        option.id == 20
                          ? "heart"
                          : option.id == 30
                          ? "quote-right"
                          : option.id == 10
                          ? "user"
                          : "tint"
                      }
                      size={24}
                      color={colors.secondary}
                      style={{ marginHorizontal: 6 }}
                    />
                    <Text>{option.title}</Text>
                  </HStack>
                  <Entypo
                    name="chevron-right"
                    size={24}
                    color={colors.secondary}
                  />
                </HStack>
              </TouchableOpacity>
            ))}
          </Box>
          <Text style={styles.title}>Others</Text>
          <Box bg="white" my={5} rounded="xl">
            {settingOptions2.map((option) => (
              <TouchableOpacity key={option.id}>
                <HStack
                  justifyContent="space-between"
                  alignItems="center"
                  px={3}
                  h="12"
                >
                  <Text>{option.title}</Text>
                  <Entypo
                    name="chevron-right"
                    size={24}
                    color={colors.secondary}
                  />
                </HStack>
              </TouchableOpacity>
            ))}
          </Box>
        </View>
      </ScrollView>
    </View>
  );
};

// LOVED JOKES
const LovedJokesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>sdfsdfsdf</Text>
    </View>
  );
};

// MODAL
const MyModalScreen = ({ navigation }) => {
  const handleSignOut = () => {
    authentication
      .signOut()
      .then(() => {
        navigation.replace("LogSign");
      })
      .catch((error) => alert(error.message));
  };

  const { email, uid, providerId } = authentication.currentUser;

  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles2.lightThemeText : styles2.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles2.lightContainer : styles2.darkContainer;

  return (
    <View style={[styles2.container2, themeContainerStyle]}>
      <StatusBar style="light" />
      <Text style={[styles2.text, themeTextStyle]}>
        Color scheme: {colorScheme}
      </Text>
      <Text style={[styles2.text2, themeTextStyle]}>sdfsdf</Text>
    </View>

    // <View style={[styles2.constainerMe, themeTextStyle]}>
    //   {/* <StatusBar style="light" /> */}
    //   <Text onPress={() => handleSignOut()}>Logout</Text>
    //   <Text>{email}</Text>
    //   <Text>{uid}</Text>
    //   <Text>{providerId}</Text>
    // </View>
  );
};

const Stack = createNativeStackNavigator();

export default function Setting() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="Settings Screen"
        component={SettingsScreen}
        options={{
          title: "Settings",
        }}
      />
      <Stack.Screen
        name="Loved Joke Screen"
        component={LovedJokesScreen}
        options={{
          title: "Loved Jokes",
        }}
      />

      <Stack.Screen
        name="My Modal Screen"
        component={MyModalScreen}
        options={({ navigation }) => ({
          presentation: "modal",
          title: "Accounts",
          headerTintColor: colors.primary,
          headerRight: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Center bg={colors.secondary} p="2" rounded="full">
                <Text style={{ color: colors.mainBackground }}>Close</Text>
              </Center>
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const styles2 = StyleSheet.create({
  container2: {
    flex: 1,
  },
  text2: {
    fontSize: 50,
  },
  lightContainer: {
    backgroundColor: colors.mainBackground,
  },
  darkContainer: {
    backgroundColor: colors.primary,
  },
  lightThemeText: {
    color: colors.primary,
  },
  darkThemeText: {
    color: colors.mainBackground,
  },
});

// STYLESHEET
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: colors.mainBackground,
  // },
  // mainIntro: {
  //   marginVertical: 10,
  //   marginHorizontal: 20,
  // },
  // // TITLE
  // title: {
  //   fontSize: fontSizes.title,
  //   fontFamily: "robotoBold",
  //   color: colors.primary,
  //   marginHorizontal: 10,
  // },
});
