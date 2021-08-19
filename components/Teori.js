import React from "react";
import { StyleSheet, View, Text, TouchableOpacity} from "react-native";
import Flygsäkerhet from "../assets/Flygsäkerhet.js";
const s = require("../styles");

import SomeContext from "../someContext";

export default function Home(props) {
  const [choice, setChoice] = React.useState(true);
  const [topic, setTopic] = React.useState(null);
  const { navigation } = props;

  if (choice) {
    return (
      <View style={s.container}>
        <View style={s.header2}>
          <Text style={s.text}>Välj ett område att börja på</Text>
        </View>
        <View>
          <TouchableOpacity
            style={s.buttonLarge}
            onPress={() => (setChoice(false), setTopic("Flygsäkerhet"))}
          >
            <Text style={s.buttonText}>Flygsäkerhet</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={s.buttonLarge}
            onPress={() => navigation.navigate("Luftrumsrestriktioner")}
          >
            <Text style={s.buttonText}>Luftrumsrestriktioner</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={s.buttonLarge}
            onPress={() => navigation.navigate("Luftrumsregleringar")}
          >
            <Text style={s.buttonText}>Luftrumsregleringar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={s.buttonStart}
          onPress={() => navigation.navigate("Start")}
        >
          <Text style={s.text}>Gå till start</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View>
      <Flygsäkerhet />
    </View>
  );
}
