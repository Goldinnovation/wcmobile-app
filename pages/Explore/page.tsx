import {
    View,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
  } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useReducer, useRef } from "react";
import { getTotalEvents } from "../../api/explore/getTotalEvents";
import EventDescriptionArea from "../../component/explore_Component/eventDescriptionArea";

interface eventProps {
    eventId: string;
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
  
  type eventArr = eventProps[];
  


const Explorepage = () => {
    const [data, setData] = useState<eventArr | []>([]);
    const [selectedEvent, SetSelectedEvent] = useState("")


    useEffect(() => {
        const fetchEventData = async () => {
          const storedToken = await AsyncStorage.getItem("token");
          const token = storedToken ? JSON.parse(storedToken).token : null;
          const userToken = token.token;
          if (userToken) {
            const exploreFetchedData = await getTotalEvents(userToken);
            // console.log(result);
            
            setData(exploreFetchedData);
            // console.log(exploreFetchedData.length);
    
          //  setOpen(false)
    
          } else {
            console.error("Token not found");
          }
        };
    
        fetchEventData();
      }, []);
    
    


    return(
        <View style={styles.container}>
            {
                data 
                ? 
                 (
                     <ScrollView
                     contentContainerStyle={styles.scrollViewContent}
                     scrollEventThrottle={96}
                     decelerationRate="normal"
                     >
                        {
                            data.map((item,index) => (
                                <View
                                key={index}
                                    style={{
                                        padding: selectedEvent === item.eventId ? 0 : 1,
                                        marginBottom: selectedEvent === item.eventId ? 50 : 50,
                                        // backgroundColor: "green",
                                        height: selectedEvent === item.eventId ? 600 : 600,
                                    }}
                                >
                                    {/* ImgCoverContentSection */}



                                    {/* DescriptionContent Section  */}
                                    <EventDescriptionArea data={item} indexNum={index}/>
                                </View>
                            ))
                        }

                     </ScrollView>
                 )
                : (
                    <View>

                    </View>
                )
                
            }
        </View>
    )
}

export default Explorepage

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: "pink",
      // marginBottom: 20
    },
    scrollViewContent: {
        alignItems: "center",
        paddingVertical: 20, // Add some vertical padding for better spacing
        // backgroundColor: "black",
    
        // marginBottom: 20
         
      },
})