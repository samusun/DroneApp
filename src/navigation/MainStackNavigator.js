import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useContext } from "react";
import SomeContext from "../../someContext";

import HomeScreen from "../../components/HomeScreen";
import Teori from "../../components/Teori";
import Prov from "../../components/Prov";
import Wiki from "../../components/Wiki";
import Profil from "../../components/Profil";
import Mer from "../../components/Mer";
import Quiz from "../../components/Quiz";

const Stack = createStackNavigator();

function MainStackNavigator() {
  const someValue = useContext(SomeContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={HomeScreen} />
        <Stack.Screen name="Teori" component={Teori} />
        <Stack.Screen name="Prov" component={Prov} />
        <Stack.Screen name="Wiki" component={Wiki} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Mer" component={Mer} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
