import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Ta kontroll över din säkerhet</Text>
        <Image style={styles.hero} source={require("./pics/safe.jpg")} />
        <Text style={styles.header}>
          Vad är viktigt att tänka på för en säker flygning?
        </Text>
        <Text>
          Inom luftfarten brukar man prata om situationsmedvetenhet (situational
          awareness, SA). Det är ett begrepp som innebär att man som pilot, i
          ditt fall fjärrpilot, ska ha kontroll över hela situationen –
          flygningen, luftfartyget, omgivningen, flygområdet och så vidare. Du
          ska kunna förstå vad som händer under flygningen och vad som kan
          inverka på den: andra flygare, väderförhållanden, drönarens och
          pilotens begränsningar och så vidare. Ju bättre situationsmedvetenhet,
          desto säkrare flygning.
        </Text>
        <Text style={styles.header}> Att ta hänsyn till miljön </Text>
        <Text>
          Du får inte lov att flyga din drönare hur och var som helst. Det finns
          många områden och luftrum som är stängda, antingen under vissa
          perioder eller konstant. Vissa kan du få upplåsta via appar eller
          flygtrafikledningen, men i vissa råder det alltid flygförbud. Det är
          viktigt att bekanta sig med miljön och vara insatt i sin rutt för att
          kunna flyga så säkert som möjligt. Glöm inte heller att meddela
          personer som finns i närheten om att flygningen kommer att ske. Mer om
          detta kan du läsa om i kapitel 5: Operativa procedurer.
        </Text>
        <Text style={styles.header}>
          Att se till att vara frisk och fokuserad
        </Text>
        <Text>
          Du som är fjärrpilot måste vara nykter och utvilad när du ska flyga.
          Att dricka alkohol, använda droger eller mediciner som kan påverka
          prestationsförmågan under flygning är inte tillåtet. Det är viktigt
          att du förstår hur yttre och inre faktorer kan påverka dig och din
          förmåga. Mer om detta kan du läsa i kapitel 4: Begränsningar av
          människans prestationsförmåga.
        </Text>
        <Text style={styles.header}>Att alltid flyga inom synhåll</Text>
        <Text>
          Ett begrepp som du kan komma att stöta på när du flyger drönare är
          VLOS, en förkortning av det engelska begreppet “visual line of sight”
          – på svenska “inom synhåll”. VLOS innebär, förutom att du alltid måste
          kunna se din drönare när du flyger, att du också ska hålla den på ett
          säkert avstånd från människor, djur, byggnader, fordon och andra
          luftfartyg. Du får inte heller flyga högre upp än 120 meter.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ebebeb",
  },
  text: {
    color: "#101010",
    fontSize: 20,
    fontStyle: "italic",
  },
  hero: {
    width: 400,
    resizeMode: "contain",
  },
  header: {
    fontSize: 25,
    fontStyle: "italic",
  },
  buttonContainer: {
    backgroundColor: "#222",
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
