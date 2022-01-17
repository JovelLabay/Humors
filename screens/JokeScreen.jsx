// REACT
import React from "react";
import { StyleSheet, View } from "react-native";

// EXPO
import { StatusBar } from "expo-status-bar";

// COMPONENTS
import MainNav from "../components/MainNav";
import JokeAPi from "../components/JokeApi";

// STYLES
import { colors, fontSizes } from "../styles/Styles";

const JokeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MainNav navigation={navigation} />
      <JokeAPi />
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
