



// Get the explore event data
export async function useExploreGet(token: string){
    try{
          const API_URL= process.env.EXPO_PUBLIC_API_URL
                    const res = await fetch(`${API_URL}/api/events`, {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
        
                    })
                    if (!res.ok) {
                        console.log('bing');
                        throw new Error(`HTTP status ${res.status}`);
                      }

                    const data = await res.json() 
                    return data

    }catch(error){
        console.log('Error on API useExploreGet Request:', error);
    }
    
}