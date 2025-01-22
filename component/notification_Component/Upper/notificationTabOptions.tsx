import { View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";


interface TabOptionsProps{
    handleConnecttoggle: () => void
    handleEventToggle: () => void
    connectToggle: boolean
    eventToggle: boolean
}


const NotificationTabOptions: React.FC<TabOptionsProps> =  ({
    handleConnecttoggle, 
    handleEventToggle,
    connectToggle, 
    eventToggle


}) => {
    return(
        <View style={{
            // backgroundColor: "orange", 
            width: "100%",
            height:"12%",  
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "row", 
            //  borderBottomColor: "rgba(255, 255, 255,0.5)",
            //  borderBottomWidth: 1
          


        }} > 
            <TouchableOpacity style={{
                //  backgroundColor: "green", 
                 width: "40%",
                 height:"40%",  
                 alignItems: "center",
                 justifyContent: "center",
                 flexDirection: "row", 
                 borderRadius: 30, 
                 padding: 5,
                 backgroundColor: connectToggle ?  "rgba(149,149,149,0.3)" : "none" ,
                 borderColor: connectToggle ?  "rgba(255, 255, 255,0.5)" : "none",
                 borderWidth:  connectToggle ? 1 : 0,


            }}
            onPress={() => handleConnecttoggle()}
            ><Text style={{
                color:"white"
            }}>Connect</Text></TouchableOpacity>
            <TouchableOpacity style={{
                //   backgroundColor: "green", 
                  width: "40%",
                  height:"40%",  
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row", 
                  borderRadius: 30, 
                  padding: 5, 
                  backgroundColor: eventToggle ?  "rgba(149,149,149,0.3)" : "none" ,
                  borderColor: eventToggle ?  "rgba(255, 255, 255,0.5)" : "none",
                  borderWidth:  eventToggle ? 1 : 0,
            }}
            onPress={() => handleEventToggle() }
            ><Text style={{
                 color:"white"
            }}> Invitation</Text></TouchableOpacity>


        </View>
    )
}

export default NotificationTabOptions