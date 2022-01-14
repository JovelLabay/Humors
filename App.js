//REACT NATIVE
import React from "react";

// EXPO
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

// NAVIGATOR
import { NavigationContainer } from "@react-navigation/native";

// DRAWER
import MyDrawer from "./screens/Drawer/MyDrawer";

// NATIVE BASE
import { NativeBaseProvider } from "native-base";

// EXPORT DEFAULT
export default function App() {
  // CUSTOM FONTS
  let [fontsLoaded] = useFonts({
    robotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    robotoLight: require("./assets/fonts/Roboto-Light.ttf"),
    robotoLightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
    robotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    robotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <NativeBaseProvider>
          <MyDrawer />
        </NativeBaseProvider>
      </NavigationContainer>
    );
  }
}
