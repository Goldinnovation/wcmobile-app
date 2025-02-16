import axios from "axios";





export async function uploadGifBackgroundAPI(token: string, data: string) {
  try {
 
    const API_URL = process.env.EXPO_PUBLIC_API_URL;
    const res = axios
      .post(`${API_URL}/api/uploadGifBgMobile`, {
        token,
        data
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
