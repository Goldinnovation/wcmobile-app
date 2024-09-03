import React from 'react'
import {
    View,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
  } from "react-native";
  import Slider from "@react-native-community/slider";
  import Animated, { FadeInDown, SlideInDown, SlideInUp } from 'react-native-reanimated';
  import { useState } from 'react';
  import AsyncStorage from "@react-native-async-storage/async-storage";
import { userCategoryReq } from '../../api/exploreScreen_Api/CategoryDataApi';

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

interface eventCategoryProps{
    data: eventProps
    closeCategory: () => void;

}


interface State {
    eventDescription: boolean,
    eventDetails: boolean,
    eventSound: boolean
    eventOptionHeader: string
  }
  
  interface Action{
    type: string;
  }
  


const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "info":
        return { eventDescription: true, eventDetails: false, eventSound: false, eventOptionHeader: "Description"  };
      case "Event Details":
        return { eventDescription: false, eventDetails: true, eventSound: false, eventOptionHeader: "Event Details" };
      case 'EventSound':
        return { eventDescription: false, eventDetails: false, eventSound: true, eventOptionHeader: "Event Sound" };
      default:
        return { eventDescription: true, eventDetails: false, eventSound: false, eventOptionHeader: "Description" };
    }
  };

const  EventCategoryCloseBtn: React.FC<eventCategoryProps> = ({data, closeCategory}) => {
    const [isOpen, setOpen] = useState("")
    const [categoryData, setCategoryData] = useState<eventArr | []>([])
    const[state, setNumState ] = useState(0)



    const item = data


    const handleCategoryReq = async(e: string, eId: string, item: eventProps) => {




        try{
          const storedToken = await AsyncStorage.getItem("token");
          const token = storedToken ? JSON.parse(storedToken).token : null;
          const userToken = token.token;
          const userselected_Category = e
          const eventId = eId
          const eventObj = item
          // console.log(categoryData);
    
    
    
         
         
          if(state === 0){
            setOpen(eventId)
            const CategoryData = await userCategoryReq(userToken, userselected_Category)
            const filteredEvent = CategoryData.filter((prevEvent: eventProps) => prevEvent.eventId !== eventId)
         
            setCategoryData(filteredEvent)
            
            setNumState(1)
          
          }else{
            setOpen("")
            setNumState(0)
    
          }
    
        }catch(error){
          console.error('Error on hanleCategory Rey', error)
        }
    
       }


  return (
    <View style={{
      width: "100%",
      // backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center"

    }}>
                  <TouchableOpacity
                    key={item.eventId}
                    style={{
                      height: 25,
                      backgroundColor: "black",
                      width: "20%",
                      borderRadius: 100,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={closeCategory}
                  >
                    <Text
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        opacity: 0.7,
                      }}
                    >
                      {/* {item.eventType} */}x
                    </Text>
                  </TouchableOpacity>
    </View>
  )
}

export default EventCategoryCloseBtn
