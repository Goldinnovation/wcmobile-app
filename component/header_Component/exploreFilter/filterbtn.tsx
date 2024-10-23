import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"


interface FilterBtnProps{
    onClose: () => void
}

const FilterBtn: React.FC<FilterBtnProps> =  ({onClose}) => {
    return(

        <View
        style={{
          // backgroundColor: "skyblue",
          height: 70,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity 
        onPress={onClose}
        style={{
          height: 35,
          backgroundColor: "rgb(0, 128, 255)",
          width: 200,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
        
        >
          <Text style={{color: "white"}}>Start Transition</Text>
        </TouchableOpacity>
      </View>

    )
}

export default FilterBtn