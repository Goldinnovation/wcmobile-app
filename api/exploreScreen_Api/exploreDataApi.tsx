import axios from "axios";
import { setupCache } from "axios-cache-interceptor";



const instance = axios.create()
const axiosApi  = setupCache(instance, {
  ttl: 15 * 60 * 1000, 
})

/* Get the explore event data */
export async function useExploreGet(token: string) {
  try {
    const API_URL = process.env.EXPO_PUBLIC_API_URL;
    const res = axiosApi
      .get(`${API_URL}/api/explore`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          
        },
    
        
      })
      .then(function (response) {
        // console.log(response.data)
        console.log("Cache State on Explore Feed", response.cached);
        return response.data;
      })
      .catch(function (error) {
        console.log(
          "Error on Get Method API request from useExploreGet function"
        );
      });
    
    return res;
  } catch (error) {
    console.log("Error on API useExploreGet Request:", error);
  }
}
