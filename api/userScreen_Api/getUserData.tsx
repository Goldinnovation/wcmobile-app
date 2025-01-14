import axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import AsyncStorage from "@react-native-async-storage/async-storage";



// const instance = axios.create()
// const Axios  = setupCache(instance, {
//   ttl: 15 * 60 * 1000, 
// })




export async function getUserData() {
    try {

      const storedToken = await AsyncStorage.getItem("token");
      const token = storedToken ? JSON.parse(storedToken).token : null;
      const userToken = token.token;


      const API_URL = process.env.EXPO_PUBLIC_API_URL;
      const res = axios
        .get(`${API_URL}/api/userData`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
         
        })
        .then(function (response) {
         

          console.log('response.data', response.data);
          return response.data ;

        })
        .catch(function (error) {
          console.log(
            "Error on Get Method API request from useFavorGetEvent function"
          );
        });
      return res;
    } catch (error) {
      console.log("Error on API useExploreGet Request:", error);
    }
  }