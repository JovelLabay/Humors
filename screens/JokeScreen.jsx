// REACT
import React from "react";
import { StyleSheet, View } from "react-native";

// EXPO
import { StatusBar } from "expo-status-bar";

// COMPONENTS
import Joke from "../components/Jokes/Joke";

// STYLES
import { colors } from "../styles/Styles";

const JokeScreen = () => {
  return (
    <View style={styles.container}>
      <Joke />
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
});

export default JokeScreen;
