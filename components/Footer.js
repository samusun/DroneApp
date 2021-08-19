import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import SomeContext from "../someContext";

export default function Footer(props) {
  const { someValue, setSomeValue } = useContext(SomeContext);
  const { navigation } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Teori")}
      >
        <Text style={styles.buttonText}>Teori</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setSomeValue("Prov")}
      >
        <Text style={styles.buttonText}>Prov</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate({ someValue });
        }}
      >
        <Text style={styles.buttonText}>Wiki</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Profil")}
      >
        <Text style={styles.buttonText}>Profil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Mer")}
      >
        <Text style={styles.buttonText}>Mer</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 75,
    height: 40,
    borderRadius: 5,
    padding: 2,
    margin: 2,
  },
  buttonText: {
    fontSize: 15,
    color: "#fff",
  },
});

/* import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Footer(props) {
  const { navigation } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Teori")}
      >
        <Text style={styles.buttonText}>Teori</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Prov")}
      >
        <Text style={styles.buttonText}>Prov</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Wiki")}
      >
        <Text style={styles.buttonText}>Wiki</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Profil")}
      >
        <Text style={styles.buttonText}>Profil</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("Mer")}
      >
        <Text style={styles.buttonText}>Mer</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  text: {
    color: "#101010",
    fontSize: 15,
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 75,
    height: 40,
    borderRadius: 5,
    padding: 2,
    margin: 2,
  },
  buttonText: {
    fontSize: 15,
    color: "#fff",
  },
});

*/
