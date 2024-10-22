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
import MainExplore from "./mainExplore";
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


interface myListProps{
  item: eventProps, 
  index: number
}



const  ExplorePageStructure = ()  => {
  const [data, setData] = useState<eventArr | []>([]);
  const [categoryData, setCategoryData] = useState<eventArr | []>([])
  const {categoryLayoutState} = useSelector((state: RootState) => state.OpenCategoryLayout)
  const  {StoredExploreEventData} = useSelector((state: RootState) => state.ExploreEventData)
  const [trigger, setTrigger] = useState("")
  const [firstpageTrigger, setFirstPageTrigger] = useState(false)
  const dispatchReduxEvent = useDispatch()
  const dispatchCategoryIcon = useDispatch()
  const dispatch = useDispatch()
  const [page, setpage] = useState(1)
  const [location, setLocation] = useState({})
  const {userLocationState} = useSelector((state: RootState) => state.userLocationReduxStore)
  const flatListRef = useRef<FlatList<eventProps>>(null)
  
  // const getItem = (data: eventProps[], index: number) => data[index];
  // const getItemCount = (data: eventProps[]) => data.length;

  const {eventDescription, eventDetails, eventSound, eventOptionHeader} = useSelector((state: RootState) => state.MenuNavigation)
  const updateMenuState = {
    eventDescription,
    eventDetails,
     eventSound,
     eventOptionHeader
  }





  


// checks the condition of the layout, if the layout is a empty string it will open the category area and fetch events which match with the category type from the server 
//  if the category layout redux payload contains a string it will pass a empty string and the category are will close
  const handleCategoryReq =  async(selectedCategoryType: string, selectedEventId: string, item: eventProps) => {

    console.log('HandelReq Execute');
    try{
      const storedToken = await AsyncStorage.getItem("token");
      const token = storedToken ? JSON.parse(storedToken).token : null;
      const userToken = token.token;
      const userselected_Category = selectedCategoryType
      const eventId = selectedEventId
      const LayoutState = eventId === categoryLayoutState ? "" : eventId
      dispatchCategoryIcon(userCategoryLayoutAction(LayoutState))

      
      if(LayoutState === eventId){

  
        const CategoryDataList = await userCategoryReq(userToken, userselected_Category)
        const filteredEvent = CategoryDataList.filter((prevEvent: eventProps) => prevEvent.eventId !== eventId)
        
        console.log('HandelReq Execute init');
        // setCategoryData(filteredEvent)
        dispatch(CategoryActionData(filteredEvent))
   
      
      }

    }catch(error){
      console.error('Error on hanleCategory Rey', error)
    }

   }

  //  const handle = useCallback(() => {

  //  }, [categoryData])

  //  Handels the selection of the event that comes from the category list, so if user press on a Event from the Category list.
  // The event will be shown through this funciton  

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


  
 const handleFilteredNewData = () => {

  // Checks if the data is New 
   const filteringEventData = StoredExploreEventData.filter(
     (prev: eventProps) =>
       !data.some((event: eventProps) => event.eventId === prev.eventId)
   );
   return filteringEventData
 };




  const handleScrolling = useCallback(()=> {
    page < 5 ?  setpage((prev) => prev+=1) : alert("You have reached the page limit")
  }, [page])  
    
   

  


   
 
  // Gets the explore events data from the server
  //  afterwwards the data will be modified to display to returns a maximum of 20 events.

  useEffect(() => {

    // Gets the first Explore Event Data Call and stores the data in the redux storage
    const firstEventDataCall = async () => {
        const exploreFetchedData = await handleFirstEventDataCall();
        console.log('First Fetch Length ', exploreFetchedData.length);
        exploreFetchedData.length > 0 && (() => {
          dispatchReduxEvent(ExploreEventDataAction(exploreFetchedData))
          setTrigger("trigger")
        })();
       
       
      
    };


    // Updates the page according to the users scrolling
    const paginationExploreEventData = async (page: number) => {

      page == 1 && data.length < 8 && (() => {
        const modifiedExploreData = handleEventDataAmount(StoredExploreEventData);
        setData(modifiedExploreData);
        console.log('Trigger pAGE 1');
      })();

      (page == 2 && data.length < 16 || page == 3 && data.length < 24)  && (() => {
         // checks for events that are not in page 1, creates a list with the rest
         const filteredNewData =  handleFilteredNewData()
         const reducingTheAmount = handleEventDataAmount(filteredNewData);
         reducingTheAmount && setData((prev) => [...prev, ...reducingTheAmount]);
        //  setTrigger("trigger in page 2-3");r

      })();

  
      page == 4 && data.length == 24 &&( async() => {
        
        // Seen Events 
        const SeeneventDataId = data.map((prev: eventProps) => prev.eventId)

        // Receives complete new Event Data 
        const getNewEventData = await handleUpdateEventData(SeeneventDataId)
        console.log('New EventData Length:', getNewEventData.length);
        const StoreDatainRudux = getNewEventData.length > 0 && dispatchReduxEvent(ExploreEventDataAction(getNewEventData))
        StoreDatainRudux && ( async() => {
          setTrigger("Trigger in page 4")
          const filteredNewData = await handleFilteredNewData()
          const reducingTheAmount = handleEventDataAmount(filteredNewData);


          reducingTheAmount && (() =>{
            setData([...reducingTheAmount]);
            flatListRef.current && flatListRef.current.scrollToOffset({offset: 0, animated: true})
            setpage(1)
            console.log('New Filtered Data:', filteredNewData.length);

          })();
        })()


        



      })();


    
    };

    // gets the location of the user and stores it 
    const getUserLocation = async() => {
      const userLocationData = await handleUserLocation()
      userLocationData &&  dispatch(userLocationAction(userLocationData))
      console.log('Location Trigger');
      
     
    }
    
  
    // Calling all Required Functions
    StoredExploreEventData.length == 0 ? firstEventDataCall() : paginationExploreEventData(page)  
    userLocationState.length == 0 && getUserLocation()
    console.log("userLocationState",userLocationState.length);

  

  
   

  }, [trigger, page]);


  // const page2data = data.map((prev) => prev.eventId)
  // console.log('olddata', page2data);

  console.log("Data Length",data.length)
// 
 

 class EventDataItem extends React.PureComponent<myListProps>{
 
  render() {

    const {index, item} = this.props

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
 }

//  const renderItem = useCallback(
//   ({ item, index }) => {
//       return <EventDataItem item={item} index={index} />;
//   },
//   [] // Add dependencies here if needed (e.g., props or state that affect rendering)
// );



  return (
    <View style={styles.container}>
      {data ? (

        <FlatList
        ref={flatListRef}
         data={data}
        //  getItem={getItem}
        //  getItemCount={getItemCount}
        keyExtractor={item => item.eventId}  //provides a unique key for each item 
         renderItem={({item, index}) => 
         
            // <EventDataItem item={item} index={index} />
          //   <View
          //   key={index}
          //   style={{
          //     padding: categoryLayoutState === item.eventId ? 0 : 1,
          //     flex: 1,        
          //     height: categoryLayoutState === item.eventId ? "4.6%" : "4.6%",
          //   }}
          // >
            
          //   <View style={{
          //    height: categoryLayoutState === item.eventId ? "59.9%" :  "85.8%",   //360 , 515,
          //    padding: categoryLayoutState === item.eventId ? 10 : 3,
          //     //  backgroundColor: "skyblue",
      
          //   }}>
      
          //   <ScrollView
          //     horizontal={true}
          //     style={{
          //       // flexGrow: 1,
          //       height: "100%",
          //       // backgroundColor: "orange",
      
                
        
                  
        
          //     }}
          //   >
          //     {/*first cover slide */}
                
          //     <EventCoverSlide  data={item} />
      
      
          //      {/*second cover slide */}
          //    <EventMoreInfoSlide 
          //    state={updateMenuState}
          //     data={item} 
          //     />
      
          //   </ScrollView>
          //   </View>
      
          //   {/* Decription Area  */}
          //   <View
          //     style={styles.DecriptionArea}
          //   >
             
          //        <EventDescriptionArea 
          //       data={item} 
          //       index={index}
          //       handleCategoryReq={handleCategoryReq}
      
          //       /> 
              
      
          //     {/*  Fetching an array of similar Events that are matching the Event category */}
          //       <View style={{
          //         // backgroundColor: "orange",
          //         height: "44%"
          //       }}>
          //     {categoryLayoutState === item.eventId && (
          //       <>
          //         <Animated.View entering={FadeInDown}>
                
          //           <EventCategoryData  data={categoryData} index={index} handleSelectedEvent={handleShowSelectedEvent}/>
          //         </Animated.View>
            
      
          //         {/* Close btn of event Category */}
          //       <View
          //       style={{
          //         height: "18%", //48
          //         alignItems: "center",
          //         flexDirection: "row",
          //         // justifyContent: "space-between",
          //         justifyContent: "center",
          //         display: categoryLayoutState === item.eventId ? "flex" : "none",
          //         // marginBottom: 30,
          //         marginTop: categoryLayoutState === item.eventId ? 1 : 9,
          //         position: "relative",
          //         top: categoryLayoutState === item.eventId ? "-6%" : "2%",
          //         // backgroundColor: "pink"
          //       }}
          //     >                 
          //         <EventCategoryCloseBtn 
          //         data={item} 
      
      
          //         />
      
      
          //       </View>
          //       </>
          //     )}
      
          //       </View>
      
            
          //   </View>
      
            
          //   </View>

          <MainExplore item={item} index={index} 
          handleCategoryReq={handleCategoryReq}
          handleShowSelectedEvent={handleShowSelectedEvent}
          />

      }
      ItemSeparatorComponent={() => <View style={{height: 70}} />}
      pagingEnabled
      snapToInterval={673.5}
      snapToAlignment="start" 
      decelerationRate="fast" 
      extraData={data} 
      windowSize={3} 
      onEndReached={handleScrolling}

        />

       
 
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

  
});
 
export default ExplorePageStructure