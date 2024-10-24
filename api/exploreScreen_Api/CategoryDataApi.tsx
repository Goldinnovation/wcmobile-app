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
 * @param {string} cateogory - The Event category type.
 * @returns {Promise} - A Promise that resolves with the server's response.
 */


export async function userCategoryReq(token: string, cateogory: string) {
  try {
    // console.log("inside api:", token);
    // console.log("inside api:", cateogory);
    const API_URL = process.env.EXPO_PUBLIC_API_URL;
    const res = axios
      .post(`${API_URL}/api/eventCategory`, {
        token,
        cateogory,
      })
      .then(function (response) {
        // console.log("userCategoryReq Cache: ", response.cached);
        return response.data;
      })
      .catch(function (error) {
        console.error(
          "Error on axios post method from the API userCategoryReq "
        );
      });

    //  const [data] = await Promise.all([res])

    // console.log(data.cached)

    return res;
  } catch (error) {
    console.error("Error on userCategoryReq request api", error);
  }
}
