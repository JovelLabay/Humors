// REACT
import React from "react";
import { View, Text } from "react-native";

// NATIVE BASE
import { Box } from "native-base";

// STYLES
import { colors, fontSizes } from "../styles/Styles";

const MainNav = () => {
  return (
    <View>
      <Box bg="primary.500">
        <Text style={{ fontSize: fontSizes.title }}>THIS IS THE NAV BAR</Text>
      </Box>
    </View>
  );
};

export default MainNav;
