import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default  function UserScreen() {
  return (
    <View style={styles.container}> 
        <View>
            <Text>Hello</Text>
        </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: "pink",
      flex: 1,
    //   justifyContent: "center",
      paddingTop: 50,

    },
 
 

})
