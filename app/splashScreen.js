// CustomSplashScreen.js
import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles/SplashScreen";

const CustomSplashScreen = ({ onFinish }) => {
  useEffect(() => {
    // Simulate loading time before calling onFinish
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // Display splash for 2 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <LinearGradient
      colors={["#5e90b1", "#151d49"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <Image source={require("../assets/icon.png")} style={styles.logo} />
    </LinearGradient>
  );
};

export default CustomSplashScreen;
