import React from "react";
import { Text } from "react-native";
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <>
      <OfflineNotice />
      <AppNavigator />
    </>
  );
}
