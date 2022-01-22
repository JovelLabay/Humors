// REACT
import React from "react";
import { StyleSheet, View } from "react-native";

// EXPO
import { StatusBar } from "expo-status-bar";

// COMPONENTS
import MainNav from "../components/MainNav";
import LovedJoke from "../components/Loved/LovedJoke";

// ADS COMPONENT
import Ads from "../components/Ads/Ads";

// STYLES
import { colors } from "../styles/Styles";

const loveScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MainNav navigation={navigation} />
      <LovedJoke />
      <Ads />
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});

export default loveScreen;
