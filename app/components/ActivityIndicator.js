import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

export default function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "white",
    opacity: 0.7,
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
});
