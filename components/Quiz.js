import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
const s = require("../styles");

export default function Quiz(props) {
  const { navigation } = props;
  return (
    <View style={s.container}>
      <Text style={s.text}>Här startar ditt QUIZ</Text>
      <TouchableOpacity
        style={s.buttonSmall}
        onPress={() => navigation.navigate("Start")}
      >
        <Text style={s.buttonText}>Gå till start</Text>
      </TouchableOpacity>
    </View>
  );
}

/* Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  } */
