// REACT
import React from "react";
import { StyleSheet, View } from "react-native";

// EXPO
import { StatusBar } from "expo-status-bar";

// COMPONENTS
import MainNav from "../components/MainNav";
import Quote from "../components/Quotes/Quote";

// ADS COMPONENT
import Ads from "../components/Ads/Ads";

// STYLES
import { colors } from "../styles/Styles";

const QuoteScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MainNav navigation={navigation} />
      <Quote />
      <Ads />
      <StatusBar style="dark" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
});

export default QuoteScreen;
