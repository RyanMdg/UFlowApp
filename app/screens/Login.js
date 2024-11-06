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

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const storedUsername = await AsyncStorage.getItem("username");
    const storedPassword = await AsyncStorage.getItem("password");

    if (inputUsername === storedUsername && inputPassword === storedPassword) {
      await AsyncStorage.setItem("isLoggedIn", "true");
      router.push("/screens/home"); // Navigate to home screen on successful login
    } else {
      Alert.alert("Error", "Incorrect username or password.");
    }
  };
  return (
    <LinearGradient
      colors={["#5e90b1", "#151d49"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={Styles.container}
    >
      <View style={Styles.container}>
        <Text style={styles.modalText}>Log In</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={inputUsername}
          onChangeText={setInputUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={inputPassword}
          secureTextEntry
          onChangeText={setInputPassword}
        />
      </View>

      <TouchableOpacity style={Styles.Login} onPress={handleLogin}>
        <Text style={Styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({});
