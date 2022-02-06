import React, { useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { StoreContext } from "../StoreContext";

const Auth = () => {
  const { logEmail } = useContext(StoreContext);

  return (
    <View>
      <Text>User: {logEmail}</Text>
    </View>
  );
};

export default Auth;
