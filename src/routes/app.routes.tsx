import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Home from "../screens/Home";
import Forgot from "../screens/Forgot";

const{Navigator, Screen}= createNativeStackNavigator();

export function AppRoutes(){
      return(
        <Navigator screenOptions={{ headerShown:false}}>
            <Screen name="Login" component={Login}/>
            <Screen name="Home" component={Home}/>
            <Screen name="Forgot" component={Forgot}/>
        </Navigator>
      )
}