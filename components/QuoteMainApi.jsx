// REACT
import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

// NATIVE BASE
import {
  Box,
  Flex,
  Center,
  HStack,
  Spinner,
  Heading,
  Badge,
} from "native-base";

// ICONS
import { MaterialIcons } from "@expo/vector-icons";

// STYLES
import { colors, fontSizes } from "../styles/Styles";

// AXIOS
const axios = require("axios").default;

const QuotemainApi = ({ navigation, styles }) => {
  // QUOTE API
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const options = {
    method: "GET",
    url: "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote",
    params: { token: "ipworld.info" },
    headers: {
      "x-rapidapi-host":
        "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
      "x-rapidapi-key": "c2b0993224msh0961482e3933db6p17f5c2jsnaf06dfbc4de1",
    },
  };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     const { author, text } = response.data;
  //     setText(text);
  //     setAuthor(author);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  return (
    <>
      <Box bg={colors.primary} px="7" py="5" mx="15" rounded="xl">
        <Text style={styles.mainDes}>
          {text === "" ? (
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
            text
          )}
        </Text>
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt="2"
        >
          <Text style={styles.mainAuth}>
            {author === "" ? "- Unknowned" : `- ${author}`}
          </Text>
          <TouchableOpacity
            disabled={true}
            onPress={() => navigation.navigate("Quote")}
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
      </Box>
    </>
  );
};

export default QuotemainApi;
