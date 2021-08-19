import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { Input } from "react-native-elements";
import PasswordStrengthMeterBar from "react-native-password-strength-meter-bar";
import { ProgressBar, Colors } from "react-native-paper";

import {
  Button,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
const s = require("../styles");

const Profile = (props) => {
  const { navigation } = props;
  const [name, onChangeName] = React.useState(null);
  const [password, onChangePassword] = React.useState("");
  const [password2, onChangePassword2] = React.useState("");

  const [register, onChangeRegister] = React.useState(true);
  const [loggedIn, onChangeLoggedIn] = React.useState(false);

  const [savedPassword, onChangeSavedPassword] = React.useState(null);
  const [savedName, onChangeSavedName] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [errorMessage2, setErrorMessage2] = React.useState("");

  function equal() {
    if (password === password2) {
      return onChangeRegister(false);
    } else {
      setErrorMessage("Lösenorden behöver vara samma");
    }
  }
  function checkUser() {
    if (name === savedName) {
      onChangeLoggedIn(true);
    }
    setErrorMessage2("Kontrollera namn och lösenord");
  }

  if (register) {
    return (
      <SafeAreaView style={s.container}>
        <View style={s.header}>
          <Text style={s.text}>Registrera dig här</Text>
        </View>
        <Input
          placeholder="Namn"
          inputContainerStyle={{
            borderStyle: "solid",
            borderRadius: 25,
            borderColor: "black",
            borderWidth: 1,
            marginSides: 5,
            paddingLeft: 10,
          }}
          leftIcon={<Icon name="user" size={24} color="black" />}
          autoCompleteType="name"
          onChangeText={onChangeName}
          value={name}
        />

        <Input
          secureTextEntry={true}
          placeholder="Lösenord"
          inputContainerStyle={{
            borderStyle: "solid",
            borderRadius: 25,
            borderColor: "black",
            borderWidth: 1,
            marginSides: 5,
            paddingLeft: 10,
          }}
          leftIcon={<Icon name="unlock-alt" size={24} color="black" />}
          onChangeText={onChangePassword}
          value={password}
        />
        <Input
          secureTextEntry={true}
          placeholder="Upprepa lösenord"
          inputContainerStyle={{
            borderStyle: "solid",
            borderRadius: 25,
            borderColor: "black",
            borderWidth: 1,
            marginSides: 5,
            paddingLeft: 10,
          }}
          leftIcon={<Icon name="unlock-alt" size={24} color="black" />}
          onChangeText={onChangePassword2}
          value={password2}
        />

        <Text style={{ color: "red" }}>{errorMessage}</Text>

        <PasswordStrengthMeterBar password={password} />
        <Text>{name}</Text>
        <LinearGradient
          colors={["rgba(237, 114, 0, 1)", "rgba(255, 199, 0, 1)"]}
          style={s.buttonLarge}
        >
          <TouchableOpacity onPress={() => equal()}>
            <Text>Registrera</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text>Har du redan ett konto</Text>
        <Text
          style={{ color: "rgba(237, 114, 0, 1)" }}
          onPress={() => onChangeRegister(false)}
        >
          Logga in här
        </Text>
      </SafeAreaView>
    );
  }
  if (!loggedIn) {
    return (
      <SafeAreaView style={s.container}>
        <Text style={s.text}>Logga in</Text>
        <Input
          placeholder="Namn"
          inputContainerStyle={{
            borderStyle: "solid",
            borderRadius: 25,
            borderColor: "black",
            borderWidth: 1,
            marginSides: 5,
            paddingLeft: 10,
          }}
          leftIcon={<Icon name="user" size={24} color="black" />}
          autoCompleteType="name"
          onChangeText={onChangeSavedName}
          value={savedName}
        />

        <Input
          secureTextEntry={true}
          placeholder="Lösenord"
          inputContainerStyle={{
            borderStyle: "solid",
            borderRadius: 25,
            borderColor: "black",
            borderWidth: 1,
            marginSides: 5,
            paddingLeft: 10,
          }}
          leftIcon={<Icon name="user" size={24} color="black" />}
          onChangeText={onChangeSavedPassword}
          value={savedPassword}
        />

        <Text style={{ color: "red" }}>{errorMessage2}</Text>
        <LinearGradient
          colors={["rgba(237, 114, 0, 1)", "rgba(255, 199, 0, 1)"]}
          style={s.buttonLarge}
        >
          <TouchableOpacity onPress={() => checkUser()}>
            <Text>Logga in</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text
          style={{ color: "rgba(237, 114, 0, 1)" }}
          onPress={() => onChangeRegister(true)}
        >
          Registrera ny användare
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={s.container}>
      <Text style={s.header}>Välkommen {name}</Text>
      <View
        style={{
          height: 200,
          width: 200,
          margin: 20,
        }}
      >
        <View>
          <Text>Flygregleringar</Text>
          <ProgressBar progress={0.9} height={20} color={Colors.red800} />
        </View>
        <View>
          <Text>Säkerhet</Text>
          <ProgressBar progress={0.8} height={20} color={Colors.blue800} />
        </View>
        <View>
          <Text>Flygteknik</Text>
          <ProgressBar progress={0.7} height={20} color={Colors.green800} />
        </View>
        <View>
          <Text>Historia</Text>
          <ProgressBar progress={0.4} height={20} color={Colors.orange800} />
        </View>
      </View>
      <TouchableOpacity
        style={s.buttonContainer}
        onPress={() => navigation.navigate("Start")}
      >
        <Text style={s.buttonText}>Gå till start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  buttonContainer: {
    backgroundColor: "#222",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});

export default Profile;
