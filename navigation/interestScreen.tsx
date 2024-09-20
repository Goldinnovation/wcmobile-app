import { View, Text, StyleSheet } from "react-native";
import InterestPageStructure from "../component/Interest_Component/interestpageStructure";

export default function UserInterestScreen() {
  return (
    <View style={styles.container}>
      <InterestPageStructure />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
