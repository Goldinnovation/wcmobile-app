import { View, Text } from "react-native"


const SearchContent = () => {

    return(
        <View style={{
            // backgroundColor: "skyblue",
            width: "100%", 
            height: "100%",
            justifyContent: "center", 
            alignItems: "center"
        }}>
            <Text style={{
                color: "white", 
                textAlign: "center",
                fontSize: 20
            }}> Search for your Firends </Text>
        </View>

    )
}

export default SearchContent