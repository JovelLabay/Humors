// REACT
import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
  Text,
} from "react-native";

// NATIVE BASE
import { Center } from "native-base";

// STYLES
import { colors, fontSizes } from "../styles/Styles";

// ICONS
import { MaterialIcons, Feather } from "@expo/vector-icons";

// UTILITIES
import appJson from "../app.json";

// Greeting
const myDate = new Date().getHours();
let greeting =
  myDate <= 11
    ? "Good Morning"
    : myDate <= 16
    ? "Good Afternnon"
    : "Good Evening";

const MainNav = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.leftNav}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialIcons name="menu" size={26} color="black" />
          </TouchableOpacity>
          <View style={styles.titles}>
            <Text style={styles.titleLogo}>{appJson.expo.name}</Text>
            <Text style={styles.titleSublogo}>{greeting}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Center
            bg={colors.secondary}
            p={1.5}
            rounded="full"
            flexDirection="row"
          >
            <Feather name="settings" size={20} color={colors.mainBackground} />
            <Text style={styles.settings}>Settings</Text>
          </Center>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainNav;

// STYLESHEET
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 5,
    marginVertical: 5,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  leftNav: {
    flexDirection: "row",
    alignItems: "center",
  },
  settings: {
    marginLeft: 4,
    color: colors.mainBackground,
  },
  titles: {
    marginLeft: 10,
  },
  titleLogo: {
    paddingTop: 5,
    fontSize: fontSizes.header,
    fontFamily: "robotoBold",
    color: colors.primary,
  },
  titleSublogo: {
    color: colors.secondary,
    fontFamily: "robotoMedium",
    fontSize: fontSizes.regular,
  },
});
