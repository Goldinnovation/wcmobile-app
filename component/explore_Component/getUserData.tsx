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
import Slider from "@react-native-community/slider";
import Animated, { FadeInDown, SlideInDown, SlideInUp } from 'react-native-reanimated';
import { userCategoryReq } from "../../api/exploreScreen_Api/CategoryDataApi";
import { userFavoredEvent } from "../../api/favorScreen_Api/userFavoredEvent";
import HearthFrequenz from "../../icons/hearthFrequenz";
import FavorIcon from "../../icons/favorIcon";
import EventCategoryCloseBtn from "./eventCategoryCloseBtn";
import EventCategoryFetchedData from "./eventCategoryfetchedData";


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
export default function GetUserData() {
  const [data, setData] = useState<eventArr | []>([]);
  const [value, setValue] = useState(0);
  const [isOpen, setOpen] = useState("")
  const [categoryData, setCategoryData] = useState<eventArr | []>([])
  const [eventData, setEventData] = useState<eventProps | null>(null)
  const [key, setKey] = useState("")
  const[state, setNumState ] = useState(0)
  const [IconHeartClick, setIconHeartClick] = useState(false)
  const [IconFavorClick, setIconFavorClick] = useState(false)

  const [redstate, dispatch] = useReducer(reducer, initialState)
  




  const handleIconheartPress = () => {
    setIconHeartClick(!IconHeartClick)
  }

  const handleFavorPress = async(eventId: string) => {

    console.log(eventId);
    setIconFavorClick(!IconFavorClick)
    const storedToken = await AsyncStorage.getItem("token");
    const token = storedToken ? JSON.parse(storedToken).token : null;
    const userToken = token.token;
    if(userToken && eventId){
      const sendUserFavorDataResult = await userFavoredEvent(userToken, eventId)
      console.log(sendUserFavorDataResult);
    }
  }


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
      // console.log("inside");
      const newData = [...data];

      newData[coverEventIndex] = selectedEvent;
      setData(newData);
      setOpen(categoryId)
    }
  };

  const handletoggleCLose = () => {
    setOpen("")
    setNumState(0)
  }


  const handleCategoryClose = () => {
    setOpen("")
    setNumState(0)
  }


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
                padding: isOpen === item.eventId ? 0 : 1,
                marginBottom: isOpen === item.eventId ? 50 : 50,
                // backgroundColor: "green",
                height: isOpen === item.eventId ? 600 : 600,
              }}
            >
              
              <View style={{
               height: isOpen === item.eventId ? 345 : 515,
               padding: isOpen === item.eventId ? 11 : 3,
                //  backgroundColor: "skyblue",

              }}>
              <ScrollView
                horizontal={true}
                style={{
                  // backgroundColor:isOpen === item.eventId ? "orange": "pink",
                  //  margin: "auto",
                  // padding: isOpen === item.eventId ? 0 : 3,
                  // paddingLeft: isOpen === item.eventId ? 9 : 3,
                  // paddingRight: isOpen === item.eventId ? 9 : 3,
                  // paddingTop: isOpen === item.eventId ? 9 : 3,
                  // height: isOpen === item.eventId ? 300 : 520,
                  flexGrow: 1
                }}
              >
                {/*first cover slide */}
                  
                <View style={{
                  // backgroundColor: "skyblue",
                  // height: isOpen === item.eventId ? 200 : 490,
                }}>

                  {/* event host information(name and Img)  */}
                   {/*first event slide   */}
                  <View
                    style={{
                      // backgroundColor: "rgba(18, 114, 50, 0.7)",
                      flexDirection: "row",
                      gap: 7,
                      width: "40%",
                      position: "absolute",
                      zIndex: 1,
                      // display: isOpen === item.eventId ? "flex" : "none",
                      top: isOpen === item.eventId ? "64%" : "90%",
                      left: isOpen === item.eventId ? "2%" : "2%",
                    }}
                  >
                    <Image
                      source={require("../../assets/7.jpg")}
                      style={{
                        width: 30,
                        height: 35,
                        borderRadius: 100,
                        // marginLeft: 20,
                        // position: "relative",
                        // top: isOpen === item.eventId ? "-30%" : "-30%",
                        marginTop: 1,
                      
                      }}
                    />
                    <View
                      style={{
                        marginTop: 10,
                        // position: "relative",
                        // display: isOpen === item.eventId ? "flex" : "none",
                        // top: isOpen === item.eventId ? "-35%" : "-34%",
                        // left: isOpen === item.eventId ? "14%" : "14%",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 13,
                          fontWeight: "600",
                        }}
                      >
                        PrincessNokia
                      </Text>
                    </View>
                  </View>

                  {/*Event invitation type  */}
                  <View
                    style={{
                      backgroundColor:
                        isOpen === item.eventId
                          ? "rgba(0, 0, 0,0.4)"
                          : "rgba(0, 0, 0,0.7)",
                      borderRadius: 4,
                      alignItems: "center",
                      display: isOpen === item.eventId ? "none" : "flex",
                      //  display: isOpen === item.eventId ? "flex" : "none",
                      height: 20,
                      width: isOpen ? 98 : 98,
                      flexDirection: "row",
                      position: "absolute",
                      padding: 1,
                      gap: 5,
                      borderWidth: isOpen === item.eventId ? 0 : 1,
                      borderColor:
                        isOpen === item.eventId
                          ? "rgba(255, 255, 250,0.2)"
                          : "rgba(255, 255, 250,0.3)",
                      top: isOpen === item.eventId ? "0%" : "3.4%",
                      left: isOpen === item.eventId ? "11%" : "71%",
                      justifyContent: "center",
                      zIndex: 1,
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


                  <View
                      style={{
                        // backgroundColor: "yellow",
                        width: "20%",
                        flexDirection: "row",
                        // justifyContent: "flex-end",
                        gap: 7,
                        // marginRight: "1%",
                        marginTop: 4,
                        left: isOpen === item.eventId ? "9%" : "83%",
                        top: isOpen === item.eventId ? "5%" : "92.3%",
                        // display: "none",
                        position: "absolute",
                        zIndex: 1
                      }}
                    >
                      <View style={styles.contentLayer_side_2}></View>
                      <View style={styles.contentLayer_side_1}></View>
                      <View style={styles.contentLayer_side_1}></View>
                      <View style={styles.contentLayer_side_1}></View>
                  </View>

                  <Image
                    source={{ uri: item.ImageCoverUpload }}
                    style={{
                      width: isOpen === item.eventId ? 350 : 367,
                      // height: 490,

                      // height: isOpen === item.eventId ? 350 : 490,
                      height: isOpen === item.eventId ? 315 : 500,

                      borderRadius: 9,
                      //  paddingRight: 30,
                    }}
                  />
                </View>


                 {/*second cover slide */}
                <View
                  style={{
                    // backgroundColor: "black",

                    marginLeft: isOpen === item.eventId ? 10 : 10,
                    marginRight: isOpen === item.eventId ? 10 : 10,
                    paddingLeft: isOpen === item.eventId ? 11 : 3,
                    paddingRight: isOpen === item.eventId ? 9 : 3,
                    padding: isOpen === item.eventId ? 0 : 3,
                    width: isOpen === item.eventId ? 345 : 364,
                    height: isOpen === item.eventId ? 315 : 437,
                    // width: isOpen === item.eventId ? 355 : 367,
                    // height: isOpen === item.eventId ? 350 : 490,
                  }}
                >
                  {/* <Image
                    source={{ uri: item.ImageCoverUpload }}
                    style={{
                      width: isOpen === item.eventId ? 345 : 367,
                      // height: 490,

                      height: isOpen === item.eventId ? 315 : 440,
                      borderRadius: 9,
                      //  paddingRight: 30,
                    }}
                  /> */}
                  <View
                    style={{
                      backgroundColor:
                        isOpen === item.eventId
                          ? "rgba(20,20,20,0.99)"
                          : "rgba(149,149,149,0.3)", //rgba(149,149,149,0.3)
                      position: "absolute",
                      width: isOpen === item.eventId ? 345 : 360,
                      height: isOpen === item.eventId ? 315 : 420,
                      marginLeft: isOpen === item.eventId ? 8 : 0,
                      // marginRight: 3,
                      top: "0%",
                      left: "3%",
                      borderRadius: 9,
                      borderWidth: 1, 
                     borderColor: "rgba(255, 255, 255,0.5)",
                     shadowColor: "black",
                     shadowOffset: { width: 0, height: 2 },
                     shadowOpacity: 0.5,
                     shadowRadius: 4,

                      elevation: 5,
                     
                    }}
                  >
                    <View
                      style={{
                        // backgroundColor: "pink",
                        height: 190,
                      }}
                    >
                    
                      <View style={{
                           position: "absolute",
                         
                           zIndex: 3,
                           top: isOpen === item.eventId ? "64%" : "490%",
                           left: isOpen === item.eventId ? "2%" : "5%",

                        }}>

                        </View>
                   
                      {/* Event Description Area Header */}
                      <View>
                      <View style={{
                           backgroundColor:
                           isOpen === item.eventId
                             ? "rgba(20,20,20,0.99)"
                             : "rgba(20,20,20,0.4)",
                         position: "absolute",
                         width: isOpen === item.eventId ? 355 : 358,
                         height: isOpen === item.eventId ? 20 : 90,
                        borderBottomWidth: 1,
                        borderColor: "rgba(255, 255, 255,0.5)",
                        borderTopLeftRadius: 9,
                        borderTopRightRadius: 9,
                         zIndex: 1
                        }}>


                      </View>
                      <Image
                              source={{ uri: item.ImageCoverUpload }}
                              style={{
                                width: isOpen === item.eventId ? 355 : 358,
                                // height: 490,

                                height: isOpen === item.eventId ? 20 : 90,
                                borderTopLeftRadius: 9,
                                borderTopRightRadius: 9,
                                borderBottomWidth: 1,
                                borderColor: "rgba(255, 255, 255,0.9)"
                                //  paddingRight: 30,
                              }}
                            />


                      </View>
                           
                      {/* Event Description Area */}
                          { redstate.eventDescription && (
                          <View style={{
                           

                            
                          }}>
                            {/* Host Image */}
                             <View
                            style={{
                              // backgroundColor: "red",
                              height: 80,
                              // marginTop: 65,
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                              position:"relative",
                              top:  isOpen === item.eventId ? "1%" : "-9%",
                              zIndex: 2
                            }}
                          >
                            <Image
                              source={require("../../assets/7.jpg")}
                              style={{
                                width: 100,
                                height: 100,
                                borderRadius: 100,
                                position:"absolute",
                                zIndex: 2
                              
                              }}
                            />
                            </View>
                            <View
                            style={{
                              //  backgroundColor: "orange",
                              height: 40,

                              //  flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              position:"relative",
                              top:  isOpen === item.eventId ? "1%" : "-7%"
                            }}
                          >
                            <View
                              style={{
                                // backgroundColor: "green",
                                marginLeft: 10,
                              }}
                            >
                              <Text
                                style={{
                                  color: "white",
                                  fontSize: 25,
                                  // textAlign: "center"
                                }}
                              >
                                {item.eventHostName}
                              </Text>
                            </View>

                            <View
                              style={{
                                // backgroundColor: "purple",
                                position: "relative",
                                top: -40,
                                left: 46,
                                height: 15,
                                width: 30,
                                marginLeft: 5,
                                borderWidth: 1,
                                padding: "auto",
                                // borderBlockColor: "white",
                                borderColor: "lightgrey",
                                zIndex: 2
                              }}
                            >
                              <Text
                                style={{
                                  color: "lightgrey",
                                  textAlign: "center",
                                  fontSize: 10,
                                }}
                              >
                                Host
                              </Text>
                            </View>
                          </View> 
                           <View
                          style={{
                            // backgroundColor: "green",
                            height: 180,
                            position:"relative",
                            top:  isOpen === item.eventId ? "1%" : "-7%"
                          }}
                        >
                          <View
                            style={{
                              // backgroundColor: "grey",
                              // justifyContent: "center",
                              padding: 4,
                              height: 28,
                            }}
                          >
                            <View
                              style={{
                                // backgroundColor: "rgba(240,240,240,1)",

                                // borderRadius: 50,
                                // borderColor: "white",
                                width: "50%",
                                // overflow: "visible",
                              }}
                            >
                              <Text
                                style={{
                                  color: "white",
                                  // textAlign: "center",
                                }}
                              >
                                Event: {item.eventTitle}
                              </Text>
                            </View>
                          </View>

                          <View
                            style={{
                              //  backgroundColor: "pink",
                              height: isOpen === item.eventId ?  90 : 140,
                              padding: 9,
                              margin: 5,
                              //  marginLeft: 1
                              //  borderTopWidth: 1,
                              //  borderTopColor: "rgba(255, 255, 255,0.9)"
                            }}
                          >
                            {redstate.eventDescription && (
                              <View
                                style={
                                  {
                                    //  backgroundColor: "green",
                                    //  height: 130,
                                  }
                                }
                              >
                                <View
                                  style={{
                                    //  backgroundColor: "skyblue",
                                    //  overflow: "scroll",
                                    height: 145,
                                  }}
                                >
                                  <Text
                                    style={{
                                      color: "white",
                                    }}
                                  >
                                    {item.eventDescriptionContent}
                                  </Text>
                                </View>

                              
                              </View>
                            )}
                          </View>
                        
                        </View>   
                        </View>
                        )}

                        {
                          redstate.eventDetails && (
                            <View>
                               <View
                            style={{
                              // backgroundColor: "green",
                              height: 350,
                            }}
                    >
                    

                      <View
                        style={{
                          //  backgroundColor: "pink",
                          height: isOpen === item.eventId ?  90 : 289,
                          // padding: 9,
                          // margin: 5,
                          // marginTop: 33
                          //  marginLeft: 1
                          //  borderTopWidth: 1,
                          //  borderTopColor: "rgba(255, 255, 255,0.9)"
                        }}
                      >
                        <View
                        style={{
                          // backgroundColor: "grey",
                          justifyContent: "center",
                          alignItems: "center",
                          // padding: 4,
                          height: 58,
                          // flexDirection: "column"
                            //   borderBottomWidth: 1,
                            // borderColor: "rgba(255, 255, 255,0.5)"
                        }}
                      >
                        <View
                          style={{
                            // backgroundColor: "green",
                            // borderRadius: 50,
                            // borderColor: "white",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            // marginTop: 15,
                            // height: 2,
                            
                            // borderWidth: 1, 
                            // 
                            // borderBottomWidth: 1,
                            // borderColor: "white"
                            // overflow: "visible",
                          }}
                        >
                          
                          <Text
                            style={{
                              color: "rgba(221,221,221,0.8)",
                              fontSize: 28,
                              // position: "absolute",
                              // top: -17
                              // textAlign: "center",
                            }}
                          >
                           {redstate.eventOptionHeader} 
                          </Text>

                          
                         
                          {/* <Image
                                source={require("../../assets/a1.png")}
                                style={{
                                  width: 43,
                                  height: 43,
                                  // borderRadius: 100,
                                }}
                              /> */}
                        </View>
                      </View>

                        {/* Total section - Details */}
                          <View
                            style={{
                              gap: 4,
                            }}
                          >

                           {/* Date section - Details */}

                            <View
                              style={{
                                // backgroundColor: "rgba(203,203,203,0.5)",
                                height: 30,
                                alignItems: "center",
                                flexDirection: "row",
                                padding: 3,
                                borderTopWidth: 1,
                                borderTopColor: "rgba(255, 255, 255,0.5)",
                                borderBottomWidth: 1,
                                borderBottomColor: "rgba(255, 255, 255,0.5)"
                              }}
                            >

                              <View style={{
                                // backgroundColor: "red", 
                                width: "75%",
                                flexDirection: "row",
                                height: 30,
                                alignItems: "center",
                                borderRightWidth: 1, 
                                borderRightColor: "rgba(255, 255, 255,0.5)",
                                padding: 3,


                              }}> 
                              <Image
                                source={require("../../assets/k2.png")}
                                style={{
                                  width: 13,
                                  height: 13,
                                  // borderRadius: 100,
                                }}
                              />
                              <Text
                                style={{
                                  color: "white",
                                }}
                              >
                                {"  "}
                                {item.eventDate}
                              </Text>


                              </View>
                             

                                {/* Time section - Details */}
                              <View
                              style={{
                                flexDirection: "row",
                                height: 30,
                                // backgroundColor: "rgba(203,203,203,0.5)",
                                alignItems: "center",
                                padding: 3,
                                width: "26%",
                                marginLeft: 6
                                // borderBottomWidth: 1,
                                // borderBottomColor: "rgba(255, 255, 255,0.5)",
                              }}
                            >
                              <Image
                                source={require("../../assets/t1.png")}
                                style={{
                                  width: 13,
                                  height: 13,
                                  // borderRadius: 100,
                                }}
                              />
                              <Text
                                style={{
                                  color: "white",
                                  // marginLeft: 6
                                }}
                              >
                                {"  "}
                                {item.eventTime}
                              </Text>
                            </View>
                            </View>

                        

                           

                            {/* Weather seciton-Details  */}

                            <View
                              style={{
                                flexDirection: "row",
                                height: 30,
                                // backgroundColor: "rgba(203,203,203,0.5)",
                                alignItems: "center",
                                padding: 3,
                                justifyContent: "space-between",
                                borderBottomWidth: 1,
                                borderBottomColor: "rgba(255, 255, 255,0.5)",
                              }}
                            >
                              <View
                                style={{
                                  // backgroundColor: "red",
                                  width: "30%",
                                  flexDirection: "row",
                                }}
                              >
                                <Image
                                  source={require("../../assets/wo1.png")}
                                  style={{
                                    width: 15,
                                    height: 15,
                                    // borderRadius: 100,
                                  }}
                                />
                                <Text
                                  style={{
                                    color: "white",
                                  }}
                                >
                                  {"  "}
                                  22C
                                </Text>
                              </View>
                              <View
                                style={{
                                  // backgroundColor: "green",
                                  width: "20%",
                                  flexDirection: "row",
                                  height: 30,
                                  gap: 10,
                                  alignItems: "center",
                                }}
                              >
                                <View>
                                  <Image
                                    source={require("../../assets/tsh1.png")}
                                    style={{
                                      width: 20,
                                      height: 20,
                                      // borderRadius: 100,
                                    }}
                                  />
                                </View>
                                <View>
                                  <Image
                                    source={require("../../assets/sli1.png")}
                                    style={{
                                      width: 25,
                                      height: 25,
                                      // borderRadius: 100,
                                    }}
                                  />
                                </View>
                              </View>
                            </View>

                            {/* Payment section - Details */}
                            <View
                              style={{
                                flexDirection: "row",
                                height: 30,
                                // backgroundColor: "rgba(203,203,203,0.5)",
                                alignItems: "center",
                                padding: 3,
                                justifyContent: "space-between",
                                borderBottomWidth: 1,
                                borderBottomColor: "rgba(255, 255, 255,0.5)"
                              }}
                            >
                              <View
                                style={{
                                  // backgroundColor: "red",
                                  width: "30%",
                                  flexDirection: "row",
                                }}
                              >
                                <Image
                                  source={require("../../assets/e1.png")}
                                  style={{
                                    width: 15,
                                    height: 15,
                                    // borderRadius: 100,
                                  }}
                                />
                                <Text
                                  style={{
                                    color: "white",
                                  }}
                                >
                                  {"  "}
                                  15€
                                </Text>
                              </View>
                              <View
                                style={{
                                  // backgroundColor: "green",
                                  width: "30%",
                                  flexDirection: "row",
                                  height: 30,
                                  gap: 10,
                                  alignItems: "center",
                                }}
                              >
                                <View>
                                  <Image
                                    source={require("../../assets/bc1.png")}
                                    style={{
                                      width: 20,
                                      height: 20,
                                      // borderRadius: 100,
                                    }}
                                  />
                                </View>
                                <View>
                                  <Image
                                    source={require("../../assets/fn2.png")}
                                    style={{
                                      width: 25,
                                      height: 25,
                                      // borderRadius: 100,
                                    }}
                                  />
                                </View>
                                <View>
                                  <Image
                                    source={require("../../assets/py1.png")}
                                    style={{
                                      width: 25,
                                      height: 25,
                                      // borderRadius: 100,
                                    }}
                                  />
                                </View>
                              </View>
                            </View>
                           
                           {/* Card - Addresse and City */}
                            <View
                              style={{
                                flexDirection: "row",
                                height: 57,
                                // backgroundColor: "rgba(203,203,203,0.5)",
                                alignItems: "center",
                                padding: 3,
                                justifyContent: "space-between",
                                borderBottomWidth: 1,
                                borderBottomColor: "rgba(255, 255, 255,0.5)"
                                
                              }}
                            >
                              <View
                                style={{
                                  // backgroundColor: "red",
                                  width: "70%",
                                  // flexWrap: "wrap",
                                  height: 43,
                                  flexDirection: "row",
                                  alignItems: "center",
                                  gap: 4
                                 
                                  
                                }}
                              >
                                <View style={{
                                  //  backgroundColor: "orange",

                                }}>
                                   <Image
                                  source={require("../../assets/ci.png")}
                                  style={{
                                    width: 15,
                                    height: 15,
                                    // borderRadius: 100,
                                  }}
                                />
                                </View>
                                <View  style={{
                                  //  backgroundColor: "green",
                                  
                                   display:"flex",
                                   flexWrap: "wrap",
                                   width: "70%",
                                   position: "relative",
                                   left: "-10%"

                                }}>
                                  <View>
                                  <Text
                                  style={{
                                    color: "white",
                                   
                                  }}
                                >
                                  {"  "}
                                  {item.eventAddress}, {item.eventZipcode}
                                  
                                   
                                </Text>
                                  </View>
                                  <View style={{
                                    //  backgroundColor: "pink",
                                     marginLeft: 7.1
                                  
                                  }}>
                                  <Text
                                  style={{
                                    color: "white",
                                   
                                  }}
                                >
                                 
                                  
                                   {item.cityType}
                                </Text>

                                  </View>
                               

                                </View>
                               
                               
                              </View>
                              <View
                                style={{
                                  // backgroundColor: "green",
                                  width: "20%",
                                  flexDirection: "row",
                                  height: 30,
                                  gap: 10,
                                  alignItems: "center",
                                  position: "relative",
                                  top: "0%",
                                  left: "-5%",
                              
                                }}
                              >
                               
                                <View>
                                  <Image
                                    source={require("../../assets/im.jpg")}
                                    style={{
                                      width: 75,
                                      height: 45,
                                      borderRadius: 9,
                                      borderWidth: 1,
                                      borderColor: "aqua"
                                    }}
                                  />
                                </View>
                              </View>
                            </View>



                            {/* Team section - Details */}

                            <View
                              style={{
                                flexDirection: "row",
                                height: 30,
                                // backgroundColor: "rgba(203,203,203,0.5)",
                                alignItems: "center",
                                padding: 3,
                                // borderBottomWidth: 1,
                                // borderBottomColor: "white",
                              }}
                            >
                              <Image
                                source={require("../../assets/al1.png")}
                                style={{
                                  width: 15,
                                  height: 15,
                                  // borderRadius: 100,
                                }}
                              />
                              <Text
                                style={{
                                  color: "white",
                                }}
                              >
                                {"  "}
                                Plan:
                              </Text>
                             
                            </View>

                            {/* <View style={{
                              // backgroundColor: "red",
                              height: 65,
                              flexDirection: "row",
                              justifyContent: "space-around",
                              alignItems: "center",
                              // flexWrap: "wrap"
                            }}>
                              <View>
                                <Image
                                    source={require("../../assets/profileImg/1.jpg")}
                                    style={{
                                      width: 45,
                                      height: 45,
                                      borderRadius: 50,
                                     
                                    }}
                                  />
                                  <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Planner</Text>
                                  </View>
                              <View>
                              <Image
                                    source={require("../../assets/profileImg/2.jpg")}
                                    style={{
                                      width: 45,
                                      height: 45,
                                      borderRadius: 50,
                                     
                                    }}
                                  />
                                <Text style={{color:"white",textAlign: "center", fontSize: 8,marginTop: 5 }}>Music</Text>

                              </View>
                              <View>
                              <Image
                                    source={require("../../assets/profileImg/3.jpg")}
                                    style={{
                                      width: 45,
                                      height: 45,
                                      borderRadius: 50,
                                     
                                    }}
                                  />
                                 <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Light</Text>

                              </View>
                              
                              <View>
                              <Image
                                    source={require("../../assets/profileImg/5.jpg")}
                                    style={{
                                      width: 45,
                                      height: 45,
                                      borderRadius: 50,
                                     
                                    }}
                                  />
                                <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Sound</Text>

                              </View>
                              <View>
                              <Image
                                    source={require("../../assets/profileImg/6.jpg")}
                                    style={{
                                      width: 45,
                                      height: 45,
                                      borderRadius: 50,
                                     
                                    }}
                                  />
                               <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Planner</Text>
                              </View>


                            </View> */}



                            
                          </View>
                       

                        
                      </View>
                      
                    </View>

                            </View>
                          )
                        }

                        { redstate.eventSound && (
                          <View style={{   
                          }}>
                            {/* Host Image */}
                             <View
                            style={{
                              // backgroundColor: "red",
                              height: 80,
                              // marginTop: 65,
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                              position:"relative",
                              top:  isOpen === item.eventId ? "1%" : "15%",
                              zIndex: 2
                            }}
                          >
                            <Image
                              source={require("../../assets/profileImg/2.jpg")}
                              style={{
                                width: 100,
                                height: 100,
                                borderRadius: 100,
                                position:"absolute",
                                zIndex: 2
                              
                              }}
                            />
                            </View>

                            {/* Username Area - eventSound */}
                            <View
                            style={{
                              //  backgroundColor: "orange",
                              height: 40,

                              //  flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              position:"relative",
                              top:  isOpen === item.eventId ? "1%" : "18%"
                            }}
                          >
                            <View
                              style={{
                                // backgroundColor: "green",
                                marginLeft: 10,
                              }}
                            >
                              <Text
                                style={{
                                  color: "white",
                                  fontSize: 25,
                                  // textAlign: "center"
                                }}
                              >
                                {item.eventHostName}
                              </Text>
                            </View>
                          
                        
                          </View> 
                          {/* Artist Deatils Section - eventSound */}
                           <View
                          style={{
                            // backgroundColor: "green",
                            height: 135,
                            position:"relative",
                            top:  isOpen === item.eventId ? "1%" : "-7%"
                          }}
                        >
                          <View
                            style={{
                              // backgroundColor: "grey",
                              // justifyContent: "center",
                              padding: 4,
                              height: 38,
                            }}
                          >
                            <View
                              style={{
                                // backgroundColor: "rgba(240,240,240,1)",

                                // borderRadius: 50,
                                // borderColor: "white",
                                width: "12%",
                                // flexDirection: "row",
                                alignItems: "center",
                                gap: 30,
                                justifyContent: "center",
                                position: "relative", 
                                top:isOpen === item.eventId ? "1%" : "-208%",
                                left: isOpen === item.eventId ? "1%" : "86%"


                              
                                // overflow: "visible",
                              }}
                            >
                                    <Image
                                source={require("../../assets/sc1.png")}
                                style={{
                                  width: 25,
                                  height: 25,
                                  // borderRadius: 100,
                                }}
                              />
                                <Image
                                source={require("../../assets/ig1.png")}
                                style={{
                                  width: 25,
                                  height: 25,
                                  // borderRadius: 100,
                                }}
                              />

                                <Image
                                source={require("../../assets/ti1.png")}
                                style={{
                                  width: 25,
                                  height: 25,
                                  // borderRadius: 100,
                                }}
                              />
                             
                            </View>
                          </View>

                          <View
                            style={{
                              //  backgroundColor: "pink",
                              height: isOpen === item.eventId ?  90 : 98,
                              padding: 9,
                              margin: 5,
                              //  marginLeft: 1
                              //  borderTopWidth: 1,
                              //  borderTopColor: "rgba(255, 255, 255,0.9)"
                            }}
                          >
                            {redstate.eventDescription && (
                              <View
                                style={
                                  {
                                    //  backgroundColor: "green",
                                    //  height: 130,
                                  }
                                }
                              >
                                <View
                                  style={{
                                    //  backgroundColor: "skyblue",
                                    //  overflow: "scroll",
                                    height: 115,
                                  }}
                                >
                                  <Text
                                    style={{
                                      color: "white",
                                    }}
                                  >
                                    {item.eventDescriptionContent}
                                  </Text>
                                </View>

                              
                              </View>
                            )}
                          </View>
                        
                          </View> 

                          {/* Artist selection Area - eventSound */}
                          <View style={{
                            // backgroundColor: "orange",
                              position:"relative",
                              	top:  isOpen === item.eventId ? "1%" : "-7%",
                                borderTopWidth: 1, 
                                borderTopColor: "white"
                          }}>
                          <View
                              style={{
                                flexDirection: "row",
                                height: 30,
                                // backgroundColor: "rgba(203,203,203,0.5)",
                                alignItems: "center",
                                padding: 3,
                               
                                // borderBottomWidth: 1,
                                // borderBottomColor: "white",
                              }}
                            >
                              <Image
                                source={require("../../assets/dj1.png")}
                                style={{
                                  width: 15,
                                  height: 15,
                                  // borderRadius: 100,
                                }}
                              />
                              <Text
                                style={{
                                  color: "white",
                                }}
                              >
                                {"  "}
                                DJ:
                              </Text>
                             
                            </View>

                            <View style={{
                              // backgroundColor: "red",
                              height: 65,
                              flexDirection: "row",
                              justifyContent: "space-around",
                              alignItems: "center",
                              // flexWrap: "wrap"
                            }}>
                              <View>
                                <Image
                                    source={require("../../assets/profileImg/1.jpg")}
                                    style={{
                                      width: 45,
                                      height: 45,
                                      borderRadius: 50,
                                     
                                    }}
                                  />
                                  <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Planner</Text>
                                  </View>
                              <View>
                              <Image
                                    source={require("../../assets/profileImg/2.jpg")}
                                    style={{
                                      width: 45,
                                      height: 45,
                                      borderRadius: 50,
                                     
                                    }}
                                  />
                                <Text style={{color:"white",textAlign: "center", fontSize: 8,marginTop: 5 }}>Music</Text>

                              </View>
                              <View>
                              <Image
                                    source={require("../../assets/profileImg/3.jpg")}
                                    style={{
                                      width: 45,
                                      height: 45,
                                      borderRadius: 50,
                                     
                                    }}
                                  />
                                 <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Light</Text>

                              </View>
                              
                              <View>
                              <Image
                                    source={require("../../assets/profileImg/5.jpg")}
                                    style={{
                                      width: 45,
                                      height: 45,
                                      borderRadius: 50,
                                     
                                    }}
                                  />
                                <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Sound</Text>

                              </View>
                              <View>
                              <Image
                                    source={require("../../assets/profileImg/6.jpg")}
                                    style={{
                                      width: 45,
                                      height: 45,
                                      borderRadius: 50,
                                     
                                    }}
                                  />
                               <Text style={{color:"white", textAlign: "center", fontSize: 8, marginTop: 5}}>Planner</Text>
                              </View>


                            </View>

                           
                          </View>
                        </View>
                        )}
                     
                        
                         
                  
                        </View>
                

                  </View>
                                  {/* Menu bar second slide */}

                  <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: 30,
                    // width: "100%",
                    // backgroundColor: "green",
                    // marginTop: 10
                    

                    position: "relative", 
                    zIndex: 3,
                    top: 455
                  }}>
                    <View style={{
                      // backgroundColor: "rgba(145,145,145,0.3)",
                      backgroundColor: "rgba(149,149,149,0.3)",

                      width: 220, 
                      height: 35,
                      borderRadius: 100,
                      justifyContent: "space-around",
                      // gap: 10,''
                      alignItems: "center",
                      flexDirection: "row",
                      borderWidth: 1, 
                    borderColor: "rgba(255, 255, 255,0.5)",

                      

                    }}>

                      {/* Btn of Menu bar */}
                     <TouchableOpacity
                     onPress={ () => handleEventInfo("info")}
                     >
                     <Image
                        source={require("../../assets/ii1.png")}
                        style={{
                          width: isOpen === item.eventId ? 355 : 20,
                          // height: 490,

                          height: isOpen === item.eventId ? 20 : 20,
                          
                         
                          //  paddingRight: 30,
                        }}/>
                     </TouchableOpacity>



                     <TouchableOpacity
                     onPress={ () => handleEventInfo("Event Details")}
                     >
                     <Image
                        source={require("../../assets/pin1.png")}
                        style={{
                          width: isOpen === item.eventId ? 355 : 25,
                          // height: 490,

                          height: isOpen === item.eventId ? 20 : 25,
                          
                         
                          //  paddingRight: 30,
                        }}/>
                     </TouchableOpacity>


                     <TouchableOpacity 
                      onPress={ () => handleEventInfo("EventSound")}
                     >
                     <Image
                        source={require("../../assets/fr1.png")}
                        style={{
                          width: isOpen === item.eventId ? 355 : 20,
                          // height: 490,

                          height: isOpen === item.eventId ? 20 : 20,
                          
                         
                          //  paddingRight: 30,
                        }}/>
                     </TouchableOpacity>


                    </View>
                  </View>
                  

                 
                </View>


           


               
                
              </ScrollView>
              </View>


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
                            onPress={() =>
                              handleCategoryReq(
                                item.eventType,
                                item.eventId,
                                item
                              )
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
                        onPress={handleIconheartPress}
                      >
                        {IconHeartClick ? (
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

                

                {/*  Fetching an array of similar Events that are matching the Event category */}
                  <View>
                {isOpen === item.eventId && (
                  <>
                    <Animated.View entering={FadeInDown}>
                
                      <EventCategoryFetchedData  data={categoryData} index={index} handleSelectedEvent={handleSelectedEvent}/>
                    </Animated.View>
              

                    {/* Close btn of event Category */}
                  <View
                  style={{
                    height: 48,
                    alignItems: "center",
                    flexDirection: "row",
                    // justifyContent: "space-between",
                    justifyContent: "center",
                    display: isOpen === item.eventId ? "flex" : "none",
                    // marginBottom: 30,
                    marginTop: isOpen === item.eventId ? 1 : 9,
                    position: "relative",
                    top: isOpen === item.eventId ? "-6%" : "2%",
                    // backgroundColor: "pink"
                  }}
                >                 
                    <EventCategoryCloseBtn data={item} closeCategory={handleCategoryClose}/>


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
    paddingVertical: 20, // Add some vertical padding for better spacing
    // backgroundColor: "black",

    // marginBottom: 20
     
  },

  children: {
    padding: 10,
    marginBottom: 20,
    
  },
  imageContainer: {
    // backgroundColor:"orange",
    // justifyContent: "center",
    margin: "auto",
    paddingLeft: 3,
    paddingRight: 3,
    // width: "100%",
    height: 450,
    flexDirection: "row",
    marginTop: 2,

    // Use margin for gap in child elements
  },
  contentLayer_center: {
    // backgroundColor:"green",
    width: "100%",
  },
  contentLayer_side: {
    alignItems: "center",
    // backgroundColor: "red",
    width: "10%",
    justifyContent: "flex-end",
    gap: 40,
    padding: 10,
  },
  contentLayer_side_1: {
    width: 7,
    height: 7,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "white",
    // backgroundColor: "green"
  },
  contentLayer_side_2: {
    width: 7,
    height: 7,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: "white",
    backgroundColor: "white",
  },
  contentLayer_below: {
    // width: "100%",
    position: "relative",
    top: "-11%",
    padding: 3,
    // backgroundColor: "green",
    height: 200,
    flexDirection: "column",
  },
  contentLayer_below_item1: {
    // width: "100%",
    // height: 100,
    // padding: 5
  },
  contentLayer_below_item2: {
    // width: "100%",
    height: 120,
    // backgroundColor: "purple",
    flexDirection: "row",
    marginTop: 5,
    gap: 5,
  },
  contentLayer_below_item1_info: {
    backgroundColor: "grey",
    // alignItems: "center",
    width: "100%",
    flexDirection: "row",
    marginLeft: 2,
    height: 113,
    // gap: 7,
    // padding: 3,
    marginTop: 5,
  },
  conentLayer_left_up: {
    // backgroundColor: "green",
    width: "80%",
    display: "flex",
    flexDirection: "row",
    gap: 7,
    padding: 4,
  },
  conentLayer_right_up: {
    backgroundColor: "#4287f5",
    width: "20%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    // padding: 9
  },
  user_name_and_Description: {
    backgroundColor: "rgba(221,221,221,0.3)",
    width: "87%",
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    height: 70,
  },
  user_name: {
    // backgroundColor: "blue",
    marginTop: 10,
  },
  user_Description: {
    backgroundColor: "red",
    height: 28,
  },
  tabIcon: {
    // backgroundColor: "pink",
    position: "absolute",
    top: "60%",
    left: "75%",
    width: "20%",
    height: 30,
    zIndex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 2,
  },
  scrollCircle: {
    // backgroundColor: "yellow",
    // width: "30%",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 7,

    // marginRight: "1%",
    marginTop: 7,
  },
  eventContentTag: {
    // backgroundColor: "skyblue",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ContentLeftDescription: {
    backgroundColor: "orange",
    // width: "50%"
    padding: 5,
    marginLeft: 36,
  },
  ContentrightSelection: {
    // backgroundColor: "grey",
    // width: "50%",
    // justifyContent: "center",
    alignItems: "center",
  },
  eventlable_layer: {
    // backgroundColor: "pink",
    // width: "100%",
    height: 48,
    alignItems: "center",
    flexDirection: "row",
    // justifyContent: "space-between",
    justifyContent: "center",
    // marginBottom: 30,
    marginTop: 9
  },
  eventlable_item_left: {
    backgroundColor: "black",
    height: 35,
    width: "15%",
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  eventlable_item: {
    height: 30,
    backgroundColor: "black",
    width: "40%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  eventlable_item_right: {
    backgroundColor: "black",
    height: 35,
    width: "15%",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  contentLayer_FlyerHeader_Area: {
    backgroundColor: "green",
    width: "100%",
  },
  contentLayer_below_item1_infoText: {
    // backgroundColor: "skyblue",
    // alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    // padding: 3,
    marginBottom: 7,
    // marginTop: 3
  },
  contentLayer_header_location: {
    // backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  contentLayer_header_eventName: {
    flexDirection: "row",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: 450,
    // margin: "1%",
    // marginRight: "1%",
    borderRadius: 9,
  },
  imageFlyer_Small: {
    width: "30%",
    height: 100,
    margin: "1%",
    // marginTop: "2%",
    borderRadius: 10,
  },
  imageFlyer_profilepic: {
    width: 30,
    height: 35,
    borderRadius: 100,
    // marginLeft: 20,
    marginTop: 1,
  },
  tabImage: {
    width: 30,
    height: 30,
  },
  iconOption_layer: {
    // backgroundColor: "black",
    // height: 50,
    // width: 50,
    // borderRadius: 100,
    // alignItems: "center",
    // flexDirection: "row",
    // justifyContent: "space-around"
    marginTop: 7,
  },
  iconOption_1: {
    width: 25,
    height: 25,
  },
  iconlocation: {
    width: 20,
    height: 20,
  },
});
