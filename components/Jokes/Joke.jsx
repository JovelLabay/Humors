// REACT
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

// EXPO
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// STYLES
import { colors, fontSizes } from "../../styles/Styles";
import SelectJokeEvent from "../events/SelectJokeEvent";

// COMPONENTS
import MainNav from "../../components/MainNav";
import GenerateJokeEvent from "../events/GenerateJokeEvent";

// SELECT JOKE
function SelectJoke({ navigation }) {
  return (
    <View style={styles.container}>
      <MainNav navigation={navigation} />
      <ScrollView>
        <View style={styles.mainIntro}>
          <Text style={styles.title}>Discover the</Text>
          <Text style={styles.title2}>Humors you need.</Text>
        </View>
        <SelectJokeEvent navigation={navigation} />
      </ScrollView>
    </View>
  );
}

// GERATE JOKE
function GenerateJoke({ navigation, route }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainIntro}>
          <GenerateJokeEvent route={route} navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function Joke() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="Select Joke"
        component={SelectJoke}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Generate Joke"
        component={GenerateJoke}
        options={{
          headerStyle: {
            backgroundColor: colors.mainBackground,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            fontFamily: "robotoRegular",
          },
          headerBackTitleStyle: {
            fontFamily: "robotoLight",
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

// STYLESHEET
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
  mainIntro: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  // TITLE
  title: {
    fontSize: fontSizes.title,
    fontFamily: "robotoBold",
    color: colors.primary,
  },
  title2: {
    color: colors.secondary,
    fontSize: fontSizes.title,
    fontFamily: "robotoBold",
  },
});
