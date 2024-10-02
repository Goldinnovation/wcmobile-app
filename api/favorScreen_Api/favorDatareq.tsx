import axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import { useDispatch, UseDispatch } from "react-redux";


const instance = axios.create()
const Axios  = setupCache(instance, {
  ttl: 15 * 60 * 1000, 
})



/**
 * Retrieves all favored events that the user selected as favored 
 * @param {string} token - The user's authentication token.
 * @returns {Promise} - A Promise that resolves with the server's response.
 */

/* API Get request to the backend server endpointfavorEventMobile.
The call will retrieve all favored events that the current user selected as favored */
export async function getUserFavoredEvent(token: string) {
    try {
      const API_URL = process.env.EXPO_PUBLIC_API_URL;
      const res = axios
        .get(`${API_URL}/api/favorEventMobile`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
         
        })
        .then(function (response) {
         

          // console.log(response.data);
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