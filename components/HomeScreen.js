import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
const s = require("../styles");

export default function Home(props) {
  const { navigation } = props;
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.text}>Drönar-appen</Text>
        <Text style={s.p}>Lär dig allt om drönare</Text>
      </View>
      <Image
        style={s.tinyLogo}
        source={require("../assets/adaptive-icon.png")}
      />
      <View style={s.footer}>
        <TouchableOpacity
          style={s.buttonSmall}
          onPress={() => navigation.navigate("Teori")}
        >
          <Text style={s.buttonText}>Teori</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.buttonSmall}
          onPress={() => navigation.navigate("Prov")}
        >
          <Text style={s.buttonText}>Prov</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.buttonSmall}
          onPress={() => navigation.navigate("Wiki")}
        >
          <Text style={s.buttonText}>Wiki</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.buttonSmall}
          onPress={() => navigation.navigate("Profil")}
        >
          <Text style={s.buttonText}>Profil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.buttonSmall}
          onPress={() => navigation.navigate("Mer")}
        >
          <Text style={s.buttonText}>Mer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
