// REACT
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { colors, fontSizes } from "../../styles/Styles";

const Quote = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.mainIntro}>
          <Text style={styles.title}>Inspire yourself</Text>
          <Text style={styles.title2}>with these quotes.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainIntro: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  // TITLE
  title: {
    fontSize: fontSizes.title,
    fontFamily: "robotoBold",
    color: colors.primary,
  },
  title2: {
    color: colors.secondary,
    fontSize: fontSizes.title,
    fontFamily: "robotoBold",
  },
});

export default Quote;
