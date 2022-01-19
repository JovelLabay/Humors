// REACT
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import CheckBox from "@react-native-community/checkbox";
// NATIVE BASE
import {
  Box,
  Flex,
  Button,
  Switch,
  AlertDialog,
  Checkbox,
  Center,
} from "native-base";

// ICONS
import { MaterialIcons } from "@expo/vector-icons";

// STYLES
import { colors, fontSizes } from "../../styles/Styles";

const GenerateJokeEvent = ({ navigation, route }) => {
  // SELECT YOUR JOKE
  const { flags, name } = route.params;

  // JOKE WAYS
  const [jokeWays, setJokeWays] = useState("");
  let theWays = jokeWays === true ? "Double" : "Single";

  // RESULT FETCH
  const [result, setResult] = useState({ category: "sample" });

  // CATEGORIES
  const categorties = [
    { catId: 100, catName: "Programming" },
    { catId: 200, catName: "Mics" },
    { catId: 300, catName: "Dark" },
    { catId: 400, catName: "Pun" },
    { catId: 500, catName: "Spooky" },
    { catId: 600, catName: "Christmas" },
  ];

  // JOKE FETCH
  const sample = async (catName, flags, theWays) => {
    try {
      const res = await fetch(
        `https://v2.jokeapi.dev/joke/${catName}?blacklistFlags=${flags}`
      );
      const json = await res.json();
      const { category, joke, setup, delivery, type } = json;
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View>
        <Box>
          {/* READ FIRST DOCUMENT */}
          <Text style={styles.mainTitle}>{name}</Text>
          <Flex
            paddingY={2}
            justifyContent="space-between"
            direction="row"
            alignItems="center"
          >
            <Text style={styles.subTitle}>Read here to avoid hatred</Text>
            <Button
              style={styles.read}
              rounded="full"
              onPress={() => alert("sdfsd")}
            >
              Read
            </Button>
          </Flex>

          {/* SELECT TWO WAY JOKE OR NOT*/}
          <Text style={styles.mainTitle}>Select your joke line:</Text>
          <Flex
            justifyContent="space-between"
            direction="row"
            alignItems="center"
          >
            <Text style={styles.subTitle}>Two way</Text>
            <Switch
              trackColor={{ true: colors.secondary }}
              onValueChange={(twoWays) => setJokeWays(twoWays)}
            />
          </Flex>

          {/* SELECT CATEGORY JOKE*/}
          <Text style={styles.mainTitle}>Select your joke category:</Text>
          {categorties.map((theCategory) => (
            <Flex
              key={theCategory.catId}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              paddingY="3"
            >
              <View>
                <Text style={styles.subTitle}>{theCategory.catName}</Text>
                <Text style={styles.subTitle2}>
                  {theCategory.catId === 600
                    ? "*Only available when Ber months"
                    : ""}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Result Joke", result);
                  sample(theCategory.catName, flags, theWays);
                }}
              >
                <Center size="12" bg={colors.secondary} rounded="full">
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color={colors.mainBackground}
                  />
                </Center>
              </TouchableOpacity>
            </Flex>
          ))}

          {/* CONSTRUCTION OF JOKE */}
          <Text style={styles.mainTitle}>Your construction of joke:</Text>
          <Flex
            justifyContent="space-between"
            direction="row"
            alignItems="center"
          >
            <View style={styles.construction}>
              <Text
                style={styles.subTitle}
              >{`${name} | ${theWays} | Category`}</Text>
            </View>
          </Flex>
        </Box>
      </View>
    </>
  );
};

export default GenerateJokeEvent;

const styles = StyleSheet.create({
  mainTitle: {
    marginBottom: 10,
    fontSize: fontSizes.header,
    fontFamily: "robotoMedium",
    color: colors.primary,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  subTitle: {
    fontFamily: "robotoRegular",
    fontSize: fontSizes.regular,
    marginLeft: 15,
  },
  subTitle2: {
    fontFamily: "robotoLight",
    fontSize: fontSizes.regular,
    marginLeft: 15,
  },
  read: {
    backgroundColor: colors.secondary,
  },
  construction: {
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
});
