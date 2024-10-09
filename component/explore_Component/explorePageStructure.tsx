import { useEffect, useReducer, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useExploreGet } from "../../api/exploreScreen_Api/exploreDataApi";
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
import handleExploreData from "../../handler/Explore/handleExploreData";
import { menuNavigationAction } from "../../store/Actions/menuNaviagtionAction";
// import handleEventMenuNavigation from "../../handler/handleEventMenuNavigation";
// import handleCategoryCall from "../../handler/Explore/handleCategoryCall";


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

const initialState = {
  eventDescription: true,
  eventDetails: false,
  eventSound: false,
  eventOptionHeader: "Description"
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
export default function ExplorePageStructure() {
  const [data, setData] = useState<eventArr | []>([]);
  const [categoryData, setCategoryData] = useState<eventArr | []>([])
  const {categoryLayoutState} = useSelector((state: RootState) => state.OpenCategoryLayout)
  const  {StoredExploreEventData} = useSelector((state: RootState) => state.ExploreEventData)
  const [trigger, setTrigger] = useState(false)
  const dispatchReduxEvent = useDispatch()
  const dispatchCategoryIcon = useDispatch()
  const dispathMenu = useDispatch()
  const [page, setpage] = useState(1)
  const {eventDescription, eventDetails, eventSound, eventOptionHeader} = useSelector((state: RootState) => state.MenuNavigation)
  const updateMenuState = {
    eventDescription,
    eventDetails,
     eventSound,
     eventOptionHeader
  }





  



  const handleCategoryReq = async(selectedCategoryType: string, selectedEventId: string, item: eventProps) => {

    try{
      const storedToken = await AsyncStorage.getItem("token");
      const token = storedToken ? JSON.parse(storedToken).token : null;
      const userToken = token.token;
      const userselected_Category = selectedCategoryType
      const eventId = selectedEventId
      const LayoutState = eventId === categoryLayoutState ? "" : eventId
      dispatchCategoryIcon(userCategoryLayoutAction(LayoutState))

      
      if(LayoutState === eventId){

  
        const CategoryData = await userCategoryReq(userToken, userselected_Category)
        const filteredEvent = CategoryData.filter((prevEvent: eventProps) => prevEvent.eventId !== eventId)
        
        setCategoryData(filteredEvent)
   
      
      }

    }catch(error){
      console.error('Error on hanleCategory Rey', error)
    }

   }


   const handleShowSelectedEvent = (CategoryItem: eventProps, itemindex: number, categoryId: string) => {
    const selectedEvent = CategoryItem;
    const prevEventIndex = itemindex;
    if (selectedEvent) {
      const newData = [...data];
      newData[prevEventIndex] = selectedEvent;
      dispatchCategoryIcon(userCategoryLayoutAction(categoryId))
      setData(newData);
    }
  };


   
 
  // Gets the explore events data from the server
  //  afterwwards the data will be modified to display to returns a maximum of 20 events.

  useEffect(() => {
    const fetchEventData = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      const token = storedToken ? JSON.parse(storedToken).token : null;
      const userToken = token.token;
      if (userToken) {
        const exploreFetchedData = await useExploreGet(userToken);
        if(exploreFetchedData.length > 0){
          const storeData = dispatchReduxEvent(ExploreEventDataAction(exploreFetchedData))
          if(storeData){
            setTrigger(true)
            const modifiedExploreData = handleExploreData(StoredExploreEventData)
            setData(modifiedExploreData)
          }        
        }else{
          console.log("Second Call");
          fetchEventData();
        }
      } else {
        console.error("Token not found");
      }
    };

    fetchEventData();

  }, [trigger]);



 




  return (
    <View style={styles.container}>
      {data ? (
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          //  onScroll={handletoggleCLose}
          scrollEventThrottle={96}
          decelerationRate="normal"
          style={{
            // height: "100%",
            // backgroundColor: "grey",
            
          }}
        >
          {data?.map((item, index) => (
             
            <View
              key={index}
              style={{
                padding: categoryLayoutState === item.eventId ? 0 : 1,
                marginBottom: categoryLayoutState === item.eventId ? 50 : 50,
                // backgroundColor: "green",
                // marginBottom: 20,
                
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
                style={{
                  // width: "100%",
                  // position: "relative",
                  // top: isOpen === item.eventId ? "-21%" : "-6.5%",
                  // bottom: isOpen,
                  padding: 3,
                  // backgroundColor: "rgba(207,207,208,0.7)",
                  // height: isOpen === item.eventId ? 120 : 80,
                  // flexDirection: "column",
                }}
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
        
           
           
          ))}
        </ScrollView>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
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

  // children: {
  //   padding: 10,
  //   marginBottom: 20,
    
  // },

  
});
