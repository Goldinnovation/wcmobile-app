import { useEffect, useRef } from "react";
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


interface eventProps {
  eventId: string;
  eventHost: string;
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
type BottomSheetRef = {
  snapTo: (index: number) => void;
}

export default function GetUserData() {
  const [data, setData] = useState<eventArr | []>([]);
  const [value, setValue] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const sheetRef = useRef<BottomSheetRef>(null);



   const handleToggle = () => {
       setOpen(!isOpen)

   }

  //  const handletoggleCLose = () => {
  //   setOpen(false)
  //  }
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );

  //   Gets the explore events data from the server
  useEffect(() => {
    const fetchEventData = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      const token = storedToken ? JSON.parse(storedToken).token : null;
      const userToken = token.token;
      if (userToken) {
        const result = await useExploreGet(userToken);
        // console.log(result);
        setData(result);
      } else {
        console.error("Token not found");
      }
    };

    fetchEventData();
  }, []);
  return (
    <View style={styles.container}>
      {data ? (
        <ScrollView contentContainerStyle={styles.scrollViewContent}
        //  onScroll={handletoggleCLose}
         scrollEventThrottle={96} 
         decelerationRate="normal"
        //  disableIntervalMomentum={true}
         >
          {data?.map((item, index) => (
            <View key={index} style={{
              padding: isOpen ? 7: 1,
              marginBottom: isOpen ? 95 : 50,
              // backgroundColor: "green",
              height: isOpen ? 540 : 595
            }}>

              {/* <View style={styles.contentLayer_below_item1_infoText}> */}
                {/* {
                  !isOpen && (
                    <>
                     <View style={styles.contentLayer_header_location}>
                  <Image
                    source={require("../../assets/p1.png")}
                    style={styles.iconlocation}
                  />

                  <Text
                    style={{
                      color: "white",
                      // marginLeft: "1%",
                      fontWeight: "bold",
                      opacity: 0.9,
                    }}
                  >
                    {item.cityType}
                  </Text>
                </View>

                    </>
                  )
                } */}
               
                {/* <View  style={styles.contentLayer_header_eventName}>
              <Text
                  style={{
                    color: "white",
                    // marginLeft: "1%",
                    fontWeight: "bold",
                    opacity: 0.9,
                  }}
                >
                  {item.eventTitle}
                </Text>

              </View> */}
              {/* </View> */}

              <View style={{
                 margin: "auto",
                 paddingLeft: 3,
                 paddingRight: 3,
                 // width: "100%",
                 height: isOpen ? 350 : 490,
                 flexDirection: "row",
                 marginTop: 2,

              }}>
                <View style={styles.contentLayer_center}>
                  <Image
                    source={{ uri: item.ImageCoverUpload }}
                    style={{
                      width: "100%",
                      height: isOpen ? 350 : 490,
                      borderRadius: 9,
                    }}
                    // height={370}
                  />
                </View>
              </View>
              <View style={{
                 // width: "100%",
                    position: "relative",
                    top: isOpen ? "8%" : "2%",
                    // bottom: isOpen,
                    padding: 3,
                    // backgroundColor: "green",
                    height: isOpen ? 250 : 150,
                    flexDirection: "column",
              }}>
                <View style={styles.contentLayer_below_item1_info}>
                  <View style={styles.conentLayer_left_up}>
                    <View>
                      <Image
                        source={require("../../assets/7.jpg")}
                        style={{
                          width: 30,
                          height: 35,
                          borderRadius: 100,
                          // marginLeft: 20,
                          position: "relative", 
                          top: isOpen ? "4%" : "25%",
                          marginTop: 1,
                        }}
                      />
                    </View>

                    <View style={{
                      //  backgroundColor: "rgba(221,221,221,0.3)",
                       width: "87%",
                       // flexDirection: "row",
                       // alignItems: "center",
                       // justifyContent: "space-between",
                       position: "relative", 
                       top: isOpen ? "5%" : "8%",
                       height: 70,
                    }}>
                      <View style={styles.user_name}>
                        <Text style={{
                           color: "white",
                           fontSize: 13,
                            fontWeight: "600",
                           
                           }}>PrincessNokia</Text>
                      </View>

                      <View style={{
                        //  backgroundColor: "orange",
                         height:  isOpen ? 17 : 20,
                         width: isOpen ? "100%" : "70%",
                      }}>
                          <Text style={{
                            fontSize: 13,
                            fontWeight: "400",
                            color: "white"
                          }}>Event: {item.eventTitle}</Text>
                      </View>

                      <View style={{
                        //  backgroundColor: "red",
                         height:  isOpen ? 35 : 20,
                         width: isOpen ? "100%" : "90%",
                      }}>
                        <Text style={{ color: "white", fontSize: 11 }}>
                          {item.eventDescriptionContent}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={{
                    //  backgroundColor: "rgba(221,221,221,0.5)",
                     width: "20%",
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     position: "relative", 
                     top: isOpen ? "-6%" : "-3%",

                  }}>
                    <View style={styles.scrollCircle}>
                      <View style={styles.contentLayer_side_2}></View>
                      <View style={styles.contentLayer_side_1}></View>
                      <View style={styles.contentLayer_side_1}></View>
                      <View style={styles.contentLayer_side_1}></View>
                    </View>
                    <View style={{
                       //backgroundColor:  "pink", //"rgba(204,204,204,0.4)",
                      height: isOpen ? 40 : 60,
                      width: isOpen ? 140: 88,
                      borderRadius: 7,
                      alignItems: "center",
                      flexDirection: isOpen ?  "row" : "column",
                      justifyContent:  isOpen ? "center" : "flex-start",
                      // marginTop: 7,
                      gap: 7,
                      left: isOpen ? "-49%" : "-20%",
                      position: "relative", 
                      top: isOpen ? "115%" : "50%",
                    }}>
                      <View style={{
                        backgroundColor: "rgba(204,204,204,0.2)",
                        borderRadius: 4,
                        alignItems: "center",
                        height: 20,
                        width:  isOpen ? 60 : 61,
                        flexDirection: "row",
                        position: "relative", 
                        gap: 3, 
                        // top: isOpen ? "50%" : "60%",
                        left: isOpen ? "-3%" : "22%",
                        justifyContent: "center",
                      }}>
                         <Image
                          source={require("../../assets/t1.png")}
                          style={{
                            width: 12,
                            height: 12,
                          }}
                          />
                        <Text style={{color: "white"}}>{item.eventTime}</Text>
                      </View>
                      <View style={{
                           backgroundColor: "rgba(204,204,204,0.2)",
                           borderRadius: 4,
                           alignItems: "center",
                           height: 20,
                           width: isOpen ? 78 :  78,
                           flexDirection: "row",
                           position: "relative",
                           padding: 1,
                           gap: 2, 
                        // top: isOpen ? "50%" : "60%",
                           left: isOpen ? "-3%" : "14%",
                           justifyContent: "center",
                      }}
                      >
                         <Image
                          source={require("../../assets/p1.png")}
                          style={{
                            width: 12,
                            height: 12,
                          }}
                          />
                        <Text style={{color: "white"}}>{item.cityType}</Text>
                      </View>
                     {/* <Text style={{color: "white"}}>Berlin</Text> */}
                    </View>
                  </View>
                </View>

                {/* <View style={styles.eventContentTag}> */}

                {/* <View style={styles.ContentrightSelection}>        */}
                {isOpen && (
                  <>
                   <Animated.View  entering={FadeInDown}>

                   <View style={{
                        height: 110,
                        // backgroundColor: "purple",
                        flexDirection: "row",
                        marginTop: 5,
                        gap: 8.5,
                        position: "relative", 
                        top: isOpen ? "12%" : "2%"
                   }}> 
                        <Image
                          source={require("../../assets/flyer/1.jpg")}
                          style={styles.imageFlyer_Small}
                        />
                        <Image
                          source={require("../../assets/flyer/2.jpg")}
                          style={styles.imageFlyer_Small}
                        />
                        <Image
                          source={require("../../assets/flyer/4.jpg")}
                          style={styles.imageFlyer_Small}
                        />
                      </View>
                    </Animated.View>
                  </>
                )}

              

                <View style={{
                   height: 48,
                   alignItems: "center",
                   flexDirection: "row",
                   // justifyContent: "space-between",
                   justifyContent: "center",
                   // marginBottom: 30,
                   marginTop: isOpen ? 1 : 9,
                   position: "relative", 
                   top: isOpen ? "11%" : "2%"
                }}>
                 
                  <TouchableOpacity
                    style={styles.eventlable_item}
                    onPress={handleToggle}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        opacity: 0.7,
                      }}
                    >
                      {item.eventType}
                    </Text>
                  </TouchableOpacity>
                  
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
    // backgroundColor: "grey",
    // alignItems: "center",
    width: "100%",
    flexDirection: "row",
    marginLeft: 2,
    height: 73,
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
    gap: 5,

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
