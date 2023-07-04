import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#10162f" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
};
export default App;
