// REACT
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActionSheetIOS,
} from "react-native";

import { Avatar, Box, HStack, Skeleton } from "native-base";

import { Entypo } from "@expo/vector-icons";

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

const LovedJokeResult = ({ route }) => {
  const { name } = route.params;

  // READ DATA
  const [data, setData] = React.useState([]);
  const colRef = collection(storage, name);
  React.useEffect(() => {
    onSnapshot(
      colRef,
      (results) => {
        let theJokes = [];
        results.docs.forEach((result) => {
          theJokes.push({ ...result.data(), id: result.id });
        });
        setData(theJokes);
      },
      (err) => console.log(err)
    );
  }, []);

  const bugok = (id, joke, ways, flags) => {
    const mama = doc(storage, name, id);
    deleteDoc(mama).then(() => alert(`joke has been elemenated`));
  };

  const actionLoveJoke = (id) => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: id + " Yawa ka",
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
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          // bugok(id);
        } else if (buttonIndex === 2) {
          alert("copy");
        } else if (buttonIndex === 3) {
          alert("save");
        } else {
          alert("share");
        }
      }
    );
  };

  if (data.length === 0)
    return (
      <View>
        <Skeleton.Text px="4" />
      </View>
    );
  else
    return (
      <View>
        {data.map((item) => {
          return (
            <Box key={item.id} style={styles.jokes}>
              <Avatar>gdfg</Avatar>
              <Box width="75%">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Libero, suscipit?
              </Box>
              <TouchableOpacity
                onPress={() => {
                  const { id } = item;
                  actionLoveJoke(id);
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
};

const styles = StyleSheet.create({
  jokes: {
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    height: 100,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default LovedJokeResult;
