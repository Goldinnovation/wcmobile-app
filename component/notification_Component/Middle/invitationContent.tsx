


import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'



interface eventProps {
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

interface InvitationContentProps{
    index: number, 
    item: eventProps 
}
const InvitationContent: React.FC<InvitationContentProps> = ({item, index}) => {


    // console.log('item', item);
    console.log('index', index);
  return (
    <View 
    key={index}

    style={{
        height:"14%", 
        // backgroundColor: "green",
        flex: 1,   
        padding: 1,
        marginBottom: "16%"
    
        
    }}
 
    >
        {/* Left Area */}
            <View style={{
                // backgroundColor: "pink", 
                height:"86%", 
                display:"flex", 
                flexDirection: "row",
                gap: 10
            }}>

                <View style={{
                    //  backgroundColor:"brown", 
                     height: "100%", 
                     width: "40%"
                }}>
                <Image
                source={{ uri: item.ImageCoverUpload }}
                style={{
                    height: 265,
                    width: 155,
                    borderRadius: 7
            
                    //  paddingRight: 30,
                    }}
                />

                </View>
               
                    {/* Reight Area */}
            <View style={
                {
                    // backgroundColor:"brown", 
                    height: "100%", 
                    width: "58%"
                }}>

                    {/* Invitation - Description title area  */}
                    <View style={{
                        height: "20%", 
                        width:"100%",
                        // backgroundColor: "skyblue", 
                        display: "flex", 
                        // alignItems: "center", 
                       justifyContent: "center",
                       padding: 10,



                    }}>
                        <Text style={{
                            color: "white", 
                            fontSize: 20, 
                            fontWeight: "bold", 
                        }}>{item?.eventTitle}</Text>
                    </View>

                    {/* Invitation - Description area */}
                    <View style={{
                        height: "70%",
                        width: "100%",
                        // backgroundColor:"pink", 
                        display: "flex", 
                        // alignItems: "center", 
                        padding: 10,
                        // justifyContent: "center"
                    }}>
                        <Text style={{
                            color: "white", 
                            fontWeight: "light",
                            opacity: 0.7
                        }}>{item?.eventDescriptionContent}</Text>
                    </View>
                    <View style={{
                        height: "25%", 
                        width: "100%",
                        // backgroundColor:"pink", 
                        paddingLeft: 10,
                        display: "flex",
                        flexDirection: "row", 
                        justifyContent: "space-around",
                        alignItems: "center", 

                    }}> 
                         <TouchableOpacity style={{
                             height: "50%", 
                             width: "40%",
                              display: "flex", 
                              alignItems: "center", 
                              justifyContent: "center",
                              borderRadius: 7,
                              backgroundColor:  "rgba(13, 114, 30, 0.74)" ,
                            //   borderColor:  "rgba(255, 255, 255,0.5)",
                              borderWidth:  1,
                         }}><Text style={{
                            color:"white", 
                         }}>Join</Text></TouchableOpacity>

                            <TouchableOpacity style={{
                            height: "50%", 
                            width: "40%",
                             display: "flex", 
                             alignItems: "center", 
                             justifyContent: "center",
                             borderRadius: 7,
                             backgroundColor:  "rgba(255, 54, 54, 0.56)" ,
                            //  borderColor:  "rgba(255, 255, 255,0.5)",
                             borderWidth:  1,
                            //  opacity: 0.7

                         }}><Text style={{
                            color:"white", 

                         }}>Decline</Text></TouchableOpacity>
                         {/* <View><Text>Join</Text></View> */}
                         

                    </View>
                </View>
            </View>    
           
       
    </View>
  )
}

export default InvitationContent
