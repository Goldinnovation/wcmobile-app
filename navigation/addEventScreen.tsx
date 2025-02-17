

import { View } from "react-native"
import { Text } from "react-native"


const AddEventScreen = () => {
  return (
    <View style={{
      height: "100%",
      // flex: 1,
      backgroundColor: "green",
      paddingTop: 40,
      borderTopWidth: 1, 
      borderColor: "rgba(179,179,179,1)",
      borderRadius: 11
    }}>
        <Text>Hello inside Add Event Tab</Text>
      
    </View>
  )
}

export default AddEventScreen
