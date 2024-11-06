import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back, !</Text>
      <Link href="/"> Back</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
