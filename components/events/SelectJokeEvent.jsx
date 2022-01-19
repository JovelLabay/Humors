// REACT
import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// NATIVE BASE
import {
  Center,
  Input,
  VStack,
  Heading,
  Flex,
  Divider,
  Avatar,
} from "native-base";

// ICONS
import { MaterialIcons } from "@expo/vector-icons";

// STYLES
import { colors, fontSizes } from "../../styles/Styles";

const JokeApi = ({ navigation }) => {
  const flags = [
    { id: 10, name: "NSFW", flags: "nsfw" },
    { id: 20, name: "Religious", flags: "religious" },
    { id: 30, name: "Politics", flags: "political" },
    { id: 40, name: "Racist", flags: "racist" },
    { id: 50, name: "Sexist", flags: "sexist" },
    { id: 60, name: "Explicit", flags: "explicit" },
  ];

  return (
    <>
      {/* SEARCH */}
      <View>
        <TextInput
          style={styles.search}
          placeholder="Search categories here..."
        />
      </View>
      {/* SELECT FAVORTE JOKE */}
      <Text style={styles.mainTitle}>Select your favorite joke</Text>
      <VStack>
        <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
          {flags.map((theFlags) => (
            <TouchableOpacity
              key={theFlags.id}
              onPress={() => navigation.navigate("Generate Joke", theFlags)}
            >
              <Center
                height="40"
                width="100"
                bg="primary.100"
                mx="3"
                my="3"
                borderWidth="2"
                borderColor={colors.primary}
                borderRadius="2xl"
                shadow="7"
                backgroundColor={
                  theFlags.id == "10"
                    ? colors.mainBackground
                    : theFlags.id == "40"
                    ? colors.primary
                    : theFlags.id == "20"
                    ? colors.primary
                    : theFlags.id == "30"
                    ? colors.primary
                    : colors.mainBackground
                }
              >
                <Avatar bg={colors.secondary} size="lg">
                  <MaterialIcons
                    name={
                      theFlags.id == "10"
                        ? "vpn-lock"
                        : theFlags.id == "40"
                        ? "invert-colors"
                        : theFlags.id == "20"
                        ? "book"
                        : theFlags.id == "30"
                        ? "gavel"
                        : theFlags.id == "50"
                        ? "accessibility"
                        : "center-focus-strong"
                    }
                    size={24}
                    color={colors.mainBackground}
                  />
                </Avatar>
                <Heading
                  size="md"
                  color={
                    theFlags.id == "10"
                      ? colors.primary
                      : theFlags.id == "40"
                      ? colors.mainBackground
                      : theFlags.id == "20"
                      ? colors.mainBackground
                      : theFlags.id == "30"
                      ? colors.mainBackground
                      : colors.primary
                  }
                >
                  {theFlags.name}
                </Heading>
              </Center>
            </TouchableOpacity>
          ))}
        </Flex>
      </VStack>
    </>
  );
};

export default JokeApi;

// STYLESHEET
const styles = StyleSheet.create({
  search: {
    marginVertical: 15,
    borderWidth: 2,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderColor: colors.primary,
    fontFamily: "robotoRegular",
    color: colors.primary,
    fontSize: fontSizes.regular,
    width: "90%",
    alignSelf: "center",
  },
  mainTitle: {
    marginBottom: 10,
    fontSize: fontSizes.header,
    fontFamily: "robotoMedium",
    color: colors.primary,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
