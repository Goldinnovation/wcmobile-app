import { defaultHeaderInterpreter } from "axios-cache-interceptor"
import { View, Text} from "react-native"
import { useState } from "react"
import { TouchableOpacity } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken("pk.eyJ1IjoiZ29sZGlubm92YXRpb24iLCJhIjoiY202NmJpaGppMXljdjJscjBpZzVxZXJtYyJ9.7xZ3FKUVTmYl1YL2QrsW4Q")


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
              <Mapbox.MapView style={{
                flex: 1
              }} />
           </View>
        </View>
    )
}

export default ModeScreen