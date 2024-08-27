import { View, Text } from "react-native"
import { StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { useFavorGetEvent } from "../../api/favorScreen_Api/favorDatareq"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Image } from "react-native"



interface eventFavorData{
    eventHost: string;
    eventHostName: string,
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


type favoredDataArr = eventFavorData[] | [] 

export default function FavorData(){

    const [eventFavorData, setEventFavorData] = useState<favoredDataArr |  [] >([])


    useEffect(() => {
        const GetFavoredData = async() => {
            const storedToken = await AsyncStorage.getItem("token");
            const token = storedToken ? JSON.parse(storedToken).token : null;
            const userToken = token.token;

            if(userToken){
                const eventData = await useFavorGetEvent(userToken)
                setEventFavorData(eventData)
            }
            
        }
        GetFavoredData()

    },[])

    return(
        <View style={styles.container}>
                {/* <View style={{
                    // backgroundColor: "yellow",
                    height: 40,
                    // borderBottomWidth: 1, 
                    // borderBottomColor: "white"
                    alignItems: "center",
                    flexDirection: "row"
                    
                }}>
                <View style={{
                    // backgroundColor: "red",
                    width: "85%",
                    height: 40,
                    flexDirection: "row"
                }}>
                    <View style={{
                        flexDirection: "row",
                        // backgroundColor: "pink",
                        justifyContent: "center",
                        width: "10%",
                        alignItems: "center"
                    }}>
                    <Image
                      source={require("../../assets/s.png")}
                      style={{
                        width: 30,
                        height: 30,
                      }}
                    />

                    </View>
                   
                   

                </View>
                <View style={{
                //  backgroundColor: "green",
                 height: 40,
                 alignItems: "center",
                 width: "15%",
                 justifyContent: "center"
                }}>
                      <Image
                      source={require("../../assets/fi1.png")}
                      style={{
                        width: 35,
                        height: 35,
                      }}
                    />

                </View>
                </View> */}

                {/* Current Day Events  */}
                
                <View style={{
                    // flexDirection: "row",
                    gap: 0,
                    height: 100,
                    padding: 5,
                    // backgroundColor: "skyblue",
                    alignItems: "center"

                }}>
                      <View style={{
                        // backgroundColor: "green",
                        // height: 60,
                        // gap: 15,
                        // justifyContent: "center"
                        position:"relative", 
                        left: 170,
                        top: -10
                    }}>
                        <View style={{
                             justifyContent: "center",
                             alignItems: "center"
                        }}>
                        <Image
                        source={require("../../assets/k2.png")}
                        style={{
                          width: 15,
                          // height: 490,

                          height: 15,
                          
                         
                          //  paddingRight: 30,
                        }}/>

                        </View>
                        
                    </View>


                  
                    <ScrollView
                    horizontal={true}
                    style={{
                        flexGrow: 1,
                        // backgroundColor: "pink",
                    }}
                    >
                        <View style={{
                            width: 600,
                            flexDirection: "row",
                            gap: 27,
                            height: 70,
                            // backgroundColor: "pink",
                            // alignItems: "center"
                        }}> 

                        {eventFavorData.map((currentDayEventItem, i) => (
                             <View key={i}>
                                 <View style={{
                                            // backgroundColor: "orange",
                                            // width: "100%"
                                            // height: 50
                                            // 
                                        }}>
                                            <View>
                                            <Image
                                            source={{ uri: currentDayEventItem.ImageCoverUpload }}
                                            style={{
                                                height: 70,
                                                width: 70,
                                                borderRadius: 100
                                        
                                                //  paddingRight: 30,
                                            }}
                                           />

                                            </View>
                                </View>
                                

                             </View>

                        ))}
                      
                   

                        </View>
                      


                        
                    
                    </ScrollView>
                   
                   


                </View>
               

               {/* Tags for Events */}
                <View style={{
                    flexDirection: "row",
                    gap: 24,
                    height: 50,
                    padding: 5,
                    // backgroundColor: "green",
                    alignItems: "center"

                }}>

                    <ScrollView
                    horizontal={true}
                    style={{
                        flexGrow: 1,
                        // backgroundColor: "pink",
                    }}
                    >
                        <View style={{
                            width: 720,
                            flexDirection: "row",
                            gap: 31,
                            height: 40,
                            // backgroundColor: "pink",
                              alignItems: "center"
                        }}> 
                         <View style={{
                        // borderWidth: 1,
                        borderRadius: 50,
                        // borderColor: "rgba(255, 255, 255,0.5)",
                        height: 25,
                        // padding: 5,
                        width: "14%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:"rgba(0, 0, 0,0.4)"
                    }}>
                        <Text style={{
                            textAlign: "center",
                            color: "white"

                        }}>Rock</Text>
                    </View>
                        <View style={{
                        // borderWidth: 1,
                        borderRadius: 50,
                        // borderColor: "rgba(255, 255, 255,0.5)",
                        height: 25,
                        // padding: 5,
                        width: "14%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:"rgba(0, 0, 0,0.4)"
                    }}>
                        <Text style={{
                            textAlign: "center",
                            color: "white"

                        }}>Rock</Text>
                        </View>
                        <View style={{
                        // borderWidth: 1,
                        borderRadius: 50,
                        // borderColor: "rgba(255, 255, 255,0.5)",
                        height: 25,
                        // padding: 5,
                        width: "14%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:"rgba(0, 0, 0,0.4)"
                    }}>
                        <Text style={{
                            textAlign: "center",
                            color: "white"

                        }}>Rock</Text>
                    </View>
                    <View style={{
                        // borderWidth: 1,
                        borderRadius: 50,
                        // borderColor: "rgba(255, 255, 255,0.5)",
                        height: 25,
                        // padding: 5,
                        width: "14%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:"rgba(0, 0, 0,0.4)"
                    }}>
                        <Text style={{
                            textAlign: "center",
                            color: "white"

                        }}>Rock</Text>
                    </View>
                    <View style={{
                        // borderWidth: 1,
                        borderRadius: 50,
                        // borderColor: "rgba(255, 255, 255,0.5)",
                        height: 25,
                        // padding: 5,
                        width: "14%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:"rgba(0, 0, 0,0.4)"
                    }}>
                        <Text style={{
                            textAlign: "center",
                            color: "white"

                        }}>Rock</Text>
                    </View>
                    <View style={{
                        // borderWidth: 1,
                        borderRadius: 50,
                        // borderColor: "rgba(255, 255, 255,0.5)",
                        height: 25,
                        // padding: 5,
                        width: "14%",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor:"rgba(0, 0, 0,0.4)"
                    }}>
                        <Text style={{
                            textAlign: "center",
                            color: "white"

                        }}>Rock</Text>
                    </View>
                    
                   
                    
                    
                 
                   

                        </View>
                      


                        
                    
                    </ScrollView>
                   
                   


                </View>

                
               
                <View style={{
                    // backgroundColor: "pink",
                    height: 470,
                    flexDirection: "row",
                }}>
              
                    {eventFavorData
                        ?(
                               <ScrollView
                                scrollEventThrottle={96}
                                decelerationRate="normal"
                               style={{
                                // backgroundColor: "blue",
                                
                               }}
                               >
                                 <View style={{
                                    // backgroundColor: "green",
                                    flexDirection: "row",
                                   
                                    flexWrap: "wrap",
                                    gap: 25,
                                    rowGap: 25,
                                    padding: 5
                                }}> 
                                {
                                    eventFavorData?.map((item, index) => (
                                    
                                  
                                         <View
                                     key={index}
                                     style={{
                                      
                                     }}
                                     >
                                        <View style={{
                                            // backgroundColor: "orange",
                                            width: 170,
                                            height: 220

                                            // 
                                        }}>
                                            <View>
                                            <Image
                                            source={{ uri: item.ImageCoverUpload }}
                                            style={{
                                                height: 150,
                                                width: 170,
                                                borderRadius: 5,
                                        
                                                //  paddingRight: 30,
                                            }}
                                           />

                                            </View>

                                            <View style={{
                                                flexDirection: "row",
                                                marginTop: 5,
                                                // backgroundColor: "pink",
                                                height: 40

                                            }}>
                                            <View style={{
                                                // backgroundColor: "red",
                                                width: "80%",
                                                gap: 3

                                            }}>
                                            <View style={{
                                                // marginTop: 5
                                            }}>
                                                <Text style={{color: "white"}}>{item.eventTitle}</Text>

                                            </View>
                                           
                                            <View style={{
                                                // backgroundColor: "red",
                                                // borderWidth: 1,
                                                borderRadius: 2,
                                                // borderColor: "rgba(255, 255, 255,0.5)",
                                                width: "59%",
                                                height: 15,
                                                 alignItems: "center", 
                                                justifyContent: "center",
                                                backgroundColor:"rgba(0, 0, 0,0.4)"
                                             

                                            }}>
                                                <Text style={{
                                                    color: "white",
                                                    textAlign: "center",
                                                    fontSize: 10
                                                }}>{item.eventType}</Text>

                                            </View>

                                            </View>
                                            <View
                                            style={{
                                                width: "20%",
                                                // backgroundColor: "blue",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}
                                            >
                                            <Image
                                                source={require("../../assets/s1.png")}
                                                style={{
                                                width: 25,
                                                // height: 490,

                                                height: 25,
                                                
                                                
                                                //  paddingRight: 30,
                                                }}/>
                                            </View>

                                            </View>
               
                                            
                                        

                                        </View>
                                    </View>


                                   
                                ))
                                }

                                </View> 
                               


                               </ScrollView>
                                

                               
                               
                           
                            


                        ): 
                         <View>
                            <Text>Loading....</Text>
                         </View>
                        
                    }
                </View>
              
                
        </View>

    )
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
    backgroundColor: "green "

     
  },

})

