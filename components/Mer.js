import React, { useState } from "react";
import { View, Switch, StyleSheet, Text, Button, FlatList, Image } from "react-native";

const About = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [color, setColor] = useState("white");
  const [planes, setPlanes] = useState('https://cdn2.thecatapi.com/images/3KG57GfMW.jpg')
  function toggleSwitch () {
      isEnabled ? setColor("white") : setColor("pink")
       setIsEnabled(previousState => !previousState)
  }

    async function loadPlanes() {
      await fetch(`https://api.thecatapi.com/v1/images/search`, {
        headers: {
          "x-api-key": "api_key=edeee3b2-310f-42c4-a65f-06368395ad4d",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          setPlanes(result);
        });
    }


  return (
      <View style={{
          backgroundColor: color,
         flex: 1,
         alignItems: "center",
         justifyContent: "center", }} >

         <View> 
         <Text> Bakgrundsfärg </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Button title="Load new cat" onPress={() => loadPlanes()} />
       <FlatList
        data={planes}
        renderItem={({ item }) => (
          <Image
         style={{
            resizeMode: "cover",
            height: 150,
            width: 300
          }}
        source={{
          uri: item.url,
        }}
      />
        )}
      />
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});

export default About;