import { View, Text } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';







const RL_EventlLayer = () => {
  return (
    <View style={{
        backgroundColor: "pink", 
        height: hp(70),
        width:  wp(100),
    }}>
                    <Text>Enter Event Name RL</Text>

      
    </View>
  )
}

export default RL_EventlLayer
