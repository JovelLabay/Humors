// REACT
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Share,
  Alert,
} from "react-native";

// ICONS
import { MaterialIcons, EvilIcons, FontAwesome } from "@expo/vector-icons";

// NATIVE BASE
import { Center } from "native-base";

// STYLES
import { colors, fontSizes } from "../../styles/Styles";

// UTILITIES
import appJson from "../../app.json";

// LOADER
import { GenerateCustomJoke } from "../Loader/Loader";

// FIREBASE FIRESTORE
import { storage } from "../../firebase/firebase.config";
import { collection, addDoc } from "firebase/firestore";

// BACKGROUND IMAGES
const christmas = require("../../assets/images/Jokes/Christmas.jpg");
const dark = require("../../assets/images/Jokes/Dark.jpg");
const misc = require("../../assets/images/Jokes/Misc.jpg");
const programming = require("../../assets/images/Jokes/Programming.jpg");
const pun = require("../../assets/images/Jokes/Pun.jpg");
const spooky = require("../../assets/images/Jokes/Spooky.jpg");

const ResultJokeEvent = ({
  setModalResultJoke,
  outComeResultCategory,
  setOutComeResultCategory,
  outComeResultFlags,
  theWays,
  outComeResultSafe,
  theJokes,
  error,
  setError,
}) => {
  // SHARE
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${theJokes}\n\nDeveloped by: ${appJson.expo.name}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  // TIMER
  if (error === true) {
    setTimeout(() => {
      Alert.alert("Netwrok request failed", "The connection has time out.", [
        {
          text: "Try Again",
          onPress: () => {
            setModalResultJoke(false),
              setError(false),
              setOutComeResultCategory("");
          },
        },
      ]);
    }, 2000);
  }

  // LIKE ME
  const [like, setLike] = useState("heart-o");
  const liked = async () => {
    // PASS DATA
    const category = outComeResultCategory;
    const joke = theJokes;
    const flags = outComeResultFlags;
    const ways = theWays.theWaysName;
    const safe = outComeResultSafe;
    try {
      await addDoc(collection(storage, category), {
        joke: joke,
        flags: flags,
        ways: ways,
        safe: safe,
      });
      alert("saved");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {/* TOP CONTENT */}
      {outComeResultCategory === "" ? (
        <GenerateCustomJoke />
      ) : (
        <>
          <View style={styles.top}>
            <ImageBackground
              style={styles.backgrounImage}
              source={
                outComeResultCategory === "Christmas"
                  ? christmas
                  : outComeResultCategory === "Dark"
                  ? dark
                  : outComeResultCategory === "Misc"
                  ? misc
                  : outComeResultCategory === "Programming"
                  ? programming
                  : outComeResultCategory === " Pun"
                  ? pun
                  : spooky
              }
              resizeMode="cover"
            >
              <View style={styles.theTops}>
                <TouchableOpacity
                  onPress={() => {
                    setModalResultJoke(false);
                    setOutComeResultCategory("");
                  }}
                >
                  <Center
                    size="10"
                    backgroundColor={colors.mainBackground}
                    rounded="full"
                  >
                    <MaterialIcons
                      name="close"
                      size={24}
                      color={colors.primary}
                    />
                  </Center>
                </TouchableOpacity>

                {/* TITLE FOR CATEGORY */}
                <Text style={styles.title2}>{outComeResultCategory}sfsdf</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.joke}>{theJokes}sdfsd</Text>

            {/* FLAGS */}
            <View style={styles.flags}>
              <Text style={styles.flagsTitle}>Favorite joke: </Text>
              <Text style={styles.flagsDes}>{outComeResultFlags}sdfsd</Text>
            </View>

            {/* THE WAYS */}
            <View style={styles.flags}>
              <Text style={styles.flagsTitle}>Joke line: </Text>
              <Text style={styles.flagsDes}>{theWays.theWaysName}dsfsdf</Text>
            </View>

            {/* THE CAUTION */}
            <View style={styles.flags}>
              <Text style={styles.flagsTitle}>Joke caution: </Text>
              <Text style={styles.flagsDes}>{outComeResultSafe}fsdf</Text>
            </View>

            <View style={styles.shares}>
              <TouchableOpacity onPress={() => onShare()}>
                <Center
                  size="12"
                  bg={colors.secondary}
                  marginX="2.5"
                  rounded="full"
                >
                  <EvilIcons
                    name="share-google"
                    size={30}
                    color={colors.mainBackground}
                  />
                </Center>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  liked();
                  setLike("heart");
                }}
              >
                <Center
                  size="12"
                  bg={colors.secondary}
                  rounded="full"
                  marginX="2.5"
                >
                  <FontAwesome
                    name={like}
                    size={20}
                    color={colors.mainBackground}
                  />
                </Center>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default ResultJokeEvent;

// STYLESHEET
const styles = StyleSheet.create({
  // TOP
  top: {
    height: 300,
  },
  backgrounImage: {
    height: 300,
  },
  theTops: {
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // TITLE
  title: {
    color: colors.mainBackground,
    fontSize: fontSizes.title,
    fontFamily: "robotoBold",
    marginBottom: 10,
    marginLeft: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 5,
    shadowRadius: 5,
    shadowColor: colors.primary,
  },
  title2: {
    color: colors.mainBackground,
    fontSize: fontSizes.title,
    fontFamily: "robotoBold",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 5,
    shadowRadius: 5,
    shadowColor: colors.primary,
  },
  // JOKE
  joke: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontSize: fontSizes.header,
    color: colors.primary,
    fontFamily: "robotoRegular",
  },
  // FLAG
  flags: {
    marginVertical: 10,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginHorizontal: 30,
    borderColor: colors.primary,
    borderWidth: 2,
    flexDirection: "row",
  },
  flagsTitle: {
    fontSize: fontSizes.regular,
    color: colors.primary,
    fontFamily: "robotoRegular",
  },
  flagsDes: {
    fontSize: fontSizes.regular,
    color: colors.secondary,
    fontFamily: "robotoMedium",
  },
  // SHARES
  shares: {
    flexDirection: "row",
    marginVertical: 30,
    marginHorizontal: 30,
  },
});
