
import axios from "axios";

export async function userFavoredExploredEvent(token: string, favoreventId: string) {
    try {
        console.log("inside api:", token);
        console.log("inside api:", favoreventId);
        const API_URL = process.env.EXPO_PUBLIC_API_URL;
        const res = axios
          .post(`${API_URL}/api/favorEventMobile`, {
            token,
            favoreventId,
          })
          .then(function (response) {
            // console.log(response.data);
            return response.data;
          })
          .catch(function (error) {
            console.error(
              "Error on axios post method from the API userFavoredEvent"
            );
          });
    
        return res;
      } catch (error) {
        console.error("Error on userInterestPost request api", error);
      }
  }