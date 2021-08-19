"use strict";
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },

  text: {
    color: "rgba(45, 6, 37, 1)",
    fontSize: 24,
    fontWeight: "bold",
  },
  header: {
    color: "rgba(45, 6, 37, 1)",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80,
  },
  header2: {
    fontSize: 60,
    backgroundColor: "rgba(189, 239, 83, 1)",
    color: "rgba(45, 6, 37, 1)",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 50,
    paddingLeft: 50,
  },
  p: {
    color: "#101010",
    fontSize: 16,
  },
  buttonSmall: {
    backgroundColor: "rgba(189, 239, 83, 1)",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  buttonLarge: {
    backgroundColor: "rgba(241, 241, 241, 1)",
    borderRadius: 15,
    width: 300,
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "rgba(45, 6, 37, 1)",
  },
  buttonTextCenter: {
    color: "white",
    fontSize: 20,
    color: "rgba(45, 6, 37, 1)",
  },
  buttonStart: {
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    fontSize: 20,
    color: "rgba(45, 6, 37, 1)",
    backgroundColor: "rgba(189, 239, 83, 1)",
    borderRadius: 15,
    width: 300,
    padding: 10,
    margin: 10,
  },

  tinyLogo: {
    width: 350,
    height: 350,
  },
  scroll: {
    backgroundColor: "gray",
  },

  wikiList: {
    margin: 5,
  },
  listItem: {
    fontSize: 20,
    margin: 10,
    backgroundColor: "pink",
  },
  hem: {
    backgroundColor: "rgba(189, 239, 83, 1)",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    position: "absolute",
    bottom: 0,
  },

  footer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-between",
  },
});
