import { ReactNode, useEffect, useReducer, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { getEventData } from "../../api/exploreScreen_Api/exploreDataApi";
import React from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";
import Animated, { FadeInDown, SlideInDown, SlideInUp } from 'react-native-reanimated';
import { userCategoryReq } from "../../api/exploreScreen_Api/CategoryDataApi";
import EventCategoryCloseBtn from "./Buttons/eventCategoryCloseBtn";
import EventCategoryData from "./Category/eventCategoryData";
import EventDescriptionArea from "./Description/eventDescriptionArea";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store";
import { userCategoryLayoutAction } from "../../store/Actions/userLayoutAction";
import EventCoverSlide from "./EventDetaileCover/eventCoverSlide";
import EventMoreInfoSlide from "./EventDetaileCover/eventSecondSlide";
import { ExploreEventDataAction } from "../../store/Actions/exploreEventDataAction";
import { menuNavigationAction } from "../../store/Actions/menuNaviagtionAction";
import handleEventDataAmount from "../../handler/Explore/handleEventdefaultDataAmount";
import * as Location from "expo-location"
import handleUserLocation from "../../handler/User/Location/handleUserLocation";
import { userLocationAction } from "../../store/Actions/userLocationAction";
import handleFirstEventDataCall from "../../handler/Explore/handleFirstEventDataCall";
import handleUpdateEventData from "../../handler/Explore/handleUpdateEventDataCall";
import { memo} from "react"
import { useCallback } from "react";
import { CategoryActionData } from "../../store/Actions/categoryActionData";



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


  interface mainProps {
    item:  eventProps
    index: number
    handleCategoryReq: (selectedCategoryType: string, selectedEventId: string, item: eventProps) => void
    handleShowSelectedEvent: (CategoryItem: eventProps, itemindex: number, categoryId: string) => void
    
  }



const MainExplore: React.FC<mainProps> = ({item, index, handleShowSelectedEvent, handleCategoryReq}) => {

    const [data, setData] = useState<eventArr | []>([]);
//   const [categoryData, setCategoryData] = useState<eventArr | []>([])
  const {categoryLayoutState} = useSelector((state: RootState) => state.OpenCategoryLayout)
  const  {StoredExploreEventData} = useSelector((state: RootState) => state.ExploreEventData)
  const {categoryData} = useSelector((state: RootState) => state.categoryData)
  const [trigger, setTrigger] = useState("")
  const [firstpageTrigger, setFirstPageTrigger] = useState(false)
  const dispatchReduxEvent = useDispatch()
  const dispatchCategoryIcon = useDispatch()
  const dispatch = useDispatch()
  const [page, setpage] = useState(1)
  const [location, setLocation] = useState({})
  const {userLocationState} = useSelector((state: RootState) => state.userLocationReduxStore)
  const flatListRef = useRef<FlatList<eventProps>>(null)
  const {eventDescription, eventDetails, eventSound, eventOptionHeader} = useSelector((state: RootState) => state.MenuNavigation)
  const updateMenuState = {
    eventDescription,
    eventDetails,
     eventSound,
     eventOptionHeader
  }


  
// checks the condition of the layout, if the layout is a empty string it will open the category area and fetch events which match with the category type from the server 
//  if the category layout redux payload contains a string it will pass a empty string and the category are will close

  

    return(
        <View
        key={index}
        style={{
          padding: categoryLayoutState === item.eventId ? 0 : 1,
          flex: 1,        
          height: categoryLayoutState === item.eventId ? "4.6%" : "4.6%",
        }}
      >
        
        <View style={{
         height: categoryLayoutState === item.eventId ? "59.9%" :  "85.8%",   //360 , 515,
         padding: categoryLayoutState === item.eventId ? 10 : 3,
          //  backgroundColor: "skyblue",
  
        }}>
  
        <ScrollView
          horizontal={true}
          style={{
            // flexGrow: 1,
            height: "100%",
            // backgroundColor: "orange",
  
            
    
              
    
          }}
        >
          {/*first cover slide */}
            
          <EventCoverSlide  data={item} />
  
  
           {/*second cover slide */}
         <EventMoreInfoSlide 
         state={updateMenuState}
          data={item} 
          />
  
        </ScrollView>
        </View>
  
        {/* Decription Area  */}
        <View
          style={styles.DecriptionArea}
        >
         
             <EventDescriptionArea 
            data={item} 
            index={index}
            handleCategoryReq={handleCategoryReq}
  
            /> 
          
  
          {/*  Fetching an array of similar Events that are matching the Event category */}
            <View style={{
              // backgroundColor: "orange",
              height: "44%"
            }}>
          {categoryLayoutState === item.eventId && (
            <>
              <Animated.View entering={FadeInDown}>
            
                <EventCategoryData  data={categoryData} index={index} handleSelectedEvent={handleShowSelectedEvent}/>
              </Animated.View>
        
  
              {/* Close btn of event Category */}
            <View
            style={{
              height: "18%", //48
              alignItems: "center",
              flexDirection: "row",
              // justifyContent: "space-between",
              justifyContent: "center",
              display: categoryLayoutState === item.eventId ? "flex" : "none",
              // marginBottom: 30,
              marginTop: categoryLayoutState === item.eventId ? 1 : 9,
              position: "relative",
              top: categoryLayoutState === item.eventId ? "-6%" : "2%",
              // backgroundColor: "pink"
            }}
          >                 
              <EventCategoryCloseBtn 
              data={item} 
  
  
              />
  
  
            </View>
            </>
          )}
  
            </View>
  
        
        </View>
  
        
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
      // flex: 1,
       height: "100%",
      // backgroundColor: "pink",
      // marginBottom: 20
    },
    scrollViewContent: {
      alignItems: "center",
      paddingVertical: 10, 
      // height: 900,
     
       
    },
    DecriptionArea: {
       // width: "100%",
            // position: "relative",
            // top: isOpen === item.eventId ? "-21%" : "-6.5%",
            // bottom: isOpen,
            padding: 3,
            // backgroundColor: "rgba(207,207,208,0.7)",
            // height: isOpen === item.eventId ? 120 : 80,
            // flexDirection: "column",
    },
    // children: {
    //   padding: 10,
    //   marginBottom: 20,
      
    // },
  
    
  })

export default memo(MainExplore)