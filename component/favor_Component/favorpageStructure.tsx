import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useFavorGetEvent } from "../../api/favorScreen_Api/favorDatareq";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";
import WeeklyEventData from "./Favor/weeklyEventData";
import FavoredEventData from "./Favor/favoredEventData";
import EventFavoredTags from "./Favor/eventFavoredTags";

import { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import SelectedEventModel from "./Favor/eventModel";
import ArrowIcon from "../../icons/arrowIcon";
import FavorIcon from "../../icons/favorIcon";

interface eventFavorData {
    eventId: string;
  eventHost: string;
  eventHostName: string;
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

type favoredDataArr = eventFavorData[] | [];

export default function FavorPageStructure() {
  const [eventFavorData, setEventFavorData] = useState<favoredDataArr | []>([]);
  const [selectedEventData, setSelectedEventData] = useState<eventFavorData | null>(null)
  const childRef = useRef<any>(null)
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();


   
  // variables


  const handleEventToggle = (e:eventFavorData) => {

        if(childRef?.current){
            childRef.current.handleModelUpdate();
        }
      setSelectedEventData(e)

  }

  useEffect(() => {
    const GetFavoredData = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      const token = storedToken ? JSON.parse(storedToken).token : null;
      const userToken = token.token;


      if (userToken) {
        const eventData = await useFavorGetEvent(userToken);
        setEventFavorData(eventData);
      }
    };
    GetFavoredData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Current Day Events  */}

    {/* Header Favor Section */}
      <View
          style={{
            // height: 50,
            height: "6.5%",
            // backgroundColor: "green",
            display: "flex",
            // justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              top: "10%",
              left: "3%",
              zIndex: 3,
              width: "10%",
              height: 40,
              // backgroundColor: "green",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.goBack()}
          >
            {/* <Image
          source={require("../assets/arr1.png")}
          style={{height: 25, width: 25,}}
          /> */}
            <ArrowIcon width={"20"} height={"20"} />
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              height: 50,
              // backgroundColor: "blue",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "flex-end",
              paddingRight: 20,
            }}
          >
            <TouchableOpacity
              style={{
                // backgroundColor: "rgba(68,68,68,1)",
                height: 40,
                width: 40,
                // borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                // opacity: 0.8,
              }}
              // onPress={() => handlesetting()}
              onPress={() => navigation.goBack()}
            >
              <FavorIcon width={"30"} height={"25"} lineColor="white" />
            </TouchableOpacity>
          </View>
      </View>

    {/* Weekly Events Area */}
      <View
        style={{
          // flexDirection: "row",
          gap: 0,
          // height: 120,
          height: "15.9%",
          padding: 5,
          // backgroundColor: "skyblue",
          alignItems: "center",
          // marginTop: 10,
        }}
      >
        <WeeklyEventData eventData={eventFavorData} />
      </View>

      {/* Tags for Events */}
      <View
        style={{
          flexDirection: "row",
          gap: 24,
          // height: 50,
          height: "6.5%",
          padding: 5,
          // backgroundColor: "orange",
          alignItems: "center",
          // marginTop: 5,
        }}
      >
        <EventFavoredTags />
      </View>
    {/* Events Content */}
      <View
        style={{
          // backgroundColor: "orange",
          // height: 500,
          height: "71.1%",
          flexDirection: "row",
        }}
      >
        {eventFavorData ? (
           
          <FavoredEventData eventData={eventFavorData} handleEventToggle={handleEventToggle} />
        ) : (
          <View>
            <Text>Loading....</Text>
          </View>
        )}
      </View>

        <View>

            <SelectedEventModel  ref={childRef}   eventData={selectedEventData}/>

        </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "red",
    // marginBottom: 20
    height: "100%"
  },
  scrollViewContent: {
    alignItems: "center",
    paddingVertical: 20, // Add some vertical padding for better spacing
    // marginBottom: 20
    backgroundColor: "green ",
  },
 
});
