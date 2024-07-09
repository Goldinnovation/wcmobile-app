import { View, Text,StyleSheet } from "react-native"
// import Menu from "../../component/menu"
// import Content from "../../component/content"
import UserExploreContent from '../component/userExploreContent'

export default function ExploreScreen() {
    return(
        <View  style={styles.container}>
            {/* <Text>Hallo explore Screen </Text> */}
         {/* <View style={styles.IconStar}> */}
          
         {/* <Menu/> */}

         {/* </View> */}

         <UserExploreContent/>

            
        </View>

        
    )
}

const styles = StyleSheet.create({

    container: {
        // backgroundColor: "yellow",
        flex: 1
    },
    IconStar: {
        // backgroundColor: "pink",
        // borderWidth: 1,
        // flex: 1, 
        

        width: "20%",
        height: "10%",
        alignItems: "center",
        justifyContent: "center",
        
        // borderColor: "pink",
        position: "relative", 
        // alignItems: "center",
        top: "80%",
        left: "78%",
        // width: "14%", 
        // height: "7%",
       
        
        

    }, 

   
})