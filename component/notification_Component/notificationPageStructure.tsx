import { View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";

// import NotificationHeader from "./Upper/NotificationHeader";
import NotificationTabOptions from "./Upper/notificationTabOptions";
import { useState } from "react";
import NotificationHeader from "./Upper/notificationHeader";
import NotificationContentSection from "./Middle/notificationContentSection";

const NotificationPageStructure = () => {

      const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
      const [connectToggle, setConnectToggle] = useState(true)
      const [eventToggle, setEventToggle] = useState(false)


      const handleConnecttoggle  = () => {

        setEventToggle(false)
        setConnectToggle(true)

      }

      const handleEventToggle  = () => {
        setConnectToggle(false)
        setEventToggle(true)

      }
    
    

    return(
        <View style={{
            height:"100%", 
            width: "100%", 
            // backgroundColor: "pink",
            flexDirection: "column"
        }}>
            {/* Header bar */}
             <NotificationHeader/>
             {/* Option */}
            <NotificationTabOptions handleConnecttoggle={handleConnecttoggle} handleEventToggle={handleEventToggle} connectToggle={connectToggle} eventToggle={eventToggle}   />

             {/* content */}
            <NotificationContentSection connectToggle={connectToggle} eventToggle={eventToggle}/> 
        </View>
    )
}

export  default NotificationPageStructure