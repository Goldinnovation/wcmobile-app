import axios from "axios";
import { setupCache } from "axios-cache-interceptor";
import AsyncStorage from "@react-native-async-storage/async-storage";






export async function userQrDataReq(endpoint: string) {
    try {
        const storedToken = await AsyncStorage.getItem("token");
        const token = storedToken ? JSON.parse(storedToken).token : null;
        const userToken = token.token;

        const res = axios
          .get(endpoint, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userToken}`,
            },
           
          })
          .then(function (response) {
           
  
            console.log("response data", response.data);
            return response.data ;
          })
          .catch(function (error) {
            console.log(
              "Error on Get Method API request from handleQRCodeRequest function", error
            );
          });
        return res;
      } catch (error) {
        console.log("Error on API useExploreGet Request:", error);
      }
  }