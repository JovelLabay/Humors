// REACT
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActionSheetIOS,
  Alert,
} from "react-native";

import { Avatar, Box, Toast } from "native-base";

// ICONS
import { MaterialIcons } from "@expo/vector-icons";

import { Entypo } from "@expo/vector-icons";

import * as Clipboard from "expo-clipboard";
// FIREBASE
import { storage } from "../../firebase/firebase.config";
import {
  collection,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { colors, fontSizes } from "../../styles/Styles";
import { LovedJoke } from "../Loader/Loader";

const LovedJokeResult = ({ route, navigation }) => {
  const { name } = route.params;

  // READ DATA
  const [data, setData] = React.useState([]);
  const colRef = collection(storage, name);
  // useEffect(() => {
  // // onSnapshot(
  // //   colRef,
  // //   (results) => {
  // //     let theJokes = [];
  // //     results.docs.forEach((result) => {
  // //       theJokes.push({ ...result.data(), id: result.id });
  // //     });
  // //     setData(theJokes);
  // //   },
  // //   (err) => console.log(err)
  // // );
  // });

  // GET DOCS
  // getDocs(colRef).then((results) => {
  //   let theJokes = [];
  //   results.docs.forEach((result) => {
  //     theJokes.push({ ...result.data(), id: result.id });
  //   });
  //   setData(theJokes);
  // });

  // CONFIMATION TO DELETE LOVED JOKE
  const bugok = (id) => {
    const mama = doc(storage, name, id);
    deleteDoc(mama).then(() =>
      Toast.show({
        title: "Joke has been deleted successfully",
        status: "success",
        description: "unique id number: " + id,
      })
    );
  };

  // COPY TO CLIPBOARD LOVE JOKE
  const copyJoke = (joke) => {
    Clipboard.setString(joke);
  };

  // ACTION DELETE FOR LOVED JOKE
  const actionLoveJoke = (id, flags, joke) => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: `${flags} joke`,
        tintColor: colors.secondary,
        options: [
          "Close",
          "Delete",
          "Copy",
          "Save to Notes",
          "Share to Social Media",
        ],
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
        disabledButtonIndices: [3, 4],
      },
      (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            break;
          case 1:
            Alert.alert(
              "Confirm to Delete",
              `Will delete this ${flags} Joke?`,
              [
                {
                  text: "Yes",
                  onPress: () => bugok(id),
                  style: "destructive",
                },
                {
                  text: "Cancel",
                  style: "cancel",
                },
              ]
            );
            break;
          case 2:
            copyJoke(joke);
            Toast.show({
              description: "Joke was copied",
            });
            break;
          case 3:
            alert("save");
            break;
          default:
            alert("share");
        }
      }
    );
  };

  if (data.length === 0) {
    return <LovedJoke />;
  } else {
    return (
      <View>
        {data.map((item) => {
          return (
            <Box key={item.id} style={styles.jokes}>
              <Avatar size="md" bg={colors.secondary}>
                <MaterialIcons
                  name={
                    item.flags == "political"
                      ? "vpn-lock"
                      : item.flags == "sexist"
                      ? "invert-colors"
                      : item.flags == "nsfw"
                      ? "book"
                      : item.flags == "racist"
                      ? "gavel"
                      : item.flags == "explicit"
                      ? "accessibility"
                      : "center-focus-strong"
                  }
                  size={24}
                  color={colors.mainBackground}
                />
              </Avatar>
              <Box width="75%">
                <Text style={styles.text} numberOfLines={2}>
                  {item.joke}
                </Text>
                <Text style={styles.subText} numberOfLines={2}>
                  Joke line: {item.ways}
                </Text>
                <Text style={styles.subText} numberOfLines={2}>
                  Joke: caution: {item.safe}
                </Text>
                <Text style={styles.subText} numberOfLines={2}>
                  Favorite Joke: {item.flags}
                </Text>
              </Box>
              <TouchableOpacity
                onPress={() => {
                  const { id, flags, joke } = item;
                  actionLoveJoke(id, flags, joke);
                }}
              >
                <Entypo
                  name="dots-two-vertical"
                  size={24}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </Box>
          );
        })}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  jokes: {
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 110,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    paddingVertical: 2,
    fontFamily: "robotoMedium",
    color: colors.primary,
  },
  subText: {
    paddingVertical: 2,
    fontFamily: "robotoLightItalic",
    color: colors.primary,
  },
});

export default LovedJokeResult;
