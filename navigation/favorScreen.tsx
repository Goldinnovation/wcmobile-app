import React from "react";
import { View, StyleSheet } from "react-native";
import FavorData from "../component/favor_Component/favorpageStructure";

export default function FavorScreen() {
  return (
    <View style={styles.container}>
      <FavorData />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 50,
  },
});
