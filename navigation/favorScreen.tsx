import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import FavorData from '../component/profile_Component/favorpageStructure'

export default  function FavorScreen() {
  return (
    <View style={styles.container}> 
        <View style={{ flex: 1 }}>
                 <FavorData/>
        </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      // backgroundColor: "pink",
      flex: 1,
    //   justifyContent: "center",
      paddingTop: 50,

    },
 
 

})
