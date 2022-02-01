// REACT
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { storage } from "../../firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";

const LovedJoke = () => {
  // READ DATA
  const colRef = collection(storage, "Dark");
  getDocs(colRef)
    .then((results) => {
      let theJokes = [];
      results.docs.forEach((result) => {
        theJokes.push({ ...result.data(), id: result.id });
      });

      console.log(theJokes);
    })
    .catch((err) => {
      console.log(err.message);
    });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Sfsdf</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LovedJoke;
