import * as React from "react";
import MainStackNavigator from "./src/navigation/MainStackNavigator";
import { useState } from "react";
import SomeContext from "./someContext";
// import Footer from "./components/Footer";

function App() {
  const [someValue, setSomeValue] = useState("Prov");
  return (
    <SomeContext.Provider value={{ someValue, setSomeValue }}>
      <MainStackNavigator />
    </SomeContext.Provider>
  );
}

export default App;
