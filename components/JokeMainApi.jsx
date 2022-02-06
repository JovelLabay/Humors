// REACT
import React, { useState, useEffect, useContext } from "react";
import { Text, TouchableOpacity } from "react-native";

// NATIVE BASE
import { Box, Flex, Center, Spinner, HStack, Heading } from "native-base";

// ICONS
import { MaterialIcons } from "@expo/vector-icons";

// STYLES
import { colors, fontSizes, jokeAPI } from "../styles/Styles";

const JokeMainApi = ({ navigation, styles }) => {
  // JOKE MAIN API
  const [jokeDes, setJokeDes] = useState("");
  const [jokeCat, setJokeCat] = useState("");

  const mainJoke = async () => {
    try {
      const res = await fetch(jokeAPI);
      const json = await res.json();

      const { category, joke, setup, delivery, type } = json;
      const lolo = type === "twopart" ? setup + "\n" + delivery : joke;

      setJokeDes(lolo);
      setJokeCat(category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // mainJoke();
  }, []);

  return (
    <>
      <Box bg={colors.primary} px="7" py="5" mx="15" rounded="xl">
        {/* THE JOKE */}
        <Text style={styles.mainDes}>
          {jokeDes === "" ? (
            <HStack space={2} alignItems="center">
              <Spinner
                accessibilityLabel="Loading posts"
                color={colors.secondary}
              />
              <Heading color={colors.secondary} fontSize={fontSizes.regular}>
                Loading
              </Heading>
            </HStack>
          ) : (
            jokeDes
          )}
        </Text>
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt="2"
        >
          {/* THE CATEGORY */}
          <Text style={styles.mainAuth}>
            {jokeCat === "" ? "- Unknowned" : `- ${jokeCat}`}
          </Text>
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
    </>
  );
};

export default JokeMainApi;
