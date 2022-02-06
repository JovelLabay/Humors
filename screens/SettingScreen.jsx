// REACT
import React from "react";
import { StyleSheet, View } from "react-native";

// EXPO
import { StatusBar } from "expo-status-bar";

// ADS COMPONENT
import Ads from "../components/Ads/Ads";
import Setting from "../components/Settings/Setting";

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Setting />
      <Ads />
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SettingScreen;
