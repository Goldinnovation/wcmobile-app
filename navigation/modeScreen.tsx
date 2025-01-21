import { defaultHeaderInterpreter } from "axios-cache-interceptor"
import { View, Text} from "react-native"
import { useState } from "react"
import { TouchableOpacity } from "react-native-gesture-handler";
import CalenderIcon from "../icons/calenderIcon";
import DayNightIcon from "../icons/DayNightIcon";
import PuzzleIcon from "../icons/puzzleIcon";
import LocationPin from "../icons/locationPin";
import OnlineIcon from "../icons/OnlineIcon";
import VirtualIcon from "../icons/virtualIcon";
import BallonIcon from "../icons/BallonIcon";
import BallonIconColor from "../icons/BallonIconColor";
import PersonalIcon from "../icons/personalIcon";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import FavorIcon from "../icons/favorIcon";
import ArrowIcon from "../icons/arrowIcon";


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
            width: "100%"

           }}><Text>hello</Text></View>
        </View>
    )
}

export default ModeScreen