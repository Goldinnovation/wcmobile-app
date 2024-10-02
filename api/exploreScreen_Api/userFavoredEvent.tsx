
import axios from "axios";



const instance = axios.create(

)


/**
 * Sends a token and an eventId to the server for user validation and the creation of a record
 * @param {string} token - The user's authentication token.
 * @param {string} favoreventId - The Id of the selected Event.
 * @returns {Promise} - A Promise that resolves with the server's response.
 */


export async function userFavoredEvent(token: string, favoreventId: string, item:any) {
    try {
        const API_URL = process.env.EXPO_PUBLIC_API_URL;
        const res = axios
          .post(`${API_URL}/api/favorEventMobile`,{
              token,
              favoreventId,
          }
        )
          .then(function (response) {

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

  