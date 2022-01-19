// REACT
import React, { useEffect } from "react";
import { View, Text } from "react-native";

const ResultJokeEvent = ({ route }) => {
  const { category } = route.params;

  return (
    <View>
      <Text>{category}</Text>
    </View>
  );
};

export default ResultJokeEvent;
