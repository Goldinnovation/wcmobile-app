import { View } from "react-native"
import axios from "axios"


export async function uploadProfileImageAPi( imageFormData: any, token: string, imageName: string, imageMimeType: string) {

    try {
        const API_URL = process.env.EXPO_PUBLIC_API_URL;
        const res = axios
          .post(`${API_URL}/api/userProfilePictureMobileUpload`, {
            token: token, 
            image: imageFormData,
            imageName: imageName, 
            imageMimeType: imageMimeType

            
          })
          .then(function (response) {
            return response.data;
          })
          .catch(function (error) {
            console.error(
              "Error on axios post method from the API userCategoryReq "
            );
          });

        return res;

    }catch(error) {
        console.log("Error on uploadProfileImage", error)
    }


}