import axios from "axios";



/* API Post Request to the login endpoint */

export async function userSignUp(username: string, email: string, password:string ): Promise<any> {
  try {
    const API_URL = process.env.EXPO_PUBLIC_API_URL;
       const res = axios
         .post(`${API_URL}/api/signUpAcc`, {
           userName: username,
           userEmail: email,
           userPassword1: password,

         })
         .then(function (response) {
           return response.data.message;
         })
         .catch(function (error) {
            
           const errorMessage = error.response.data.message
           return errorMessage
         });
       return res; 
      
  } catch (error) {
    console.log("Error on API userLoginPostData", error);
  }
}


