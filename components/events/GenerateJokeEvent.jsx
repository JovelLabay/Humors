// REACT

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  StatusBar,
} from "react-native";

// NATIVE BASE
import { Box, Flex, Button, Switch, Center, ScrollView } from "native-base";

// ICONS
import { MaterialIcons } from "@expo/vector-icons";

// STYLES
import { colors, fontSizes } from "../../styles/Styles";
import ResultJokeEvent from "./ResultJokeEvent";

const GenerateJokeEvent = ({ route }) => {
  // SELECT YOUR JOKE
  const { flags, name } = route.params;

  // JOKE WAYS
  const [jokeWays, setJokeWays] = useState("");
  let theWays =
    jokeWays === true
      ? { jokeWaysData: "&type=twopart", theWaysName: "Double part joke" }
      : { jokeWaysData: "&type=single", theWaysName: "Single joke" };

  // RESULT JOKE
  const [modalResultJoke, setModalResultJoke] = useState(false);
  const [outComeResultCategory, setOutComeResultCategory] = useState("");
  const [outComeResultFlags, setOutComeResultFlags] = useState("");
  const [outComeResultSafe, setOutComeResultSafe] = useState("");

  //THE JOKES OR DELIVERY
  const [theJokes, setTheJokes] = useState("");

  // CATEGORIES
  const categorties = [
    { catId: 100, catName: "Programming" },
    { catId: 200, catName: "Misc" },
    { catId: 300, catName: "Dark" },
    { catId: 400, catName: "Pun" },
    { catId: 500, catName: "Spooky" },
    { catId: 600, catName: "Christmas" },
  ];

  // JOKE FETCH
  const sample = async (catName, flags, theWays) => {
    try {
      const res = await fetch(
        `https://v2.jokeapi.dev/joke/${catName}?blacklistFlags=${flags}${theWays.jokeWaysData}`
      );
      const json = await res.json();
      const { category, safe, joke, delivery, setup, type } = json;
      // CATEGORY
      setOutComeResultCategory(category);
      // FLAGS
      setOutComeResultFlags(flags);
      // SAFE
      setOutComeResultSafe(
        safe === true ? "Safe for minors" : "Parental guidance"
      );
      // THE JOKES OR DELIVERY
      const lolo = type === "twopart" ? setup + "\n" + delivery : joke;
      setTheJokes(lolo);
    } catch (error) {
      setTimeout(() => {
        alert(error.message);
      }, 2000);
    }
  };

  // BER MONTHS
  const berMonths = 12;

  return (
    <>
      <Box>
        {/* READ FIRST DOCUMENT */}
        <Text style={styles.mainTitleGenerate}>{name}</Text>
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
          <Text style={styles.subTitle}>{theWays.theWaysName}</Text>
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
            </View>
            <TouchableOpacity
              onPress={() => {
                setModalResultJoke(true);
                // sample(theCategory.catName, flags, theWays);
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
            >{`${name} | ${theWays.theWaysName} | Tap the right chevron`}</Text>
          </View>
        </Flex>

        {/* GENERATE RANDOM */}

        <Button rounded="full" size="10" style={styles.randomBTN}>
          Get joke randomly
        </Button>
      </Box>

      {/* RESULT JOKE */}
      <StatusBar hidden={modalResultJoke} />
      <Modal visible={modalResultJoke} animationType="slide">
        <View style={{ flex: 1, backgroundColor: colors.mainBackground }}>
          <ScrollView>
            <ResultJokeEvent
              setModalResultJoke={setModalResultJoke}
              outComeResultCategory={outComeResultCategory}
              setOutComeResultCategory={setOutComeResultCategory}
              outComeResultFlags={outComeResultFlags}
              theWays={theWays}
              outComeResultSafe={outComeResultSafe}
              theJokes={theJokes}
            />
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

export default GenerateJokeEvent;

const styles = StyleSheet.create({
  mainTitleGenerate: {
    borderColor: colors.secondary,
    borderWidth: 2,
    textAlign: "center",
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: fontSizes.title,
    fontFamily: "robotoMedium",
    color: colors.secondary,
    marginVertical: 10,
    marginHorizontal: 10,
  },
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
    color: colors.primary,
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
  randomBTN: {
    marginVertical: 20,
    width: "70%",
    alignSelf: "center",
    backgroundColor: colors.secondary,
  },
});
