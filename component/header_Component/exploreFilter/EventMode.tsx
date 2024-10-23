import { useEffect, useState } from "react";
import { View, Text, Modal, Image, Platform} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Slider from '@react-native-community/slider';
import BallonIcon from "../../../icons/BallonIcon";
import BallonIconColor from "../../../icons/BallonIconColor";
import CalenderIcon from "../../../icons/calenderIcon";
import DayNightIcon from "../../../icons/DayNightIcon";
import PuzzleIcon from "../../../icons/puzzleIcon";
import LocationPin from "../../../icons/locationPin";
import OnlineIcon from "../../../icons/OnlineIcon";
import VirtualIcon from "../../../icons/virtualIcon";
import * as Location from "expo-location"
import { useDispatch } from "react-redux";
// import { userLocationAction } from "../../store/Actions/userLocationAction";
// import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

interface ContentProps{

    // handleClickEventMood: () => void 
        
}


const EventMode: React.FC<ContentProps> = ({}) => {
    const [eventMoodtoggle, setEventMoodToggle] = useState(false) 


    
  const handleClickEventMood = () => {
    setEventMoodToggle(!eventMoodtoggle)
  }

     
    return(
        
        <View style={{
            // backgroundColor: "orange",
            padding: 4
        }}>

         {/* Event Mood - Physical Events Header - Explore Filter */}

        <View style={{
          // backgroundColor: "green",
          marginBottom: 4, 
          marginTop: 2
        }}><Text style={{
          color:"white",
          fontSize: 12,
          fontWeight: 200,

        }}>Select an Event Mood </Text>
        </View>

        {/* Event Mood - Physical Events Content Area - Explore Filter */}
        <View style={{
          // backgroundColor: "pink", 
          height: 100,
          padding: 5,
          flexDirection: "row",
          gap: 2

        }}>
          


          {/* Event Mood - Physical Events - Explore Filter */}
          <View style={{
            // backgroundColor: "green",
            height: 90,
            width: "33%",
            justifyContent: "center", 
            alignItems: "center", 
          }}>
          {/* Event Mood - Physical Events - Img section - Explore Filter */}

             <View style={{
              backgroundColor: eventMoodtoggle ? "rgba(255, 1, 1,0.7)" : "transparent",
              justifyContent: "center", 
              alignItems: "center", 
              padding: 2,
              width: "90%",
              height: 70,
              borderWidth: 1, 
              borderColor: eventMoodtoggle ? "black" : "rgba(255, 255, 255,0.5)",
              borderRadius: 5

              


             }}>
              <TouchableOpacity
              onPress={handleClickEventMood}
              >
              {
                
                eventMoodtoggle 
                ?   
                // <Image
                // source={require("../../assets/bal2.png")}
                // style={{height: 55, width: 55,
                //    opacity:eventMoodtoggle && 1
                //   }}/>
                <BallonIconColor height={"55"} width={"55"}/>

               : 
              //  <Image
              //  source={require("../../assets/bal1.png")}
              //  style={{height: 55, width: 55,
              //     opacity:eventMoodtoggle ? 1 : 0.5
              //    }}
              // />
              <BallonIcon height={"55"} width={"55"} lineColor={"#ffffff"}/>

              }
              

              </TouchableOpacity>
              
     
             </View>
              {/* Event Mood - Physical Events - Text section - Explore Filter */}
             <View style={{
              padding: 3,
              marginTop: 2,
             


             }}>
              <Text style={{color: "white", fontSize: 9}}>Physical</Text>
             </View>
          </View>

           {/* Event Mood - Online Events - Explore Filter */}
          <View
          style={{
            // backgroundColor: "skyblue",
            height: 90,
            width: "33%",
            justifyContent: "center", 
            alignItems: "center",
          }}
          >
            {/* Event Mood - Online Events - Img section - Explore Filter */}

            <View style={{
              // backgroundColor: "red",
              justifyContent: "center", 
              alignItems: "center", 
              padding: 2,
              width: "90%",
              height: 70,
              borderWidth: 1, 
              borderColor:"rgba(255, 255, 255,0.5)",
              borderRadius: 5

              


             }}>
              {/* <Image
                  source={require("../../assets/gal1.png")}
                  style={{height: 50, width: 50, opacity: 0.5}}
                 /> */}
                 <OnlineIcon height={"55"} width={"55"}/>
     
             </View>
              {/* Event Mood - Online Events - Text section - Explore Filter */}
             <View style={{
              padding: 3,
              marginTop: 2
             }}>
              <Text style={{color: "white", fontSize: 9}}>Online</Text>
             </View>

          </View>
           {/* Event Mood - Virtual  Events - Explore Filter */}
          <View
          style={{
            // backgroundColor: "purple",
            height: 90,
            width: "33%",
            justifyContent: "center", 
            alignItems: "center",
          }}
          
          >
           {/* Event Mood - Virtual Events - Img section - Explore Filter */}

           <View style={{
              // backgroundColor: "red",
              justifyContent: "center", 
              alignItems: "center", 
              padding: 2,
              width: "90%",
              height: 70,
              borderWidth: 1, 
              borderColor:"rgba(255, 255, 255,0.5)",
              borderRadius: 5

              


             }}>
              {/* <Image
                  source={require("../../assets/sat1.png")}
                  style={{height: 47, width: 47, opacity:0.5}}
                 /> */}
                <VirtualIcon height={"55"} width={"55"}/>

     
             </View>
              {/* Event Mood - Virual Events - Text section - Explore Filter */}
             <View style={{
              padding: 3,
              marginTop: 2
             }}>
              <Text style={{color: "white", fontSize: 9}}>Virtual</Text>
             </View>

          </View>
          
        </View>
          

        </View>


    )
}

export default EventMode