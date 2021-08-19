import React from "react";
// JON VARFÖR KAN JAG INTE SKROLLA PÅ MIN SIDA NÄR JAG KLICKAR LÄS MER?
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from "react-native";
const s = require("../styles");
import { wikiData } from "../data/wikiData";
import ReadMore from "@fawazahmed/react-native-read-more";

export default function Home(props) {
  const { navigation } = props;
  return (
    <View>
      <Text>Wiki</Text>
      <FlatList
        data={wikiData}
        renderItem={({ item }) => (
          <SafeAreaView>
            <Text style={stylez.topic}>{item.topic}</Text>
            <ReadMore
              style={stylez.textStyle}
              seeMoreText={"Läs mer"}
              seeLessText={"Se mindre"}
              numberOfLines={2}
            >
              {item.more}
            </ReadMore>
          </SafeAreaView>
        )}
      />
      <TouchableOpacity
        style={s.buttonSmall}
        onPress={() => navigation.navigate("Start")}
      >
        <Text style={s.buttonText}>Gå tilll start</Text>
      </TouchableOpacity>
    </View>
  );
}

const stylez = StyleSheet.create({
  root: {
    padding: 10,
  },
  textStyle: {
    fontSize: 14,
  },
  topic: {
    fontWeight: "bold",
  },
});

/*const Home = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.root}>
        <ReadMore numberOfLines={3} style={styles.textStyle}>
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        </ReadMore>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  root: {
    flex: 1,
    padding: 16,
  },
  textStyle: {
    fontSize: 14,
  },
});

export default Home;
*/
