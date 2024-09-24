
import axios from "axios";



const instance = axios.create(

)


// Api Post request to the backend server endpoint favorEventMobile.
// The request contains a token identifyer and an eventId for user validation and Database assignment

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

  