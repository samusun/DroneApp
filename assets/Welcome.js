import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text>Ta drönar-körkort idag!</Text>
      <Button title="Se Mer" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
