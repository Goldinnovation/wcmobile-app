import axios from "axios";
import { setupCache } from "axios-cache-interceptor";



const instance = axios.create()
const axiosCache  = setupCache(instance, {
  ttl: 15 * 60 * 1000, 
})

/**
 * Retrieves all event objects from the server
 * @param {string} token - The user's authentication token.
 * @returns {Promise} - A Promise that resolves with the server's response.
 */


/*API Post request retrieves all event objects from the backend api endpoint explore */

export async function getEventData(token: string) {
  try {
    const API_URL = process.env.EXPO_PUBLIC_API_URL;
    const res = axiosCache
      .get(`${API_URL}/api/explore`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          
        },
    
        
      })
      .then(function (response) {
        // console.log(response.data)
        // console.log("Cache State on Explore Feed", response.cached);
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
