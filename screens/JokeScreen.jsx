// REACT
import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";

// COMPONENTS
import MainNav from "../components/MainNav";

const JokeScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View>
            <MainNav />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});

export default JokeScreen;
