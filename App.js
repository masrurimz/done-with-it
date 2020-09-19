import React, { useEffect, useState } from "react";
import AppNavigator from "./app/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import FeedNavigator from "./app/navigation/FeedNavigator";
import AccountScreen from "./app/screens/AccountScreen";
import AccountNavigator from "./app/navigation/AccountNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
