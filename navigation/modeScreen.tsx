import { defaultHeaderInterpreter } from "axios-cache-interceptor"
import { View, Text, TouchableOpacity, Image} from "react-native"
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
import MenuBarBurgerIcon from "../icons/menuBarBurgerIcon";


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


          <View style={{
              backgroundColor:"rgba(0, 0, 0, 0.76)",
             borderColor: "rgba(255, 255, 255,0.5)",
              // borderWidth: 1,
              width: "100%", 
              height: "13%",
              position: "absolute",
              top: "0%",
              left: "0%",
              zIndex: 3,
              display: "flex",
              justifyContent: "flex-end",
              // alignItems: "center",
              flexDirection: "column"

            }}
            
            >
              <View style={{
                // backgroundColor:"rgba(160, 29, 29, 0.62)",
                width: "100%", 
                height: "65%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                 <TouchableOpacity style={{
              // backgroundColor:"rgba(23, 255, 2, 0.3)",
            //  borderColor: "rgba(255, 255, 255,0.5)",
              // borderWidth: 1,
              width: "35%", 
              height: "100%",
              // position: "absolute",
              // top: "66%",
              // left: "75%",
              // zIndex: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"

            }}
            onPress={() => navigation.goBack()}
            
            >
              <Image
                  source={require("../assets/emsfw.png")}
                  style={{
                    // width: scale(100),
                    // height: verticalScale(25),
                    width: 120,
                    height: 30
                    // borderRadius: 100,
                  }}
                />
              
            </TouchableOpacity>

            <TouchableOpacity style={{
              backgroundColor:"rgb(255, 255, 255)",
            //  borderColor: "rgba(255, 255, 255,0.5)",
              // borderWidth: 1,
              width: "20%", 
              height: "6%",
              // position: "absolute",
              // top: "66%",
              // left: "5%",
              // zIndex: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row"

            }}
            onPress={() => navigation.goBack()}
            
            >
             <MenuBarBurgerIcon width="37" height="37" /> 
              
            </TouchableOpacity>
              </View>
              
              
            </View>

            {/* Close Section  */}

             


            {/* Menu Section */}
            {/* <View style={{
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

            

            
            {/* </View> */} 



{/* 
             <View style={{
              // backgroundColor:"rgba(149,149,149,0.3)",
              backgroundColor:"rgba(0, 0, 0, 1)",

              // borderColor: "rgba(255, 255, 255,0.5)",
              // borderWidth: 1, 
              width: "100%", 
              height: "10%",
              position: "absolute",

              top: "90%",
              // left: "1%",
              zIndex: 3,
              display:  "flex", 
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              // shadowOffset: { width: 0, height: 2 },
              // shadowOpacity: 4,
              // shadowRadius: 2,
              // borderRadius: 7,


            }}
            
            >
              <Text>Hello</Text> 
          

            <View style={{
              backgroundColor:"rgba(149,149,149,0.3)",
              borderColor: "rgba(255, 255, 255,0.5)",
              borderWidth: 1, 
              width: "25%", 
              height: "70%",
              // position: "absolute",
              // top: "80%",
              // left: "40%",
              // zIndex: 3,
              justifyContent: "space-around",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 4,
              shadowRadius: 2,
              borderRadius: 7,


            }}
            
            ><Text>Hello</Text>
            </View>

            <View style={{
              backgroundColor:"rgba(149,149,149,0.3)",
              borderColor: "rgba(255, 255, 255,0.5)",
              borderWidth: 1, 
              width: "25%", 
              height: "70%",
              // position: "absolute",
              // top: "80%",
              // left: "40%",
              // zIndex: 3,
              justifyContent: "space-around",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 4,
              shadowRadius: 2,
              borderRadius: 7,


            }}
            
            ><Text>Hello</Text>
            </View>

            <View style={{
              backgroundColor:"rgba(149,149,149,0.3)",
              borderColor: "rgba(255, 255, 255,0.5)",
              borderWidth: 1, 
              width: "25%", 
              height: "70%",
              // position: "absolute",
              // top: "80%",
              // left: "40%",
              // zIndex: 3,
              justifyContent: "space-around",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 4,
              shadowRadius: 2,
              borderRadius: 7,


            }}
            
            ><Text>Hello</Text>
            </View>
            </View>  */}


          

         
           </View>

          
        </View>
    )
}

export default ModeScreen