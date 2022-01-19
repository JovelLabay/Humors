// REACT
import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";

// EXPO
import { StatusBar } from "expo-status-bar";

// COMPONENTS
import MainNav from "../components/MainNav";

const SettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MainNav navigation={navigation} />
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
});

export default SettingScreen;
