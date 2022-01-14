// REACT
import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";

// COMPONENTS
import MainNav from "../components/MainNav";
import Menus from "../components/Menus";

// EXPO
import { StatusBar } from "expo-status-bar";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View>
            <MainNav />
            <Menus />
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});

export default HomeScreen;
