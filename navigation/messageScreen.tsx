import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default  function MessageScreen() {
  return (
    <View style={styles.container}> 
        <View style={{
          height: "100%",
          // backgroundColor: "pink",
          alignItems: "center",
          justifyContent: "center", 
          opacity: 0.7

        }}>
            <Text style={{
              color: "white"
            }}>In process...</Text>
        </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgba(24,24,24,1)",
      // flex: 1,
      height:"100%",
    //   justifyContent: "center",
      // paddingTop: 50,

    },
 
 

})
