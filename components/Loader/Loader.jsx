import React from "react";
import { View, Text, StyleSheet } from "react-native";

// STYLES
import { colors } from "../../styles/Styles";

const GenerateCustomJoke = () => {
  return (
    <View>
      <View style={{ backgroundColor: "#C8C8C8", height: 300 }}>
        <View
          style={{
            marginRight: 30,
            marginTop: 30,
            width: 80,
            height: 40,
            borderRadius: 10,
            backgroundColor: "#E0E0E0",
            alignSelf: "flex-end",
          }}
        ></View>
      </View>
      <View>
        <View
          style={{
            height: 30,
            width: "80%",
            backgroundColor: "#E0E0E0",
            marginVertical: 15,
            marginLeft: 20,
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            height: 30,
            width: "60%",
            backgroundColor: "#E0E0E0",
            marginVertical: 10,
            marginLeft: 20,
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            height: 60,
            width: "70%",
            backgroundColor: "#E0E0E0",
            alignSelf: "center",
            marginVertical: 30,
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            height: 60,
            width: "70%",
            backgroundColor: "#E0E0E0",
            alignSelf: "center",
            marginBottom: 30,
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            height: 30,
            width: 60,
            backgroundColor: "#E0E0E0",
            marginVertical: 10,
            marginLeft: 20,
            borderRadius: 10,
          }}
        ></View>
      </View>
    </View>
  );
};

export { GenerateCustomJoke };
