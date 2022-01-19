// REACT
import React, { useState } from "react";
import { Text } from "react-native";

// NATIVE BASE
import { Box, Flex, Spinner, HStack, Heading } from "native-base";

// STYLES
import { colors, fontSizes } from "../styles/Styles";

// AXIOS
import axios from "axios";

const Menus = ({ styles }) => {
  // BIBLE VERSE API
  const [bibleVerse, setBibleVerse] = useState("");
  const [bibleBook, setBibleBook] = useState("");

  let options = {
    method: "GET",
    url: "https://bible-verse-of-the-day.p.rapidapi.com/",
    headers: {
      "x-rapidapi-host": "bible-verse-of-the-day.p.rapidapi.com",
      "x-rapidapi-key": "c2b0993224msh0961482e3933db6p17f5c2jsnaf06dfbc4de1",
    },
  };

  axios
    .request()
    .then(function (response) {
      const { book, chapter, number, testament, verse } =
        response.data.contents;
      setBibleVerse(verse);
      setBibleBook(`${book} ${chapter} : ${number}`);
      console.log(verse);
    })
    .catch(function (error) {
      console.error(error.message);
    });
  return (
    <>
      <Box
        borderColor={colors.primary}
        borderWidth="2"
        px="7"
        py="5"
        mx="15"
        rounded="xl"
        bg="success.50"
        shadow="5"
      >
        <Text style={styles.mainDesBible}>
          {bibleVerse === "" ? (
            <HStack space={2} alignItems="center">
              <Spinner
                accessibilityLabel="Loading posts"
                color={colors.primary}
              />
              <Heading color={colors.primary} fontSize={fontSizes.regular}>
                Bible is unavailable.
              </Heading>
            </HStack>
          ) : (
            bibleVerse
          )}
        </Text>
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt="2"
        >
          <Text style={styles.mainAuthBible}>
            {bibleVerse === "" ? "Jesus is not around." : bibleBook}
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default Menus;
