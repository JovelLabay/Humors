// REACT
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// STYLES
import { colors, fontSizes } from "../styles/Styles";

import JokeMainApi from "./JokeMainApi";
import QuotemainApi from "./QuoteMainApi";
import BibleMainApi from "./BibleMainApi";

const Menus = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* JOKE */}
      <View style={styles.mainIntro}>
        <Text style={styles.mainTitle}>For today's joke</Text>
        <JokeMainApi styles={styles} navigation={navigation} />
      </View>

      {/* QUOTE */}
      <View style={styles.mainIntro}>
        <Text style={styles.mainTitle}>Quote of the day</Text>
        <QuotemainApi styles={styles} navigation={navigation} />
      </View>

      {/* BIBLE */}
      <View style={styles.mainIntro}>
        <Text style={styles.mainTitle}>Your bible verse for today</Text>
        <BibleMainApi styles={styles} />
      </View>
    </View>
  );
};

export default Menus;

// STYLESHEET
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainIntro: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  mainTitle: {
    marginBottom: 10,
    fontSize: fontSizes.header,
    fontFamily: "robotoMedium",
    color: colors.primary,
  },
  mainDes: {
    fontSize: fontSizes.regular,
    fontFamily: "robotoMedium",
    color: colors.mainBackground,
    lineHeight: 30,
  },
  mainAuth: {
    fontSize: fontSizes.regular,
    fontFamily: "robotoLightItalic",
    color: colors.mainBackground,
    lineHeight: 30,
  },
  // BIBLE
  mainDesBible: {
    fontSize: fontSizes.regular,
    fontFamily: "robotoMedium",
    color: colors.primary,
    lineHeight: 30,
  },
  mainAuthBible: {
    fontSize: fontSizes.regular,
    fontFamily: "robotoRegular",
    color: colors.secondary,
    lineHeight: 30,
  },
});
