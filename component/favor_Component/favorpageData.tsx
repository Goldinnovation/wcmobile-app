import { View, Text } from "react-native"
import { StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { useFavorGetEvent } from "../../api/favorScreen_Api/favorDatareq"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"




interface eventFavorData{
    eventHost: string;
    eventHostName: string,
   eventTitle: string;
   eventDate: string;
   eventType: string;
   eventDescriptionContent: string;
   eventTime: string;
   ImageCoverUpload: string;
   eventInviteType: number;
   eventAddress: string;
   eventZipcode: string;
   cityType: string;
   selectedRangeofEvents: number;
}


type favoredDataArr = eventFavorData[] | [] 

export default function FavorData(){

    const [eventFavorData, setEventFavorData] = useState<favoredDataArr |  [] >([])


    useEffect(() => {
        const GetFavoredData = async() => {
            const storedToken = await AsyncStorage.getItem("token");
            const token = storedToken ? JSON.parse(storedToken).token : null;
            const userToken = token.token;

            if(userToken){
                const eventData = await useFavorGetEvent(userToken)
                setEventFavorData(eventData)
            }
            
        }
        GetFavoredData()

    },[])

    return(
        <View style={styles.container}>
                <View style={{
                    backgroundColor: "yellow",
                    height: 40
                }}>
                 <Text>Favor Header</Text>
                </View>
                <View style={{
                    backgroundColor: "pink",
                    height: 600
                }}>
              
                    {eventFavorData
                        ?(
                            <View
                            >
                                {
                                    eventFavorData?.map((item, index) => (
                                     <View
                                     key={index}
                                     style={{
                                        backgroundColor: "skyblue",
                                        width: "100%",
                                        height: 100
                                     }}
                                     >
                                         <Text>{item.eventTime}</Text>
                                     </View>
                                    ))
                                }

                            </View>
                            


                        ): 
                         <View>
                            <Text>Loading....</Text>
                         </View>
                        
                    }
                </View>
              
                
        </View>

    )
}


const styles = StyleSheet.create({
    
container: {
    flex: 1,
    backgroundColor: "pink",
    // marginBottom: 20
  }, 
  scrollViewContent: {
    alignItems: "center",
    paddingVertical: 20, // Add some vertical padding for better spacing
    // marginBottom: 20
    backgroundColor: "green "

     
  },

})

