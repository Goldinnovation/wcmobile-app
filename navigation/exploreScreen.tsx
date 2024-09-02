import { View, Text, StyleSheet } from "react-native";
import GetUserData from "../component/explore_Component/getUserData";
import Explorepage from "../pages/Explore/page";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <GetUserData />
      {/* <Explorepage/> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  IconStar: {
    width: "20%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",

    position: "relative",
    top: "80%",
    left: "78%",
  },
});
