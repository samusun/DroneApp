import React from "react";
import { View, Text, TouchableOpacity, FlatList, Button, ToastAndroid } from "react-native";
import questionData from "../data/provData";
import { RowItem } from "../components/RowItem";
const s = require("../styles");
import { LinearGradient } from "expo-linear-gradient";

export default function Prov() {
const showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Jag är en Android",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  return (
    <View style={s.container}>
      <Text style={s.header2}>Android testing</Text>

          <LinearGradient
            colors={["rgba(237, 114, 0, 1)", "rgba(255, 199, 0, 1)"]}
            style={s.buttonLarge}
          > 
            <TouchableOpacity onPress={() => showToast()}>
            <Text> Tryck på mig </Text>
            </TouchableOpacity>
          </LinearGradient>
    </View>
  );
}


/*
import React from "react";
import { View, Text, TouchableOpacity, FlatList, Button } from "react-native";
import questionData from "../data/provData";
import { RowItem } from "../components/RowItem";
const s = require("../styles");
import { LinearGradient } from "expo-linear-gradient";

export default function Prov() {
  const [topic, onChangeTopic] = React.useState(null);
  const [question, onChangeQuestion] = React.useState(null);
  const [answers, onChangeAnswers] = React.useState(null);
  const [count, onChangeCount] = React.useState(0);
  const [tCount, onChangeTCount] = React.useState(0);
  const [qCount, onChangeQCount] = React.useState(0);

  function checkAnswer(item) {
    if (item.correct) {
      onChangeCount(count + 1);
    }
    onChangeQCount(qCount + 1);
    onChangeQuestion(questionData[tCount].frågor[qCount].fråga);
  }

  function renderQuiz(x) {
    onChangeQCount(0);
    onChangeTopic("Du valde ämnet " + questionData[1].topic);
  }


  return (
    <View style={s.container}>
      <Text style={s.header2}>Prov</Text>
      <Text>Rätta svar: {count}</Text>

      <FlatList
        data={questionData}
        renderItem={({ item }) => (
          <LinearGradient
            colors={["rgba(237, 114, 0, 1)", "rgba(255, 199, 0, 1)"]}
            style={s.buttonLarge}
          >
            <TouchableOpacity onPress={() => renderQuiz()}>
              <Text>{item.topic} </Text>
            </TouchableOpacity>
          </LinearGradient>
        )}
        keyExtractor={(item, index) => index.toString()}
      />


      <Text>{topic}</Text>
      <Text>{question}</Text>

      <FlatList
        data={questionData[qCount].frågor[qCount].svar}
        renderItem={({ item }) => (
          <LinearGradient
            colors={["rgba(237, 114, 0, 1)", "rgba(255, 199, 0, 1)"]}
            style={s.buttonLarge}
          >
            <TouchableOpacity onPress={() => checkAnswer(item), onChangeQCount(1)}>
              <Text>{item.text}</Text>
            </TouchableOpacity>
          </LinearGradient>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
*/