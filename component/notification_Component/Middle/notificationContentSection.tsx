import { View, Text, Image, TouchableOpacity } from "react-native"


interface NotificationContentSectionProps{

    connectToggle: boolean
    eventToggle: boolean
}




const NotificationContentSection: React.FC<NotificationContentSectionProps> =  ({
    connectToggle,
    eventToggle

}) => {


    return(
        <View style={{
            // backgroundColor: "grey", 
            width: "100%",
            height:"82%", 
            padding: 5

        }}>
            { connectToggle ? 
            (
                <View style={{
                    height:"100%", 
                    width: "100%", 
                    // backgroundColor: "pink",
                    padding: 5


                }}> 

                 <View style={{
                     height:"20%", 
                    //  width: "100%", 
                    //  backgroundColor: "orange",
                     flexDirection: "row", 
                     marginTop: "2%"
                    //  gap: 5, 
                    //  borderBottomColor: "rgba(255, 255, 255,0.5)",
                    //  borderBottomWidth: 1
                     

                 }}>
                    <View style={{
                     height:"100%", 
                     width: "40%", 
                    //  backgroundColor: "green",
                     justifyContent: "center",
                     alignItems: "center",


                 }}>
                         <Image
                                  source={require("../../../assets/profileImg/3.jpg")}
                                  style={{
                                    width: 130,
                                    height: 89,
                                    borderRadius: 7,
                                    // marginLeft: 20,
                                    // position: "relative",
                                    // top: isOpen === item.eventId ? "-30%" : "-30%",
                                    marginTop: 1,
                                  }}
                                />                    
                 </View>

                 <View style={{
                     height:"100%", 
                     width: "60%", 
                    //  backgroundColor: "skyblue",
                     alignItems: "center",
                    justifyContent: "center",
                    // borderBottomColor: "rgba(255, 255, 255,0.5)",
                    //  borderBottomWidth: 1
                 }}>
                    <View style={{
                         height:"30%", 
                         width: "100%", 
                        //  backgroundColor: "green",
                         flexDirection: "row", 
                         alignItems: "center",
                         justifyContent: "flex-end",
                        
                    }}><Text style={{
                        color: "white", 
                        fontSize: 18, 
                        opacity: 0.7
                    }}>User followed you </Text></View>
                    <View style={{
                         height:"40%", 
                         width: "100%", 
                        //  backgroundColor: "grey",
                         flexDirection: "row", 
                         alignItems: "center",
                         justifyContent: "flex-end",
                    }}>
                         <TouchableOpacity style={{
                         height:"60%", 
                         width: "50%", 
                        //  backgroundColor: "brown",
                         backgroundColor: "rgba(149,149,149,0.3)"  ,
                         borderColor:  "rgba(255, 255, 255,0.5)" ,
                         borderWidth: 1,
                         borderRadius: 7,
                         flexDirection: "row", 
                         alignItems: "center",
                         justifyContent: "center",
                    }}>
                        <Text style={{
                        color: "white", 
                        fontSize: 15, 
                        opacity: 0.7
                    }}>follow</Text>
                        
                    </TouchableOpacity>
                    

                    </View>
                    
                 </View>
                   
                 </View>
                
                </View>
            ): <View style={{
                height:"100%", 
                width: "100%", 
                backgroundColor: "green",
            }}></View>
            
            }

        </View>
    )
}

export default NotificationContentSection