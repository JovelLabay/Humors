// REACT
import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

// EXPO
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// STYLES
import { colors, fontSizes } from "../../styles/Styles";
import MainNav from "../MainNav";
import LovedJokeResult from "./LovedJokeResult";

// COMPONENT
import JokesCategory from "./JokesCategory";

// CATEGORY JOKE
const CategoryJoke = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MainNav navigation={navigation} />
      <ScrollView>
        <View style={styles.mainIntro}>
          <Text style={styles.title}>Your saved jokes</Text>
          <JokesCategory navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};
// RESULT JOKE
const ResultCategoryJoke = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainIntro}>
          <LovedJokeResult />
        </View>
      </ScrollView>
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default function LovedJoke() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="Category Joke"
        component={CategoryJoke}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Result Joke"
        component={ResultCategoryJoke}
        options={{
          headerStyle: {
            backgroundColor: colors.mainBackground,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            fontFamily: "robotoRegular",
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
});
