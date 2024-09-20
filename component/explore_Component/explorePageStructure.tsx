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
  const [redstate, dispatch] = useReducer(reducer, initialState)
  const dispatchCategoryIcon = useDispatch()








  const handleEventInfo = ( e: string) => {
    console.log(e);
   dispatch({type: e})
    
   
  }
  



  const handleCategoryReq = async(e: string, eId: string, item: eventProps) => {


    try{
      const storedToken = await AsyncStorage.getItem("token");
      const token = storedToken ? JSON.parse(storedToken).token : null;
      const userToken = token.token;
      const userselected_Category = e
      const eventId = eId
      const eventObj = item
      // console.log(categoryData);



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



   
 
  //   Gets the explore events data from the server
  useEffect(() => {
    const fetchEventData = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      const token = storedToken ? JSON.parse(storedToken).token : null;
      const userToken = token.token;
      if (userToken) {
        const exploreFetchedData = await useExploreGet(userToken);
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



  const handleSelectedEvent = (CategoryItem: eventProps, itemindex: number, categoryId: string) => {
    const selectedEvent = CategoryItem;
    const coverEventIndex = itemindex;
    if (selectedEvent) {
      // console.log(categoryLayoutState);
      const newData = [...data];

      newData[coverEventIndex] = selectedEvent;
      dispatchCategoryIcon(userCategoryLayoutAction(categoryId))
      setData(newData);
      // setOpen(categoryId)
    }
  };






  return (
    <View style={styles.container}>
      {data ? (
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          //  onScroll={handletoggleCLose}
          scrollEventThrottle={96}
          decelerationRate="normal"
          style={{
          }}
        >
          {data?.map((item, index) => (
            <View
              key={index}
              style={{
                padding: categoryLayoutState === item.eventId ? 0 : 1,
                marginBottom: categoryLayoutState === item.eventId ? 50 : 50,
                // backgroundColor: "green",
                height: categoryLayoutState === item.eventId ? 600 : 600,
              }}
            >
              
              <View style={{
               height: categoryLayoutState === item.eventId ? 360 : 515,
               padding: categoryLayoutState === item.eventId ? 10 : 3,
                //  backgroundColor: "skyblue",

              }}>
              <ScrollView
                horizontal={true}
                style={{
                  flexGrow: 1
                }}
              >
                {/*first cover slide */}
                  
                <EventCoverSlide  data={item} />


                 {/*second cover slide */}
               <EventMoreInfoSlide state={redstate} data={item} handleEventInfo={handleEventInfo}/>
      
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
                  <View>
                {categoryLayoutState === item.eventId && (
                  <>
                    <Animated.View entering={FadeInDown}>
                  
                      <EventCategoryData  data={categoryData} index={index} handleSelectedEvent={handleSelectedEvent}/>
                    </Animated.View>
              

                    {/* Close btn of event Category */}
                  <View
                  style={{
                    height: 48,
                    alignItems: "center",
                    flexDirection: "row",
                    // justifyContent: "space-between",
                    justifyContent: "center",
                    display: categoryLayoutState === item.eventId ? "flex" : "none",
                    // marginBottom: 30,
                    marginTop: categoryLayoutState === item.eventId ? 1 : 9,
                    position: "relative",
                    top: categoryLayoutState === item.eventId ? "-4%" : "2%",
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
    flex: 1,
    // backgroundColor: "pink",
    // marginBottom: 20
  },
  scrollViewContent: {
    alignItems: "center",
    paddingVertical: 20, 
   
     
  },

  children: {
    padding: 10,
    marginBottom: 20,
    
  },

  
});
