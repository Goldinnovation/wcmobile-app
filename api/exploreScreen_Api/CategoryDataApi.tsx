import axios, { Axios } from "axios";
import { setupCache } from "axios-cache-interceptor";

// const instance = axios.create()
// const axiosApi  = setupCache(instance, {
//   ttl: 15 * 60 * 1000,
// })

/* API request of the user Interests */
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
        // console.log(response.data);
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
