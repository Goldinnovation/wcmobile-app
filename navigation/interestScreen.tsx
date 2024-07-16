import { View, Text, StyleSheet } from "react-native"
import InterestDataList from "../component/Interest_Component/interestData"





export default function  UserInterestScreen(){
    return(
        <View style={styles.container}>
            
            <InterestDataList/>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
})


