// REACT
import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";

// COMPONENTS
import MainNav from "../components/MainNav";

const QuoteScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View>
            <MainNav navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gold",
  },
});

export default QuoteScreen;
