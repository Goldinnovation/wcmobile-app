import axios from "axios";

/* Get the explore event data */
export async function getTotalEvents(token: string) {
  try {
    const API_URL = process.env.EXPO_PUBLIC_API_URL;
    const res = axios
      .get(`${API_URL}/api/explore`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        // console.log(response.data)
        return response.data;
      })
      .catch(function (error) {
        console.log(
          "Error on Get Method API request from useExploreGet function"
        );
      });

    return res;
  } catch (error) {
    console.log("Error on API useExploreGet Request:", error);
  }
}
