// REACT
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const LovedJoke = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Lorem ipsum dolor sit amet consectetur.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LovedJoke;
