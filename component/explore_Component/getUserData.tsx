import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useExploreGet } from "../../api/exploreScreen_Api/exploreDataApi";
import { View, ScrollView, Image, StyleSheet, Text } from "react-native";

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
            <View key={index}>

            

              
              <View style={styles.contentLayer_below_item1_infoText}>
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
              </View>

            
          



              <View style={styles.imageContainer}>
             <View style={styles.contentLayer_center}>
            <Image
              source={{uri: item.ImageCoverUpload}}
              style={styles.image}
            />
          </View>
         
        </View>
        <View style={styles.contentLayer_below}>
          <View style={styles.contentLayer_below_item1}>
            <View style={styles.contentLayer_below_item1_info}>
              <View>
                {/* <Image
                  source={require("assets/7.jpg")}
                  style={styles.imageFlyer_profilepic}
                /> */}
              </View>

              <View style={styles.userDescription}>
                <View>
                  <Text style={{ color: "white" }}>PrincessNokia</Text>
                </View>
                <View style={styles.scrollCircle}>
                  <View style={styles.contentLayer_side_2}></View>
                  <View style={styles.contentLayer_side_1}></View>
                  <View style={styles.contentLayer_side_1}></View>
                  <View style={styles.contentLayer_side_1}></View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.eventContentTag}>
           <Text>hallo</Text>
          </View>
                  
          <View style={styles.eventlable_layer}>
            <View style={styles.eventlable_item}>
              <Text
                style={{ color: "white", fontWeight: "bold", opacity: 0.7 }}
              >
                underground
              </Text>
            </View>
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
  },
  scrollViewContent: {
    alignItems: "center",
    paddingVertical: 20, // Add some vertical padding for better spacing
  },
  imageContainer: {
    // backgroundColor:"orange",
    // justifyContent: "center",
    // padding: "2%",
    width: "100%",
    height: 390,
    flexDirection: "row",

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
    width: "100%",
    // height: 100,
    // backgroundColor: "orange",
    // padding: 5
  },
  contentLayer_below_item2: {
    width: "100%",
    height: 120,
    // backgroundColor: "purple",
    flexDirection: "row",
    marginTop: 5,
    gap: 5,
  },
  contentLayer_below_item1_info: {
    // backgroundColor: "green",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    gap: 7,
    padding: 2,
    marginTop: "1%",
  },
  userDescription: {
    backgroundColor: "orange",
    width: "96%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    backgroundColor: "yellow",
    width: "30%",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 5,
    marginRight: "1%",
  },
  eventContentTag: {
    backgroundColor: "skyblue",
    height: 100,
  },
  eventlable_layer: {
    backgroundColor: "pink",
    // width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  eventlable_item: {
    height: 30,
    backgroundColor: "black",
    width: "40%",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  contentLayer_FlyerHeader_Area: {
    backgroundColor: "green",
    width: "100%",
  },
  contentLayer_below_item1_infoText: {
    // backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 7,
    
  },

  image: {
    width: "100%",
    height: 370,
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
    marginLeft: 2,
    marginTop: 1,
  },
  tabImage: {
    width: 30,
    height: 30,
  },
});
