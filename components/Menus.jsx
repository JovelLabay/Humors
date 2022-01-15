// REACT
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// NATIVE BASE
import { Box, Flex, Center } from "native-base";

// ICONS
import { MaterialIcons } from "@expo/vector-icons";

// STYLES
import { colors, fontSizes } from "../styles/Styles";

const Menus = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* JOKE */}
      <View style={styles.mainIntro}>
        <Text style={styles.mainTitle}>For today's joke</Text>
        <Box bg={colors.primary} px="7" py="5" mx="15" rounded="xl">
          <Text style={styles.mainDes}>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet.
          </Text>
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt="2"
          >
            <Text style={styles.mainAuth}>Lorem, ipsum dolor.</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Joke")}>
              <Center size="12" bg={colors.secondary} rounded="full">
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color={colors.mainBackground}
                />
              </Center>
            </TouchableOpacity>
          </Flex>
        </Box>
      </View>

      {/* QUOTE */}
      <View style={styles.mainIntro}>
        <Text style={styles.mainTitle}>Quote of the day</Text>
        <Box bg={colors.primary} px="7" py="5" mx="15" rounded="xl">
          <Text style={styles.mainDes}>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet.
          </Text>
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt="2"
          >
            <Text style={styles.mainAuth}>Lorem, ipsum dolor.</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Quote")}>
              <Center size="12" bg={colors.secondary} rounded="full">
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color={colors.mainBackground}
                />
              </Center>
            </TouchableOpacity>
          </Flex>
        </Box>
      </View>

      {/* BIBLE */}
      <View style={styles.mainIntro}>
        <Text style={styles.mainTitle}>Your bible verse for today</Text>
        <Box
          borderColor={colors.primary}
          borderWidth="2"
          px="7"
          py="5"
          mx="15"
          rounded="xl"
        >
          <Text style={styles.mainDesBible}>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet.
          </Text>
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt="2"
          >
            <Text style={styles.mainAuthBible}>Lorem, ipsum dolor.</Text>
          </Flex>
        </Box>
      </View>
    </View>
  );
};

export default Menus;

// STYLESHEET
const styles = StyleSheet.create({
  container: {},
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
