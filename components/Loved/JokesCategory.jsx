import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { HStack, Center } from "native-base";

import { colors, fontSizes } from "../../styles/Styles";

import programming from "../../assets/images/Jokes/Programming.jpg";

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
        <HStack space={3} justifyContent="center">
          {category.map((item) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Result Joke")}
            >
              <Center
                key={item.id}
                h="40"
                w="24"
                bg="primary.700"
                rounded="xl"
                shadow={3}
                marginY={5}
              ></Center>
            </TouchableOpacity>
          ))}
        </HStack>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
