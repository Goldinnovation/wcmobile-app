import axios from "axios";



/* Post Request to the login server section */

export async function useLoginPost(email: string, password: string): Promise<any> {
  try {
    const API_URL = process.env.EXPO_PUBLIC_API_URL;
       const res = axios
         .post(`${API_URL}/api/login-token`, {
           loginEmail: email,
           loginPassword: password,
         })
         .then(function (response) {
           console.log(response.data);
           return response.data;
         })
         .catch(function (error) {
           console.log(error);
         });
       return res; 
      
  } catch (error) {
    console.log("Error on API userLoginPostData", error);
  }
}
