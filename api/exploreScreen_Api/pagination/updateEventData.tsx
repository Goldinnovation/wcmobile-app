import axios, { Axios } from "axios";
import { setupCache } from "axios-cache-interceptor";



const instance = axios.create()
const axiosCache  = setupCache(instance, {
  ttl: 15 * 60 * 1000, 
})


/**
 * Sends a string of the users selected event category type to the server.
 * Returning as response a list of events with the same category type.
 * 
 * @param {string} token - The user's authentication token.
 * @param {string} EventDataId - Represents the seen Events.
 * @returns {Promise} - A Promise that resolves with the server's response.
 */




export async function updateEventData(token: string, EventDataId: string[]) {
  try {
    // console.log("inside api:", token);
    // console.log("inside api:", EventDataId);
    const API_URL = process.env.EXPO_PUBLIC_API_URL;
    const res = axiosCache
      .post(`${API_URL}/api/newExploreEventData`, {
        token,
        EventDataId,
      })
      .then(function (response) {
        // console.log('If Data is caches', response.cached);
        // console.log("New Event Data:", response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(
          "Error on axios post method from the API updateEventData "
        );
      });

    //  const [data] = await Promise.all([res])

    // console.log(data.cached)

    return res;
  } catch (error) {
    console.error("Error on userCategoryReq request api", error);
  }
}
