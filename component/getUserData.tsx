import { useEffect } from "react"
import { View, Text } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState} from "react"


 export default function GetUserData(){
    const[data,setData] = useState(null)

    useEffect(() => {

        const fetchEventData =  async() => {
            const storedToken = await AsyncStorage.getItem('token')   
            const token = storedToken ? JSON.parse(storedToken).token : null;
           console.log(token.token);


            if(token){
                try{
                    const res = await fetch('https://f891-2a02-2455-81d5-1a00-c950-910e-a930-d54d.ngrok-free.app/api/events', {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token.token}`
                        }
        
                    })
                    if (!res.ok) {
                        console.log('bing');
                        throw new Error(`HTTP status ${res.status}`);
                      }

                    const resultData = await res.json() 
                    setData(resultData)

                    console.log('hallo');
                }catch(error){
                    console.info(error);
                    console.error('Catch Block Issue on token', error)
                }

            }else{
                console.error('Token not found')
            }  
                }
           
                fetchEventData()
    },[]);
    return(
        <View>
        {data ? (
          <Text>{JSON.stringify(data)}</Text>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    )
    
 }