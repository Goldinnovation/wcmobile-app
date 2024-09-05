import React from 'react'
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
import { userCategoryReq } from '../../api/exploreScreen_Api/CategoryDataApi';
import { userFavoredExploredEvent } from '../../api/explore/userFavoredEvent';
import HearthFrequenz from '../../icons/hearthFrequenz';
import FavorIcon from '../../icons/favorIcon';
import Animated, { FadeInDown, SlideInDown, SlideInUp } from 'react-native-reanimated';
import { useDispatch, useSelector } from "react-redux"
import { userActions } from '../../store/userActions';
import { RootState } from '../../store/store';
import { userCategoryLayoutAction } from '../../store/Actions/userLayoutAction';


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
  
  interface EventDescriptionAreaProps {
    data: eventProps;
    index: number;
    // handleFavorPress: (eventId: string) => void;
    handleCategoryReq: (e: string, eId: string, item: eventProps) => void

  }

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


const EventDescriptionArea: React.FC<EventDescriptionAreaProps> = ({data, index, handleCategoryReq}) => {
    const [isOpen, setOpen] = useState("")
    const[state, setNumState ] = useState(0)
 const [categoryData, setCategoryData] = useState<eventArr | []>([])
//  const [IconHeartClick, setIconHeartClick] = useState(false)
 const [IconFavorClick, setIconFavorClick] = useState(false)
 const [redstate, dispatch] = useReducer(reducer, initialState)
 const [eventdata, setData] = useState<eventArr | []>([]);
 const  {IconHeartState} = useSelector((state: RootState) => state.IconData)
 const {categoryLayoutState} = useSelector((state: RootState) => state.OpenCategoryLayout)



 const dispatchIcon = useDispatch()
 const dispatchCategoryIcon = useDispatch()





  const handleCategoryReqPop = () => {
        console.log(categoryLayoutState);
      const LayoutState = categoryLayoutState === false ? true : false
      
      dispatchCategoryIcon(userCategoryLayoutAction(LayoutState))
    
  }

 const handleHearthIconClick = () => {

  const paylaodState = IconHeartState === false ?  true : false

 
    dispatchIcon(userActions(paylaodState))

 }


//  console.log(data);

 const item = data
//  const index = indexNum

//  const handleIconheartPress = () => {
//     setIconHeartClick(!IconHeartClick)
//   }
  

  const handleFavorPress = async(eventId: string) => {

    console.log(eventId);
    setIconFavorClick(!IconFavorClick)
    const storedToken = await AsyncStorage.getItem("token");
    const token = storedToken ? JSON.parse(storedToken).token : null;
    const userToken = token.token;
    if(userToken && eventId){
      const sendUserFavorDataResult = await userFavoredExploredEvent(userToken, eventId)
      console.log(sendUserFavorDataResult);
    }
  }



  


    // const handleCategoryReq = async(e: string, eId: string, item: eventProps) => {




    //     try{
    //       const storedToken = await AsyncStorage.getItem("token");
    //       const token = storedToken ? JSON.parse(storedToken).token : null;
    //       const userToken = token.token;
    //       const userselected_Category = e
    //       const eventId = eId
    //       const eventObj = item
    //       // console.log(categoryData);
    
    
    
         
         
    //       if(state === 0){
    //         setOpen(eventId)
    //         const CategoryData = await userCategoryReq(userToken, userselected_Category)
    //         const filteredEvent = CategoryData.filter((prevEvent: eventProps) => prevEvent.eventId !== eventId)
         
    //         setCategoryData(filteredEvent)
            
    //         setNumState(1)
          
    //       }else{
    //         setOpen("")
    //         setNumState(0)
    
    //       }
    
    //     }catch(error){
    //       console.error('Error on hanleCategory Rey', error)
    //     }
    
    //    }
  return (

    
    <View
    style={{
      //  backgroundColor: "rgba(207,207,208,0.7)",
      width: "100%",
      //  zIndex: -5,
      flexDirection: "row",
      height: 90,
      top: isOpen === item.eventId ? "-6%" : "-3%",
    }}
  >
    <View
      style={{
        //  backgroundColor: "rgba(106, 190, 110,0.7)",
        width: "80%",
        display: "flex",
      }}
    >
      
      

      <View
        style={{
          //  backgroundColor: "blue",
          //  width: "100%",
          //  marginLeft: 10,
          // flexDirection: "row",
          // alignItems: "center",
          // justifyContent: "space-between",
          //  position: "relative",
          top: isOpen === item.eventId ? "11%" : "2%",
          left: isOpen === item.eventId ? "2%" : "0%",
          height: isOpen === item.eventId ? 50 : 0,
        }}
      >
        <View
          style={{
            // backgroundColor: "orange",
            height: isOpen === item.eventId ? 17 : 20,
            width: isOpen === item.eventId ? "100%" : "70%",
            position: "relative",
            left: isOpen === item.eventId ? "2%" : "2%",
            marginTop: 2,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: "500",
              color: "white",
            }}
          >
            Event: {item.eventTitle}
          </Text>
        </View>

        <View
          style={{
            // backgroundColor: "red",
            height: isOpen === item.eventId ? 25 : 35,
            width: isOpen === item.eventId ? "60%" : "74%",
            position: "relative",
            left: isOpen === item.eventId ? "2%" : "2%",
          }}
        >
          <Text style={{ color: "white", fontSize: 11 }}>
            {item.eventDescriptionContent}
          </Text>
        </View>

        <View
          style={{
            // backgroundColor: "green",
            width: "100%",
            flexDirection:
              isOpen === item.eventId ? "row-reverse" : "row",
            gap: 5,
            height: isOpen === item.eventId ? 23 : 30,
            alignItems: "center",
            position: "relative",
            top: isOpen === item.eventId ? "5%" : "1%",
            left: isOpen === item.eventId ? "8%" : "8%",
          }}
        >
          <View
            style={{
              // backgroundColor: "yellow",
              flexDirection: "row",
              gap: 8,
              height: isOpen === item.eventId ? 23 : 30,
              alignItems: "center",
              width: isOpen === item.eventId ? "55.5%" : "60%",
              left: isOpen === item.eventId ? "-18.8%" : "2%",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor:
                  isOpen === item.eventId
                    ? "rgba(0, 48, 131, 1)"
                    : "rgba(0, 0, 0,0.4)",
                //  backgroundColor: isOpen === item.eventId ? "rgba(0, 101, 255,0.5)" : "rgba(204,204,204,0.2)",
                borderRadius: 4,
                alignItems: "center",
                height: 20,
                width: isOpen === item.eventId ? 78 : 78,
                flexDirection: "row",
                //  position: "relative",
                //  padding: 1,
                //  gap: 2,
                // //  display: isOpen === item.eventId ? "flex" :"none",
                //  top: isOpen === item.eventId ? "1.9%" : "2%",
                //  left: isOpen === item.eventId ? "660%" : "0%",
                justifyContent: "center",
                borderWidth: isOpen === item.eventId ? 1 : 1,
                borderColor:
                  isOpen === item.eventId
                    ? "rgba(204,204,204,0.2)"
                    : "rgba(0, 101, 255,0.3)",
              }}
              onPress={() => handleCategoryReqPop()
                // handleCategoryReq(
                //   item.eventType,
                //   item.eventId,
                //   item
                // )
              }
            >
              {/* <Image
            source={require("../../assets/p1.png")}
            style={{
              width: 12,
              height: 12,
            }}
            /> */}
              <Text style={{ color: "white" }}>
                #{item.eventType}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor:
                  isOpen === item.eventId
                    ? "rgba(0, 0, 0,0.4)"
                    : "rgba(0, 0, 0,0.4)",
                borderRadius: 4,
                alignItems: "center",
                height: 20,
                width: isOpen === item.eventId ? 78 : 78,
                flexDirection: "row",
                //  position: "relative",
                //  padding: 1,
                //  gap: 2,
                // //  display: isOpen === item.eventId ? "flex" :"none",
                //  top: isOpen === item.eventId ? "-6.3%" : "-6%",
                //  left: isOpen === item.eventId ? "450%" : "210%",
                justifyContent: "center",
                borderWidth: isOpen === item.eventId ? 1 : 1,
                borderColor:
                  isOpen === item.eventId
                    ? "rgba(68, 182, 120,0.3)"
                    : "rgba(68, 182, 120,0.3)",
              }}
            >
              {/* <Image
            source={require("../../assets/p1.png")}
            style={{
              width: 12,
              height: 12,
            }}
            /> */}
              <Text style={{ color: "white" }}>#Rock</Text>
            </TouchableOpacity>
          </View>

         
          
          <View
            style={{
              backgroundColor:
                isOpen === item.eventId
                  ? "rgba(0, 0, 0,0.4)"
                  : "rgba(0, 0, 0,0.7)",
              borderRadius: 4,
              alignItems: "center",
              display: isOpen === item.eventId ? "flex" : "none",
              //  display: isOpen === item.eventId ? "flex" : "none",
              height: 20,
              width: isOpen ? 98 : 98,
              flexDirection: "row",
              position: "relative",
              padding: 1,
              gap: 5,
              borderWidth: isOpen === item.eventId ? 0 : 1,
              borderColor:
                isOpen === item.eventId
                  ? "rgba(255, 255, 250,0.2)"
                  : "rgba(255, 255, 250,0.3)",
              top: isOpen === item.eventId ? "0%" : "-1770%",
              left: isOpen === item.eventId ? "11%" : "27%",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/w1.png")}
              style={{
                width: 12,
                height: 12,
              }}
            />
            <Text style={{ color: "white" }}>WorldWide</Text>
          </View>
        </View>
      </View>
    </View>

    <View
      style={{
        //  backgroundColor: "rgba(221,221,221,0.5)",
        // backgroundColor: "blue",
        width: "20%",
        gap: 7,

        //  flexDirection: "column",
        //  justifyContent: "center",
        //  alignItems: "center",
        //  position: "relative",
        //  top: isOpen ? "-5%" : "-2%",
      }}
    >
   
      <View
        style={{
          //  backgroundColor:  "pink", //"rgba(204,204,204,0.4
          height: isOpen === item.eventId ? 50 : 40,
          width: isOpen === item.eventId ? 100 : 130,
          // borderRadius: 7,
          // alignItems: "center",
          flexDirection: isOpen === item.eventId ? "row" : "row",
          justifyContent:
            isOpen === item.eventId
              ? "space-around"
              : "space-around",
          // marginTop: 7,
          gap: -2.5,
          left: isOpen === item.eventId ? "-40%" : "-70%",
          position: "relative",
          top: isOpen === item.eventId ? "20%" : "6%",
        }}
      >
        <TouchableOpacity
          style={{
            // backgroundColor: "green",
            position: "relative",
            height: 40,
            // top: isOpen === item.eventId ? "-35%" : "-76%",
            // left: isOpen === item.eventId ? "-10%" : "-65%",
          }}
          onPress={() => handleHearthIconClick()}
        >
          {IconHeartState ? (
            <View>
             
              <HearthFrequenz height={"25"} width={"25"} lineColor={"#ff0000"}/>


              <Text
                style={{
                  color: "white",
                  fontSize: 10,
                  textAlign: "center",
                  fontWeight: "500",
                  marginTop: isOpen === item.eventId ? 4 : 3,
                }}
              >
                223
              </Text>
            </View>
          ) : (
            <View>
              
                <HearthFrequenz height={"25"} width={"25"} lineColor={"#ffffff"}/>
              <Text
                style={{
                  color: "white",
                  fontSize: 10,
                  textAlign: "center",
                  fontWeight: "500",
                  marginTop: isOpen === item.eventId ? 4 : 3,
                }}
              >
                222
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // backgroundColor: "blue",
            borderRadius: 4,
            alignItems: "center",
            height: 40,
            // marginRight:  isOpen === item.eventId ? -2 : 4,

            justifyContent: "center",
          }}
          onPress={() => handleFavorPress(item.eventId)}
        >
          {IconFavorClick ? (
            <View>
              {/* <Image
                source={require("../../assets/s1.png")}
                style={{
                  width: 25,
                  height: 25,
                  position: "relative",
                  top: isOpen === item.eventId ? "-2%" : "4%",
                }}
              /> */}
              <FavorIcon height={"25"} width={"25"} lineColor={"#FBFF00"} />
              <Text
                style={{
                  color: "white",
                  fontSize: 10,
                  textAlign: "center",
                  fontWeight: "500",
                  marginTop: isOpen === item.eventId ? 3 : 3,
                }}
              >
                113
              </Text>
            </View>
          ) : (
            <View>
              {/* <Image
                source={require("../../assets/s.png")}
                style={{
                  width: 25,
                  height: 25,
                  position: "relative",
                  top: isOpen === item.eventId ? "-2%" : "4%",
                }}FBFF00
              /> */}
              <FavorIcon height={"25"} width={"25"} lineColor={"#ffffff"} />
              <Text
                style={{
                  color: "white",
                  fontSize: 10,
                  textAlign: "center",
                  fontWeight: "500",
                  marginTop: isOpen === item.eventId ? 3 : 3,
                }}
              >
                112
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
    </View>
   
  )
}
  

export default EventDescriptionArea
