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
import { userLocationAction } from "../../../store/Actions/userLocationAction";
import { RootState } from "../../../store/store";
import FilterBtn from ".././exploreFilter/filterbtn";
import EventMode from ".././exploreFilter/EventMode";


const FilterLocation = () => {
    const {userLocationState} = useSelector((state: RootState) => state.userLocationReduxStore)
    const [slidevalue, setSlideValue] = useState(0)
    const [locationName, setLocationName] = useState("Location")
    const [postalCode, setPostalCode] = useState("Code")
    const [userCountry, SetUserCountry] = useState("Country")
    const [userCity, setUserCity] = useState("City")
    const [trigger, setTrigger] = useState(false)


    useEffect(() => {
  
    
        const setfunction = () => {
          setLocationName(userLocationState[0].name)
          setPostalCode(userLocationState[0].postalCode)
          setUserCity(userLocationState[0].city)
          SetUserCountry(userLocationState[0].country)
        }
    
    
        (userLocationState?.length == 1 &&  trigger === false) && (() => {
         
          setfunction()
          setTrigger(true)
        })();
       
      }, [trigger]);
    
  
    return(

        <View style={{
            // backgroundColor: "orange",
            padding: 4
         }}>
           {/* Location + Maximum Distance Header - Explore Filter */}

         <View style={{
           // backgroundColor: "green",
           marginBottom: 4, 
           marginTop: 2
         }}><Text style={{
           color:"white",
           fontSize: 12,
           fontWeight: 200,

         }}>Specify your Location and desired Radius</Text>
         </View>

         {/* Location + Maximum Distance Content Area - Explore Filter */}

         <View style={{
           // backgroundColor: "pink", 
           height: 120,
           padding: 5,
           // flexDirection: "row",
           gap: 2
         }}>

           {/* Location Area - ExploreFilter */}
          <View style={{
           width: "100%",
           height: 50,
           // backgroundColor: "green",
           flexDirection: "row"

          }}>
          


           <View style={{ 
             // backgroundColor: "skyblue", 
             width:"40%",
             padding: 4,
             justifyContent:"center",

           }}>
             <Text style={{color:"white"}}>Location</Text> 
           </View>

           <View style={{
           // backgroundColor: "purple",
               width: "60%",
             justifyContent:"center",
             padding: 4,


          }}>
           <TouchableOpacity
           >
             <Text
             style={{color:"white", textAlign:"right", opacity: 0.9}}
             >My Current Location</Text>
           </TouchableOpacity>
           <View style={{
             flexDirection: "row",
             // backgroundColor:"pink",
             justifyContent: "flex-end",
             alignItems: "center",
             gap: 3
           }}>
             <View style={{
               // backgroundColor: "red",
               marginBottom: 18
             }}>
             {/* <Image
                   source={require("../../assets/p1.png")}
                   style={{height: 11, width: 11,}}
                  /> */}
                  <LocationPin height={"11"} width={"11"}/>
                  
             </View>
             <View style={{
               // backgroundColor: "orange",
               // width: "90%"
             }}>
             <Text
             style={{color:"white", textAlign:"right", opacity: 0.7}}
             >
              {locationName}, {postalCode} {userCity}, {userCountry}</Text>
             </View>
            
             
           </View>
          </View>

           
          </View>
          

          {/* Maximum Distance Area - ExploreFilter */}
          <View style={{
           width: "100%",
           height: 100, 
           // backgroundColor: "orange"

          }}>
             <View style={{
               //  backgroundColor: "red",
               width: "100%",
               height: 30,
               padding: 4,
               justifyContent: "center"

             }}>
               <Text style={{color:"white"}}>Maximum Distance</Text>
             </View>
             <View style={{
               height: 50,
               // backgroundColor: "skyblue",
               justifyContent: "center",
               padding: 4,
             }}>
              <Slider
                   style={{width: 300, height: 40}}
                   minimumValue={0}
                   maximumValue={25}
                   step={1}
                   minimumTrackTintColor="#FFFFFF"
                   maximumTrackTintColor="rgba(89,89,89,1)"
                   value={slidevalue}
                   onValueChange={setSlideValue}
                 />
             </View>

             <View style={{
               // height: 20,
               // backgroundColor:"red"
               padding: 4
             }}><Text style={{color: "white"}}>
               {slidevalue}km
               </Text>
               </View>
          </View>

         </View>


         </View>

    )
}

export default FilterLocation