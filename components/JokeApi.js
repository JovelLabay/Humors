// REACT
import React, { useStae } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
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

// EXPO
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// STYLES
import { colors, fontSizes } from "../styles/Styles";

// ICONS
import { MaterialIcons } from "@expo/vector-icons";

// COMPONENTS
import MainNav from "../components/MainNav";
import { color } from "react-native-reanimated";

function Momo({ navigation }) {
  const flags = [
    { id: 10, name: "NSFW", data: "nsfw" },
    { id: 20, name: "Religious", data: "religious " },
    { id: 30, name: "Politics", data: "political " },
    { id: 40, name: "Racist", data: "racist " },
    { id: 50, name: "Sexist", data: "sexist " },
    { id: 60, name: "Explicit", data: "explicit" },
  ];

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("Mama")}>dsfsdfs</Text>
      <VStack>
        <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
          {flags.map((theFlags) => (
            <TouchableOpacity key={theFlags.id}>
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
    </View>
  );
}
function Mama({ navigation }) {
  return (
    <View style={{ paddingTop: 50 }}>
      <Text onPress={() => navigation.goBack()}>sdlkfdghfghdfghfjsd</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function JokeApi() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Momo" component={Momo} />
      <Stack.Screen name="Mama" component={Mama} />
    </Stack.Navigator>
  );
}

// STYLESHEET
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
  icons: {
    backgroundColor: colors.secondary,
  },
});
