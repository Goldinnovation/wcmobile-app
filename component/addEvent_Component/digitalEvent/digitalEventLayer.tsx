import { View, Text } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Digital_EventLayer = () => {
  return (
  <View style={{
          backgroundColor: "pink", 
          height: hp(70),
          width:  wp(100),
  }}>
                      <Text>Enter Event Name Digital</Text>
  
        
      </View>
  )
}

export default Digital_EventLayer
