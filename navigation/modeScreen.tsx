import { defaultHeaderInterpreter } from "axios-cache-interceptor"
import { View, Text} from "react-native"
import { useState } from "react"
import { TouchableOpacity } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";



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
            // paddingTop: 50,
            

        }}>

           <View style={{
            backgroundColor: "pink", 
            height: "100%", 
            width: "100%",
            justifyContent: 'center',
            alignItems: 'center',

           }}>
             
           </View>
        </View>
    )
}

export default ModeScreen