// REACT
import React from "react";
import { TouchableOpacity, StyleSheet, View, SafeAreaView } from "react-native";

// NATIVE BASE
import { Text } from "native-base";

// STYLES
import { colors, fontSizes } from "../styles/Styles";

// ICONS
import {
  FontAwesome,
  SimpleLineIcons,
  MaterialIcons,
} from "@expo/vector-icons";

// UTILITIES
import appJson from "../app.json";

// Greeting
const myDate = new Date().getHours();
let greeting =
  myDate <= 11
    ? "Good Morning"
    : myDate <= 17
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
        <View style={styles.rightNav}>
          <TouchableOpacity>
            <FontAwesome
              name="heart-o"
              size={24}
              color={colors.primary}
              style={styles.like}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons
              name="question"
              size={24}
              color={colors.primary}
              // style={styles.like}
            />
          </TouchableOpacity>
        </View>
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
  rightNav: {
    flexDirection: "row",
  },
  like: {
    marginRight: 10,
  },
});
