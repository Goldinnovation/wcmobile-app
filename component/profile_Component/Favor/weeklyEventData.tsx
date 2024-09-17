import React from 'react'
import { View, Image, Text } from 'react-native'
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

interface weeklyEventDataProps {
    eventData: eventFavorData[] | []
}

const WeeklyEventData: React.FC<weeklyEventDataProps> = ({eventData}) => {

    const eventFavorData = eventData
  return (
    <View style={{
        gap: 13
    }}>
        <View style={{
            marginRight: 2,
        }}>
            <Text style={{
                fontSize: 10, 
                fontWeight: 600, 
                color: "white", 
                textAlign: "right",
                paddingLeft: 2,
                opacity: 0.6


            }}>Events for this Week</Text>
        </View>
        <View>
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
                            gap: 28,
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

                                            <View style={{
                                                padding: 2
                                            }}>
                                                <Text style={{
                                                color: "white", 
                                                fontSize: 6, 
                                                textAlign: "center",
                                                marginTop: 6
                                            }}>{currentDayEventItem?.eventTitle}</Text></View>
                                </View>
                                

                             </View>

                        ))}
                      
                   

                        </View>
                      


                        
                    
        </ScrollView>

        </View>
       
      
    </View>
  )
}

export default WeeklyEventData
