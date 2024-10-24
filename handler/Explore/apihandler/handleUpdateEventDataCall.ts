
import AsyncStorage from "@react-native-async-storage/async-storage";
import { updateEventData } from "../../../api/exploreScreen_Api/pagination/updateEventData";

const handleUpdateEventData = async(data: string[]) => {
    const storedToken = await AsyncStorage.getItem("token");
    const token = storedToken ? JSON.parse(storedToken).token : null;
    const userToken = token.token;
    if (userToken && data.length > 0) {
        const exploreFetchedData = await updateEventData(userToken, data);
        return exploreFetchedData
        
      } else {
        console.log('trigger');
        console.error("Token or data of strings is Invalid");
        return  []      
      }


}

export default handleUpdateEventData