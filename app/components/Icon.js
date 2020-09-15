import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({
  name = "email",
  size = 35,
  backgroundColor = "red",
  iconColor = "white",
}) {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        height: size,
        width: size,
        borderRadius: size * 0.5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color={iconColor} />
    </View>
  );
}
