import axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import { useDispatch, UseDispatch } from "react-redux";
const instance = axios.create()
const Axios  = setupCache(instance, {
  ttl: 15 * 60 * 1000, 
})

export async function getUserFavoredEvent(token: string) {
    try {
      const API_URL = process.env.EXPO_PUBLIC_API_URL;
      const res = Axios
        .get(`${API_URL}/api/favorEventMobile`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
          console.log(response.cached)
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