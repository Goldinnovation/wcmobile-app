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
                 fontSize: 25, 
                 fontWeight: "bold", 
                 opacity: 0.4
            }}> Search for your Friends </Text>
            
        </View>

    )
}

export default SearchContent