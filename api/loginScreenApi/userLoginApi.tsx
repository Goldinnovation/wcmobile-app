


// Post Request to the login server section
export async function useLoginPost(email: string, password: string): Promise<any> {
  try {
    const API_URL = process.env.EXPO_PUBLIC_API_URL;
    const response = await fetch(
      `${API_URL}/api/login-token`,

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          loginEmail: email,
          loginPassword: password,
        }),
      }
    );
    const res: ResponseType = await response.json();

    return res;
  } catch (error) {
    console.log("Error on API userLoginPostData", error);
  }
}
