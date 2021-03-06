import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";

import { Entypo } from "@expo/vector-icons";

import { StatusBar } from "expo-status-bar";

import { Box, Center, Image } from "native-base";

import { useNavigation } from "@react-navigation/native";
import { colors } from "../../styles/Styles";

import { authentication } from "../../firebase/firebase.config";

import { Seconday } from "../../screens/Drawer/MyDrawer";

const logoImage = require("../../assets/Humors.png");

const Welcome = () => {
  const navigation = useNavigation();

  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = authentication.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text onPress={() => navigation.navigate("LogSign")}>Login</Text>
      </View>
    );
  }

  return <Seconday />;

  // return (
  //   <View style={styles.container}>
  //     <View style={styles.getStarted}>
  //       <TouchableOpacity
  //         style={styles.getStartedBtn}
  //         onPress={() => navigation.navigate("LogSign")}
  //       >
  //         <Text style={{ color: colors.mainBackground }}>Get Started</Text>
  //         <Entypo
  //           name="chevron-right"
  //           size={24}
  //           color={colors.mainBackground}
  //         />
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  getStarted: {
    right: 50,
    bottom: 100,
    position: "absolute",
  },
  getStartedBtn: {
    backgroundColor: colors.secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Welcome;

// useEffect(() => {
//   const unsubscribe = authentication.onAuthStateChanged((user) => {
//     if (user) {
//       navigation.replace("Secondary");
//     }
//   });
//   return unsubscribe;
// }, []);
