


export async function useInterestPost(token: string, pickedIntesrest: string[]) {
    try{
        console.log("inside api:",token);
        console.log("inside api:",pickedIntesrest);
        const API_URL = process.env.EXPO_PUBLIC_API_URL

        const res = await fetch(`${API_URL}/api/userInterest`, {
          method: "POST",
          headers: {
            "Content-Type":"application/json",
            'Authorization': `Bearer ${token}`
  
  
        }, 
        body: JSON.stringify({
            token,
            pickedIntesrest
        })
        })
  
        const data = await res.json()

        console.log(data);
        return data
    }catch(error){
        console.error('Error on userInterestPost request api',error)
    }
}