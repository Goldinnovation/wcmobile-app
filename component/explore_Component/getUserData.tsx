import { useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useExploreGet } from "../../api/exploreScreen_Api/exploreDataApi";



export default function GetUserData() {
  const [data, setData] = useState(null);

//   Gets the explore events data from the server
  useEffect(() => {
    const fetchEventData = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      const token = storedToken ? JSON.parse(storedToken).token : null;
      const userToken = token.token;
      if (userToken) {
        const result = await useExploreGet(userToken);
        setData(result);
      } else {
        console.error("Token not found");
      }
    };

    fetchEventData();
  }, []);
  return (
    <View>
      {data ? <Text>{JSON.stringify(data)}</Text> : <Text>Loading...</Text>}
    </View>
  );
}
