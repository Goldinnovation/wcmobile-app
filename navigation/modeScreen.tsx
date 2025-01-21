import { defaultHeaderInterpreter } from "axios-cache-interceptor"
import { View, Text, TouchableOpacity} from "react-native"
import { useState } from "react"

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import MapView from 'react-native-maps';
import SearchLoopIcon from "../icons/searchLoopIcon";
import MultiLocation from "../icons/multiplelocation";
import PuzzleIcon from "../icons/puzzleIcon";
import AddFriendsIcon from "../icons/addFriendsIcon";
import PlusIcon from "../icons/plusIcon";
import SwitchIcon from "../icons/switchIcon";


const ModeScreen = () => {
    const [eventMoodtoggle, setEventMoodToggle] = useState(true) 
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();



    
  const handleClickEventMood = () => {
    setEventMoodToggle(!eventMoodtoggle)
  }
    return(

        <View style={{
            height: "100%", 
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            // paddingTop: 50,
            

        }}>


           <View style={{
            backgroundColor: "pink", 
            height: "100%", 
            width: "100%",
            // justifyContent: 'center',
            // alignItems: 'center',
            position: "relative"

           }}>
             <MapView style={{
               width: '100%',
               height: '100%', 
              

             }}
             initialRegion={{
              latitude: 52.5200, // Berlin's latitude
              longitude: 13.4050, // Berlin's longitude
              latitudeDelta: 0.0922, // Adjust as needed for zoom level
              longitudeDelta: 0.0421,
            }}
          
              />

            {/* Close Section  */}

              {/* <TouchableOpacity style={{
            //   backgroundColor:"rgba(149,149,149,0.3)",
            //  borderColor: "rgba(255, 255, 255,0.5)",
              // borderWidth: 1,
              width: "10%", 
              height: "6%",
              position: "absolute",
              top: "6%",
              left: "87%",
              zIndex: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"

            }}
            onPress={() => navigation.goBack()}
            
            >
               <Text style={{
                  color: "red", 
                  fontSize: 27, 
                  fontWeight: "bold"
                  
                }}>X</Text>
            </TouchableOpacity> */}


            {/* Menu Section */}
            <View style={{
              // backgroundColor:"pink",
              backgroundColor:"rgba(149,149,149,0.3)",

              borderColor: "rgba(255, 255, 255,0.5)",
              borderWidth: 1,
              width: "13%", 
              height: "30%",
              borderRadius: 50,
              position: "absolute",
              top: "7%",
              left: "2%",
              zIndex: 3, 
              display: "flex", 
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 4,
              shadowRadius: 2,
              
            }}
            // onPress={() => navigation.goBack()}
            
            > 
            <TouchableOpacity style={{
                // backgroundColor:"green",
                width:"100%", 
                height: "23%",
                display: "flex", 
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                opacity: 0.8

            }}>
              <SearchLoopIcon width={'23'} height={'23'} />

              <Text style={{
                color:"white",
                fontSize: 8
              }}>Search</Text>
            </TouchableOpacity>


            <TouchableOpacity
            style={{
              // backgroundColor:"grey",

              width:"100%", 
              height: "23%",
              display: "flex", 
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              opacity: 0.8
            }}
            >
              <PlusIcon width={'23'} height={'23'} />
              
              <Text style={{
                color:"white",
                fontSize: 8
              }}>Add Event</Text>
            </TouchableOpacity>


            {/* <TouchableOpacity style={{
              // backgroundColor:"orange",
              width:"100%", 
              height: "23%",
              display: "flex", 
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}> */}
              {/* <Text>3</Text> */}
              {/* <MultiLocation width={'33'} height={'33'}/>
              <Text style={{
                color:"white",
                fontSize: 8
              }}>Session</Text>
            </TouchableOpacity> */}


            <TouchableOpacity style={{
              // backgroundColor:"orange",
              width:"100%", 
              height: "23%",
              display: "flex", 
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
            onPress={() => navigation.goBack()}

            >
              {/* <Text>3</Text> */}
              <SwitchIcon width={'30'} height={'30'}/>
              <Text style={{
                color:"white",
                fontSize: 8
              }}>Back</Text>
            </TouchableOpacity>

            

            
            </View>



{/* 
            <View style={{
              backgroundColor:"rgba(149,149,149,0.3)",
              borderColor: "rgba(255, 255, 255,0.5)",
              borderWidth: 1, 
              width: "100%", 
              height: "37%",
              position: "absolute",
              top: "80%",
              left: "0%",
              zIndex: 3,
              justifyContent: "space-around",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 4,
              shadowRadius: 2,
              // borderRadius: 50,


            }}
            
            ><Text>Hello</Text>
            </View>  */}

            {/* <View style={{
              backgroundColor:"rgba(149,149,149,0.3)",
             borderColor: "rgba(255, 255, 255,0.5)",
              borderWidth: 1,
              width: "16%", 
              height: "25%",
              position: "absolute",
              borderRadius: 50,
              top: "35%",
              left: "80%",
              zIndex: 3
            }}
            // onPress={() => navigation.goBack()}
            
            ><Text>Hello</Text></View> */}
           </View>

          
        </View>
    )
}

export default ModeScreen