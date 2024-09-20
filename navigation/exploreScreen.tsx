import { View, Text, StyleSheet } from "react-native";
import ExplorePageStructure from "../component/explore_Component/explorePageStructure";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <ExplorePageStructure />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   height: "100%"
  },
 
});
