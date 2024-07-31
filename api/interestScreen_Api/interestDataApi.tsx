import axios from "axios";




/* API request of the user Interests */
export async function useInterestPost(
  token: string,
  pickedIntesrest: string[]
) {
  try {
    console.log("inside api:", token);
    console.log("inside api:", pickedIntesrest);
    const API_URL = process.env.EXPO_PUBLIC_API_URL;
    const res = axios
      .post(`${API_URL}/api/userInterest`, {
        token,
        pickedIntesrest,
      })
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(
          "Error on axios post method from the API useInterestPost"
        );
      });

    return res;
  } catch (error) {
    console.error("Error on userInterestPost request api", error);
  }
}
