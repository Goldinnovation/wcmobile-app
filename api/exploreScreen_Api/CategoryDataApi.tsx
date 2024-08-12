import axios from "axios";




/* API request of the user Interests */
export async function userCategoryReq(
  token: string,
  cateogory : string
) {
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

    return res;
  } catch (error) {
    console.error("Error on userCategoryReq request api", error);
  }
}
