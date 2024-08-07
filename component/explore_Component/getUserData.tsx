import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useExploreGet } from "../../api/exploreScreen_Api/exploreDataApi";
import { View, ScrollView, Image, StyleSheet, Text } from "react-native";
import Slider from '@react-native-community/slider';

interface eventProps {
  eventId: string;
  eventHost: string;
  eventTitle: string;
  eventType: string;
  eventDate: string;
  eventDescriptionContent: string;
  eventTime: string;
  ImageCoverUpload: string;
  eventInviteType: number;
  eventAddress: string;
  eventZipcode: string;
  cityType: string;
  selectedRangeofEvents: number;
}

 type eventArr =  eventProps[]


export default function GetUserData() {
  const [data, setData] = useState<eventArr | []>([]);
   const [value, setValue] = useState(0);

 

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
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {data?.map((item, index) => (
            <View key={index} style={styles.children}>
             
              <View style={styles.contentLayer_below_item1_infoText}>
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
               
              </View>

              <View style={styles.imageContainer}>
                <View style={styles.contentLayer_center}>
                  <Image
                    source={{ uri: item.ImageCoverUpload }}
                    style={styles.image}
                    // height={370}
                  />
                </View>
              </View>
              <View style={styles.contentLayer_below}>
              
                  <View style={styles.contentLayer_below_item1_info}>

                    <View style={styles.conentLayer_left_up}>
                    <View>
                      <Image
                        source={require("../../assets/7.jpg")}
                        style={styles.imageFlyer_profilepic}
                      />
                    </View>

                    <View style={styles.user_name_and_Description}>
                        <View style={styles.user_name}>
                        <Text style={{ color: "white" }}>PrincessNokia</Text>

                        </View>

                        <View style={styles.user_Description}>
                        <Text style={{color: "white", fontSize: 11}}>{item.eventDescriptionContent}</Text>

                        </View>


                      
                  
                    </View>

                    </View>

                    <View style={styles.conentLayer_right_up}>
                      <View style={styles.scrollCircle}>
                        <View style={styles.contentLayer_side_2}></View>
                        <View style={styles.contentLayer_side_1}></View>
                        <View style={styles.contentLayer_side_1}></View>
                        <View style={styles.contentLayer_side_1}></View>
                      </View>
                    <View style={styles.iconOption_layer}>
                    <Image
                        source={require("../../assets/v1.png")}
                        style={styles.iconOption_1}
                      />

                

                      </View>
                    </View>
                    
                  </View>
                

                {/* <View style={styles.eventContentTag}> */}
                 
                 {/* <View style={styles.ContentrightSelection}>        */}
                    {/* <Slider 
                     value={0}                         // set the current slider's value
                     minimumValue={1}                  // Minimum value
                     maximumValue={10}                  // Maximum value
                     step={2} 
                     onValueChange={value => setValue(value)}
                     style={{width:355, height: 100}}
                     minimumTrackTintColor="white"
                     maximumTrackTintColor="#000000"
                     thumbTintColor="white"
                         
                    /> */}
                    
                  {/* </View> */}
                  {/* <View   style={styles.iconOption_layer}> */}
                    {/* <View>
                    <Image
                        source={require("../../assets/netzwerk.png")}
                        style={styles.iconOption_1}
                      />

                

                      </View> */}
                  {/* </View> */}
                {/* </View> */}

                <View style={styles.eventlable_layer}>
                  {/* <View  style={styles.eventlable_item_left}>
                    <Text>1</Text>
                  </View> */}
                  <View style={styles.eventlable_item}>
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        opacity: 0.7,
                      }}
                    >
                      {item.eventType}
                    </Text>
                  </View>
                  {/* <View  style={styles.eventlable_item_right}>
                      <Text>2</Text>
                  </View> */}
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
    marginBottom: 30
  },
  imageContainer: {
    backgroundColor:"orange",
    // justifyContent: "center",
    // padding: "2%",
    // width: "100%",
    height: 450,
    flexDirection: "row",
    marginTop: 2

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
    // padding: "2%",
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
    height:73,
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
    padding: 4

  },
  conentLayer_right_up: {
    // backgroundColor: "#4287f5",
    width: "20%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    // padding: 9

  },
  user_name_and_Description: {
    // backgroundColor: "purple",
    width: "87%",
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    height: 70
  },
  user_name: {
    // backgroundColor: "blue",
    marginTop: 10
  },
  user_Description: {
    // backgroundColor: "red",
    height: 28
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
    marginTop: 7
  },
  eventContentTag: {
    // backgroundColor: "skyblue",
    height: 90,
    flexDirection: "row",
    alignItems:"center",
   justifyContent: "center"

  },
  ContentLeftDescription:{
    backgroundColor: "orange",
    // width: "50%"
    padding: 5,
    marginLeft: 36

  },
  ContentrightSelection: {
    // backgroundColor: "grey",
    // width: "50%",
    // justifyContent: "center",
    alignItems: "center"

  },
  eventlable_layer: {
    // backgroundColor: "pink",
    // width: "100%",
    height: 48,
    alignItems: "center",
    flexDirection:"row",
    // justifyContent: "space-between",
    justifyContent: "center",
    marginBottom: 30
  },
  eventlable_item_left:{
    	backgroundColor: "black",
      height: 35,
      width: "15%",
      borderTopRightRadius: 100,
      borderBottomRightRadius: 100
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
      borderBottomLeftRadius: 100
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
    marginRight: 8

  },
  contentLayer_header_eventName:{
    flexDirection:"row",
    alignItems:"center"

  },

  image: {
    width: "100%",
    height: 450,
    // margin: "1%",
    // marginRight: "1%",
    // borderRadius: 7,
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
    marginTop: 7

  },
  iconOption_1: {
    width: 25,
    height: 25
  },
  iconlocation: {
    width: 20,
    height: 20
  }
});
