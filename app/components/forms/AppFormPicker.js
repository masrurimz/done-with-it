import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppPicker from "../AppPicker";

export default function AppFormPicker({
  item,
  name,
  onSelectItem,
  placeholder,
  selectedItem,
  width,
}) {
  const { setFieldValue, values } = useFormikContext();
  return (
    <AppPicker
      items={item}
      onSelectItem={(item) => setFieldValue(name, item)}
      placeholder={placeholder}
      selectedItem={values[name]}
      width={width}
    />
  );
}

const styles = StyleSheet.create({});
