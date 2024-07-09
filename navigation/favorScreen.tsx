import { View, Text, FlatList } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import React, {useState, useEffect} from "react"





export default function FavorScreen() {
    const [eventData, setEventData] = useState('')


    useEffect(() => {
        const fetchEventData = async() => {
            try{
                const Response =  await fetch(`http://localhost:3000/api/events`)
                const json = await Response.json()
                setEventData(json);   
               
            }catch(error){
            console.error(error)
        }
    }
    fetchEventData()
        
}, [])


console.log(eventData);

    return(

        <View >
           

    
            <Text>Hallo Profile Screen </Text>
           
            
        </View>

        
    )
}