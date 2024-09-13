import { View, Text } from "react-native";
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
import SelectedEventModel from "./Favor/eventModel";

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

export default function FavorData() {
  const [eventFavorData, setEventFavorData] = useState<favoredDataArr | []>([]);
  const [selectedEventData, setSelectedEventData] = useState<eventFavorData | null>(null)
  const childRef = useRef<any>(null)

   
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

      <View
        style={{
          // flexDirection: "row",
          gap: 0,
          height: 80,
          padding: 5,
        //   backgroundColor: "skyblue",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <WeeklyEventData eventData={eventFavorData} />
      </View>

      {/* Tags for Events */}
      <View
        style={{
          flexDirection: "row",
          gap: 24,
          height: 50,
          padding: 5,
          // backgroundColor: "green",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <EventFavoredTags />
      </View>

      <View
        style={{
        //   backgroundColor: "orange",
          height: 470,
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
    flex: 1,
    backgroundColor: "pink",
    // marginBottom: 20
  },
  scrollViewContent: {
    alignItems: "center",
    paddingVertical: 20, // Add some vertical padding for better spacing
    // marginBottom: 20
    backgroundColor: "green ",
  },
 
});
