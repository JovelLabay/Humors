import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { HStack, Badge, Box, Image, AspectRatio } from "native-base";

// STYLES
import { colors, fontSizes } from "../../styles/Styles";

import { LinearGradient } from "expo-linear-gradient";

// BACKGROUND IMAGES
const christmas = require("../../assets/images/Jokes/Christmas.jpg");
const dark = require("../../assets/images/Jokes/Dark.jpg");
const misc = require("../../assets/images/Jokes/Misc.jpg");
const programming = require("../../assets/images/Jokes/Programming.jpg");
const pun = require("../../assets/images/Jokes/Pun.jpg");
const spooky = require("../../assets/images/Jokes/Spooky.jpg");

const logoImage = require("../../assets/Humors.png");

const category = [
  { id: 10, name: "Programming" },
  { id: 20, name: "Misc" },
  { id: 30, name: "Dark" },
  { id: 40, name: "Pun" },
  { id: 50, name: "Spooky" },
  { id: 60, name: "Christmas" },
];

export default function JokesCategory({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <HStack justifyContent="center">
          {category.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate("Result Joke", item)}
            >
              <Box
                w={120}
                h={200}
                rounded="2xl"
                mx={2}
                my={3}
                overflow="hidden"
                borderWidth="4"
                borderColor={colors.secondary}
              >
                <Badge>{item.name}</Badge>
                <ImageBackground
                  source={
                    item.name === "Programming"
                      ? programming
                      : item.name === "Misc"
                      ? misc
                      : item.name === "Dark"
                      ? dark
                      : item.name === "Pun"
                      ? pun
                      : item.name === "Spooky"
                      ? spooky
                      : christmas
                  }
                  style={{ height: "100%" }}
                  resizeMode="cover"
                />
              </Box>
            </TouchableOpacity>
          ))}
        </HStack>
      </ScrollView>
      <Box h="auto" my={5}>
        <LinearGradient
          colors={[colors.secondary, colors.mainBackground]}
          x={0}
          y={0}
          style={{ flex: 1 }}
        >
          <View style={styles.titleLogo}>
            <HStack alignItems="center">
              <Image
                alt="logo"
                source={logoImage}
                borderRadius={100}
                size="12"
              />
              <Text style={styles.title}>Inspirations</Text>
            </HStack>
          </View>
          <ScrollView horizontal={true}>
            <TouchableOpacity>
              <Box
                w={250}
                h={300}
                rounded="2xl"
                mx={3}
                mb={3}
                overflow="hidden"
                borderWidth="2"
                borderColor={colors.mainBackground}
              >
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                      source={{
                        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                      }}
                      alt="image"
                    />
                  </AspectRatio>
                </Box>
                <Box>
                  <Text style={styles.qheader}>This is a sample text</Text>
                  <Text style={styles.qQuote} numberOfLines={5}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita impedit rem cupiditate recusandae mollitia? Quidem
                    a, consectetur nulla voluptate architecto sed illo ducimus
                    omnis ab perspiciatis, officiis ex, libero sequi!
                  </Text>
                  <View style={styles.sama}>
                    <Text style={styles.qheader}>Tomas Leni</Text>
                  </View>
                </Box>
              </Box>
            </TouchableOpacity>
          </ScrollView>
        </LinearGradient>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  // TITLE
  title: {
    fontSize: fontSizes.title,
    fontFamily: "robotoBold",
    color: colors.primary,
    marginHorizontal: 5,
  },
  titleLogo: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  // QUOTE
  qheader: {
    fontSize: fontSizes.regular,
    fontFamily: "robotoMedium",
    marginHorizontal: 3,
    marginVertical: 3,
  },
  qQuote: {
    fontSize: fontSizes.regular,
    fontFamily: "robotoLight",
    marginHorizontal: 3,
    marginVertical: 3,
  },
  sama: {
    marginHorizontal: 3,
    marginVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 50,
    backgroundColor: colors.secondary,
    alignSelf: "flex-start",
  },
});
