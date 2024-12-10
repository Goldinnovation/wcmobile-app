import React from "react"
import { View, Text } from "react-native"



interface welcomeProps{
    data: string
}
const WelcomePageStructure: React.FC<welcomeProps> = ({data}) => {

    const userName = data

    return(
    <View style={{
        width:"100%", 
        height: "100%", 
        // backgroundColor: "green",
        display: "flex",
        // justifyContent:"center", 
        alignItems: "center", 
        paddingTop: "41%"

    }}>
        <Text style={{
            color:"white", 
            fontSize: 20
        }}> Welcome {userName} to your Profile</Text>


    </View>
    )
}

export default WelcomePageStructure