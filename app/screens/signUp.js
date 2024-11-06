import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import Styles from "../styles/loginStyles";
import { useRouter } from "expo-router";

const signUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    await AsyncStorage.setItem("username", username);
    await AsyncStorage.setItem("password", password);
    Alert.alert("Success", "You are registered!");
    router.push("/");
  };
  return (
    <LinearGradient
      colors={["#5e90b1", "#151d49"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={Styles.container}
    >
      <View style={Styles.container}>
        <Text style={styles.modalText}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={Styles.Login} onPress={handleSignup}>
        <Text style={Styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default signUp;

const styles = StyleSheet.create({});
