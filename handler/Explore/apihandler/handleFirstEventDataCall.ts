
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getEventData } from "../../../api/exploreScreen_Api/exploreDataApi";


const handleFirstEventDataCall = async() => {
    const storedToken = await AsyncStorage.getItem("token");
    const token = storedToken ? JSON.parse(storedToken).token : null;
    const userToken = token.token;
    if (userToken) {
        const exploreFetchedData = await getEventData(userToken);
        return exploreFetchedData
        
      } else {
        console.error("Token not found");
      }


}

export default handleFirstEventDataCall