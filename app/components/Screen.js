import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Constans from "expo-constants";

export default function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constans.statusBarHeight,
    paddingHorizontal: 10,
    flex: 1,
  },
});
