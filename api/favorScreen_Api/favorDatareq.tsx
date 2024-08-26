import axios from "axios";

export async function useFavorGetEvent(token: string) {
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
        //   console.log(response.data)
          return response.data;
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