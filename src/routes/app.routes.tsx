import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "../screens/Login";
import Home from "../screens/Home";
import Forgot from "../screens/Forgot";
import Players from "../screens/Players";
import Rules from "../screens/Rules";
import Sorteio from "../screens/Sorteio";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={Home} />
      <Screen name="Forgot" component={Forgot} />
      <Screen name="Players" component={Players} />
      <Screen name="Sorteio" component={Sorteio} />
      <Screen name="Rules" component={Rules} />
    </Navigator>
  )
}