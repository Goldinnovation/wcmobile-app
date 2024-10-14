import { defaultHeaderInterpreter } from "axios-cache-interceptor"
import { View, Text} from "react-native"
import { useState } from "react"
import { TouchableOpacity } from "react-native-gesture-handler";
import CalenderIcon from "../icons/calenderIcon";
import DayNightIcon from "../icons/DayNightIcon";
import PuzzleIcon from "../icons/puzzleIcon";
import LocationPin from "../icons/locationPin";
import OnlineIcon from "../icons/OnlineIcon";
import VirtualIcon from "../icons/virtualIcon";
import BallonIcon from "../icons/BallonIcon";
import BallonIconColor from "../icons/BallonIconColor";
import PersonalIcon from "../icons/personalIcon";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import FavorIcon from "../icons/favorIcon";
import ArrowIcon from "../icons/arrowIcon";


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
            paddingTop: 50,
            

        }}>

            {/* Header Area */}
          <View
          style={{
            // height: 50,
            height: "6.5%",
            // backgroundColor: "pink",
            display: "flex",
            // justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
         <View style={{
            width: "80%",
            height: 50,
            // backgroundColor: "orange",
            // alignItems: "center",
            justifyContent: "center",
            paddingLeft: 5,
         }}>
            <Text style={{
                fontSize: 20, 
                color: "white"
            }}>Mode Board</Text>
         </View>

          <View
            style={{
              width: "20%",
              height: 50,
            //   backgroundColor: "blue",
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


            {/* Body Area */}
               <View style={{
                height: "100%",
                // backgroundColor: "orange",
                width: "100%", 
                display: "flex",
                justifyContent:"center", 
                alignItems: "center"

               }}>
                <View style={{
                    height: "50%",
                    width: "100%",
                    // backgroundColor: "red",
                    marginBottom: 200,
                    padding: 4,
                    gap: 20,
                }}>
                    {/* Mode Option */}
             <View style={{
                  backgroundColor: "black",
                borderWidth: 1, 
                borderColor: "rgba(255, 255, 255,0.5)",
                borderRadius: 7,
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

              {/* Profile Type */}
              <View
              style={{
                // backgroundColor: "skyblue",
                height: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity 
              style={{
                height: 60,
                backgroundColor: "black",
                width: 70,
                borderRadius: 7,
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
                borderWidth: 1, 
                borderColor: "rgb(0,255,0)"
              }}
              
              >
                <View>
                <PersonalIcon width="20" height="20" />
                </View>

                <View>
                <Text style={{color: "white", fontSize: 10, textAlign: "center"}}>Personal</Text>
                </View>
                
              </TouchableOpacity>

             

            
              </View>

              {/* Mode btn */}
              <View
              style={{
                // backgroundColor: "skyblue",
                height: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity 
              style={{
                height: 35,
                backgroundColor: "rgb(0, 128, 255)",
                width: 200,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.goBack()}
              >
                <Text style={{color: "white"}}>Update Mode</Text>
              </TouchableOpacity>
              </View>
                </View>

               </View>
        </View>
    )
}

export default ModeScreen