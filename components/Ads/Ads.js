// REACT
import React from "react";
import { StyleSheet, View, Text } from "react-native";

// STYLES
import { colors } from "../../styles/Styles";

const JokeScreen = () => {
  return (
    <View style={styles.adds}>
      <Text>You can apply for adds here.</Text>
    </View>
  );
};

// ADDS
const styles = StyleSheet.create({
  adds: {
    height: 50,
    backgroundColor: "gray",
  },
});

export default JokeScreen;
