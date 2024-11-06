import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 80, // Add a small margin to the button
    paddingHorizontal: 30,
    gap: 20, // Optional: Add padding for button positioning
  },
  Login: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 100,
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
  },
  buttonText: {
    color: "#0c4160",
    fontSize: 20,
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#5e90b1", // Button background color
    padding: 10,
    borderRadius: 5,
  },
});

export default styles;
