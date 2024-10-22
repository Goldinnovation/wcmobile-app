import { ReactNode, useEffect, useReducer, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList
} from "react-native";
import { userCategoryReq } from "../../api/exploreScreen_Api/CategoryDataApi";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store";
import { userCategoryLayoutAction } from "../../store/Actions/userLayoutAction";
import { ExploreEventDataAction } from "../../store/Actions/exploreEventDataAction";
import handleEventDataAmount from "../../handler/Explore/handleEventdefaultDataAmount";
import handleUserLocation from "../../handler/User/Location/handleUserLocation";
import { userLocationAction } from "../../store/Actions/userLocationAction";
import handleFirstEventDataCall from "../../handler/Explore/handleFirstEventDataCall";
import handleUpdateEventData from "../../handler/Explore/handleUpdateEventDataCall";
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










const  ExplorePageStructure = ()  => {
  const [data, setData] = useState<eventArr | []>([]);
  const [categoryData, setCategoryData] = useState<eventArr | []>([]);
  const { categoryLayoutState } = useSelector(
    (state: RootState) => state.OpenCategoryLayout
  );
  const { StoredExploreEventData } = useSelector(
    (state: RootState) => state.ExploreEventData
  );
  const [trigger, setTrigger] = useState("");
  const [firstpageTrigger, setFirstPageTrigger] = useState(false);
  const dispatchReduxEvent = useDispatch();
  const dispatchCategoryIcon = useDispatch();
  const dispatch = useDispatch();
  const [page, setpage] = useState(1);
  const [location, setLocation] = useState({});
  const { userLocationState } = useSelector(
    (state: RootState) => state.userLocationReduxStore
  );
  const flatListRef = useRef<FlatList<eventProps>>(null);
  



/**
 Checks the layout condition. If the layout is an empty string, it will open the category area and fetch events that match the category type from the server.
 If the category layout Redux payload contains a string, it will pass an empty string, and the category area will close.
 */

  const handleCategoryReq = async (
    selectedCategoryType: string,
    selectedEventId: string,
    item: eventProps
  ) => {
    try {
      const storedToken = await AsyncStorage.getItem("token");
      const token = storedToken ? JSON.parse(storedToken).token : null;
      const userToken = token.token;
      const userselected_Category = selectedCategoryType;
      const eventId = selectedEventId;
      const LayoutState = eventId === categoryLayoutState ? "" : eventId;
      dispatchCategoryIcon(userCategoryLayoutAction(LayoutState));

      if (LayoutState === eventId) {
        const CategoryDataList = await userCategoryReq(
          userToken,
          userselected_Category
        );
        const filteredEvent = CategoryDataList.filter(
          (prevEvent: eventProps) => prevEvent.eventId !== eventId
        );

        // setCategoryData(filteredEvent)
        dispatch(CategoryActionData(filteredEvent));
      }
    } catch (error) {
      console.error("Error on hanleCategory Rey", error);
    }
  };




  /** 
   * The function handles the selected event state that comes from the category event data list. If a user clicks on an event from the category data,
   * the event will be displayed on the current event cover.
   *
  */
  const handleShowSelectedEvent = (
    CategoryItem: eventProps,
    itemindex: number,
    categoryId: string
  ) => {
    const selectedEvent = CategoryItem;
    const prevEventIndex = itemindex;
    if (selectedEvent) {
      
      const checkifDataExistinArr = data?.some(event => event.eventId === selectedEvent.eventId)
      


      const newData =  checkifDataExistinArr ? (() => {

        // Gets a new event Data from redux
        const filteredData = StoredExploreEventData.filter((prevExplore: eventProps) => 
          !data.some((prev: eventProps) => prev.eventId === prevExplore.eventId )
       )
      //  Gets the index 
       const lastObject = filteredData[0]
      //  console.log("Lst obj", lastObject);

       return [...data.filter((prev: eventProps) => prev.eventId !== selectedEvent.eventId),lastObject] 
        
      })() : (() => {
        return  [...data]
      })();
      
        newData[prevEventIndex] = selectedEvent;
        dispatchCategoryIcon(userCategoryLayoutAction(categoryId));
        setData(newData);

    
     
    
    }
  };



 // The function handles the amount of event data that the user can scroll through based on the page number.
  const handleFilteredNewData = () => {
    // Checks if the data is New
    const filteringEventData = StoredExploreEventData.filter(
      (prev: eventProps) =>
        !data.some((event: eventProps) => event.eventId === prev.eventId)
    );
    return filteringEventData;
  };


  // Represents the users hand Scrolling
  const handleScrolling = () => {
    page < 5
      ? setpage((prev) => (prev += 1))
      : alert("You have reached the page limit");
  };





/** 
   *  The useEffect hook handles pagination logic and stores the user's current location
   *
  */

  useEffect(() => {
    // Gets the first list of Explorative Event Data and stores the data in the redux storage
    const firstEventDataCall = async () => {
      const exploreFetchedData = await handleFirstEventDataCall();
      exploreFetchedData.length > 0 &&
        (() => {
          dispatchReduxEvent(ExploreEventDataAction(exploreFetchedData));
          setTrigger("trigger");
        })();
    };

    // Updates the page according to the users scrolling - Pagination
    const paginationExploreEventData = async (page: number) => {
      page == 1 &&
        data.length < 8 &&
        (() => {
          const modifiedExploreData = handleEventDataAmount(
            StoredExploreEventData
          );
          setData(modifiedExploreData);
          console.log("Trigger pAGE 1");
        })();

      ((page == 2 && data.length < 16) || (page == 3 && data.length < 24)) &&
        (() => {
          // checks for events that are not in page 1, creates a list with the rest
          const filteredNewData = handleFilteredNewData();
          const reducingTheAmount = handleEventDataAmount(filteredNewData);
          reducingTheAmount &&
            setData((prev) => [...prev, ...reducingTheAmount]);
          //  setTrigger("trigger in page 2-3");r
        })();

        // Fetching complete new Data when page 4 is reached
      page == 4 &&
        data.length == 24 &&
        (async () => {
          // Seen Events
          const SeeneventDataId = data.map((prev: eventProps) => prev.eventId);

          // Receives complete new Event Data
          const getNewEventData = await handleUpdateEventData(SeeneventDataId);
          console.log("New EventData Length:", getNewEventData.length);
          const StoreDatainRudux =
            getNewEventData.length > 0 &&
            dispatchReduxEvent(ExploreEventDataAction(getNewEventData));
          StoreDatainRudux &&
            (async () => {
              setTrigger("Trigger in page 4");
              const filteredNewData = await handleFilteredNewData();
              const reducingTheAmount = handleEventDataAmount(filteredNewData);

              // scrolls the user back to the beginning
              reducingTheAmount &&
                (() => {
                  setData([...reducingTheAmount]);
                  flatListRef.current &&
                    flatListRef.current.scrollToOffset({
                      offset: 0,
                      animated: true,
                    });
                  setpage(1);
                })();
            })();
        })();
    };

    // gets the location of the user and stores it
    const getUserLocation = async () => {
      const userLocationData = await handleUserLocation();
      userLocationData && dispatch(userLocationAction(userLocationData));
    };

    // Calling all Required Functions
    StoredExploreEventData.length == 0
      ? firstEventDataCall()
      : paginationExploreEventData(page);
    userLocationState.length == 0 && getUserLocation();
  }, [trigger, page]);





  console.log("Data Length", data.length);





  return (
    <View style={styles.container}>
      {data ? (
        <FlatList
          ref={flatListRef}
          data={data}
          keyExtractor={(item) => item.eventId} //provides a unique key for each item
          renderItem={({ item, index }) => (
            <MainExplore
              item={item}
              index={index}
              handleCategoryReq={handleCategoryReq}
              handleShowSelectedEvent={handleShowSelectedEvent}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 70 }} />}
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

  
});
 
export default ExplorePageStructure