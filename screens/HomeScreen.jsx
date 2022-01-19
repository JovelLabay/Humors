// REACT
import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

// COMPONENTS
import MainNav from "../components/MainNav";
import Home from "../components/Home";

// EXPO
import { StatusBar } from "expo-status-bar";

// STYLES
import { colors } from "../styles/Styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MainNav navigation={navigation} />
      <Home navigation={navigation} />
      <StatusBar style="dark" />
    </View>
  );
};

// STYLESHEET
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
});

export default HomeScreen;
