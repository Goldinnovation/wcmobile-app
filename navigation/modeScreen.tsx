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
import PinIcon from "../icons/pinIcon";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";


const RadarScreen = () => {
    const [eventMoodtoggle, setEventMoodToggle] = useState(true) 
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [pinToggle, setPinToggle] = useState(false)
    const {userLocationState} = useSelector((state: RootState) => state.userLocationReduxStore)
    const [locationName, setLocationName] = useState("Location")
    const [postalCode, setPostalCode] = useState("Code")
    const [userCountry, SetUserCountry] = useState("Country")
    const [userCity, setUserCity] = useState("City")
    const [trigger, setTrigger] = useState(false)
    


    const setfunction = () => {
      setLocationName(userLocationState[0].name)
      setPostalCode(userLocationState[0].postalCode)
      setUserCity(userLocationState[0].city)
      SetUserCountry(userLocationState[0].country)
    }

   const handlePinLog= () => { 
    setPinToggle(!pinToggle)
    setfunction()

   }
    
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
             userInterfaceStyle="dark"
             initialRegion={{
              latitude: 52.5200, // Berlin's latitude
              longitude: 13.4050, // Berlin's longitude
              latitudeDelta: 0.0922, // Adjust as needed for zoom level
              longitudeDelta: 0.0421,
            }}
          
              />


         {/* <View style={{
              backgroundColor:"rgb(0, 0, 0)",
             borderColor: "rgba(255, 255, 255,0.5)",
              // borderWidth: 1,
              width: "100%", 
              height: "10%",
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
             
              
              
            </View>  */}

            {/* <View style={{
              backgroundColor:"rgba(0, 0, 0, 0.89)",
             borderColor: "rgba(255, 255, 255,0.5)",
              // borderWidth: 1,
              width: "100%", 
              height: "15%",
              position: "absolute",
              bottom: "0%",
              left: "0%",
              zIndex: 3,
              display: "flex",
              justifyContent: "flex-end",
              // alignItems: "center",
              flexDirection: "column"

            }}
            
            >
             
              
              
            </View> */}

            {/* Close Section  */}

             


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
              top: "33%",
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
            }}>
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
              opacity: 0.8

            }}
            onPress={() => handlePinLog()}

            >
              {/* <Text>3</Text> */}
              <PinIcon width={'22'} height={'22'}/>
              <Text style={{
                color:"white",
                fontSize: 8
              }}>Pin</Text>
            </TouchableOpacity>

            

            
            </View> 



            { pinToggle && (
             <View style={{
              // backgroundColor:"rgba(149,149,149,0.3)",
              // backgroundColor:"rgba(0, 0, 0, 1)",

              // borderColor: "rgba(255, 255, 255,0.5)",
              // borderWidth: 1, 
              width: "100%", 
              height: "40%",
              position: "absolute",

              top: "70%",
              // left: "1%",
              zIndex: 3,
              display:  "flex", 
              // flexDirection: "row",
              // justifyContent: "center",
              alignItems: "center",
              // shadowOffset: { width: 0, height: 2 },
              // shadowOpacity: 4,
              // shadowRadius: 2,
              // borderRadius: 7,


            }}
            
            >
          

            
               <View style={{
                backgroundColor:"rgba(149,149,149,0.3)",
                borderColor: "rgba(255, 255, 255,0.5)",
                borderWidth: 1, 
                width: "99%", 
                height: "46%",
                // position: "absolute",
                // top: "80%",
                // left: "40%",
                // zIndex: 3,
                marginTop: "16%",
                // justifyContent: "space-around",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 4,
                shadowRadius: 2,
                borderRadius: 7,
  
  
              }}
              
              >
                <View style={{
                  width: "100%",
                  height: "30%", 
                  // backgroundColor: "green", 
                  // backgroundColor:"rgba(149,149,149,0.3)",
                  borderColor: "rgba(255, 255, 255,0.5)",
                  // alignItems: "center", 
                  justifyContent: "center", 
                  paddingLeft: "3%", 
                  marginTop: "1%", 
                  flexDirection: "row",

                }}>
                  <View style={{
                    width: "90%", 
                    height: "100%",
                    // backgroundColor: "red",
                    justifyContent: "center", 

                  }}>
                  <Text style={{
                  color: "white", 
                  fontSize: 20, 
                  fontWeight: "bold"
                }}>Location: </Text>
                  </View>
                    <TouchableOpacity style={{
                       width: "10%", 
                       height: "100%",
                      //  backgroundColor: "pink",
                       alignItems: "center", 
                       justifyContent: "center", 

                    }}
                    onPress={() => handlePinLog()}
                    >
                    <Text style={{
                  color: "red", 
                  fontSize: 20, 
                  fontWeight: "bold"
                }}>X </Text>
                    </TouchableOpacity>
                </View>
  
                <View style={{
                  // backgroundColor: "pink", 
                  width: "100%", 
                  height: "70%", 
                  display: "flex",
                  flexDirection:"row"
                }}>
                     <View style={{
                  // backgroundColor: "green", 
                  width: "70%", 
                  height: "100%",
                  // alignItems: "center",
                  paddingLeft: "3%", 
                  paddingTop: "1%",
                  // justifyContent: "center", 
                }}>
                   <View style={{
                            // backgroundColor: "orange",
                            // width: "90%"
                          }}>
                          <Text
                          style={{color:"white", 
                            textAlign:"left", 
                            fontSize: 19, 
                            // fontWeight: "bold",
                            // opacity: 0.7
                          }}
                          >
                          {locationName}, {postalCode} {userCity}, {userCountry}</Text>
                      </View>
  
  
                </View>
  
                <View style={{
                  // backgroundColor: "brown", 
                  width: "30%", 
                  height: "100%", 
                  alignItems: "center", 
                  justifyContent: "center",
                }}>
  
                  <TouchableOpacity style={{
                    backgroundColor: "rgba(33, 151, 255, 0.5)", 
                    width: "90%", 
                    height: "40%", 
                    borderColor: "rgba(255, 255, 255,0.5)",
                    borderWidth: 1, 
                    borderRadius: 7,
                    alignItems: "center", 
                    justifyContent: "center",
                  }}
  
                  onPress={() => handlePinLog()}
                  
                  >
                    <Text style={{
                  color: "white", 
                  fontSize: 15, 
                  fontWeight: "bold",
  
                }}>Pin </Text>
  
                  </TouchableOpacity>
  
  
                </View>
  
                </View>
             
              </View>
      
           

           
            </View> 

            )
            }

          

         
           </View>

          
        </View>
    )
}

export default RadarScreen