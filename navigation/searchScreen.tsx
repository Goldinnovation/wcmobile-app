import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import SearchpageStructure from '../component/search_component/searchpageStructure'


export default  function SearchScreen() {
  return (
    <View style={styles.container}> 
        <View>
            <SearchpageStructure/>
        </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      // backgroundColor: "pink",
      flex: 1,
    //   justifyContent: "center",
      // paddingTop: 50,

    },
 
 

})
