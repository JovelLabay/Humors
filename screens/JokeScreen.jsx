// REACT
import React from "react";
import { StyleSheet, View, Text } from "react-native";

// EXPO
import { StatusBar } from "expo-status-bar";

// COMPONENTS
import Joke from "../components/Jokes/Joke";

// ADS COMPONENT
import Ads from "../components/Ads/Ads";

// STYLES
import { colors } from "../styles/Styles";

const JokeScreen = () => {
  return (
    <View style={styles.container}>
      <Joke />
      <Ads />
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
  // ADDS
  adds: {
    height: 50,
    backgroundColor: "gray",
  },
});

export default JokeScreen;
