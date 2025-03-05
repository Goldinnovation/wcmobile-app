import { View, Text } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';







const RL_EventlLayer = () => {
  return (
    <View style={{
        backgroundColor: "pink", 
        height: hp(70),
        width:  wp(100),
        display: "flex", 
        alignItems: "center"
    }}>
             <View style={{
                height: hp(10),
                width:  wp(98),
                backgroundColor: "green", 

             }}>
                <Text>1</Text>
             </View>
             <View style={{
                height: hp(10),
                width:  wp(98),
                backgroundColor: "blue", 

             }}>
                <Text>1</Text>
             </View>
             <View style={{
                height: hp(20),
                width:  wp(98),
                backgroundColor: "orange", 
             }}>
               <Text>2</Text>

             </View>
             <View style={{
                height: hp(10),
                width:  wp(98),
                backgroundColor: "grey", 
             }}>
                  <Text>3</Text>

             </View>
             

      
    </View>
  )
}

export default RL_EventlLayer
