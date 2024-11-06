import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  top_Container: {
    alignItems: "center",
    gap: 10,
    marginTop: 150,
  },
  text: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "800",
    fontSize: 50,
  },
  h2: {
    color: "#fff",
    fontSize: 15,
  },
  h3: {
    color: "#fff",
    textAlign: "left",
    fontSize: 18,
    marginLeft: 20,
  },
  h3Cont: {
    marginTop: 120,
    width: "100%",
  },
  imageUser: {
    width: 55,
    height: 55,
    borderRadius: 25,
  },
  userCont: {
    flexDirection: "row",
    gap: 20, // Adjusted gap for user image and text
    marginLeft: 60,
    marginTop: 20, // Reduce spacing between users
    alignItems: "center",
  },
  user: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
});

export default styles;
