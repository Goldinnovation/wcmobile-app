import { View, Text} from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




const NH_EventLayer = () => {
  return (
  <View style={{
           backgroundColor: "pink", 
           height: hp(70),
           width:  wp(100),
   }}>
                  {/* <View></View> */}
   
         
       </View>
  )
}

export default NH_EventLayer
