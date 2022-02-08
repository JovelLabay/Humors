import React from "react";
import { Text, View, TextInput, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { authentication } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";

const LogSign = () => {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [loading, setLoading] = useState("Login");

  // SIGNIN
  const sign = () => {
    const theAuth = authentication;
    createUserWithEmailAndPassword(theAuth, email, password)
      .then((cred) => {
        const user = cred.user;
        console.log(user);
        alert("successfull");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // LOGIN
  const login = () => {
    setLoading("Loading");
    const theAuth = authentication;
    signInWithEmailAndPassword(theAuth, email, password)
      .then((cred) => {
        const user = cred.user;
        console.log(user);
        alert("successfull " + user.email);
      })
      .catch((err) => {
        alert(err.message);
        setLoading("Login");
      });
  };

  React.useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Secondary");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View>
      <Text onPress={() => navigation.goBack()}>Back</Text>
      <TextInput
        style={{ borderWidth: 1, paddingVertical: 5 }}
        value={email}
        onChangeText={(e) => setEmail(e)}
        placeholder="email"
      />
      <TextInput
        style={{ borderWidth: 1, paddingVertical: 5 }}
        value={password}
        onChangeText={(e) => setPassword(e)}
        placeholder="password"
      />
      <Button title="Signin" onPress={() => sign()} />
      <Button title={loading} onPress={() => login()} />
    </View>
  );
};

export default LogSign;
