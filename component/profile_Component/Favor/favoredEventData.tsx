
import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


interface eventFavorData{
    eventId: string;
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

interface FavoredEventDataProps {
    eventData: eventFavorData[] | []
}



const FavoredEventData: React.FC<FavoredEventDataProps> = ({eventData}) => {
    const eventFavorData= eventData


    const handleEventToggle = (e: string) => {
        console.log(e);

    }
  return (
    <View>
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
                                            <TouchableOpacity
                                            onPress={() => handleEventToggle(item.eventId)}
                                            >
                                            <Image
                                            source={{ uri: item.ImageCoverUpload }}
                                            style={{
                                                height: 150,
                                                width: 170,
                                                borderRadius: 5,
                                        
                                                //  paddingRight: 30,
                                            }}
                                           
                                           />

                                            </TouchableOpacity>

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
                                                source={require("../../../assets/s1.png")}
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
      
    </View>
  )
}

export default FavoredEventData