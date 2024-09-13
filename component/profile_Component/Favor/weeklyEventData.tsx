import React from 'react'
import { View, Image } from 'react-native'
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
  )
}

export default WeeklyEventData
