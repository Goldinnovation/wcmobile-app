import { View, TouchableOpacity} from "react-native"
import AddFriendsIcon from "../../icons/addFriendsIcon"
import OutlineScanIcon from "../../icons/outlineScanIcon"




interface searchMenuProps{
    handleQRToggle: () => void
    handleUserToggle: () => void
    addUserToggle: boolean
    QRCodeToggle: boolean


}


const SearchMenuToggleContent: React.FC<searchMenuProps> = ({handleUserToggle, handleQRToggle, addUserToggle, QRCodeToggle}) => {

    return(
        <View style={{
            position: "absolute", 
            top: "100%",
            left: "83%",
            zIndex: 4,
            width: "14%",
            height: "180%",
            backgroundColor: "rgba(255, 255, 255,0.1)",
            borderRadius: 50,
            borderWidth: 1, 
            borderColor: "rgba(255, 255, 255,0.5)",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 1,
            // gap: 20


        }}>
            <TouchableOpacity style={{
                backgroundColor: addUserToggle ? "rgba(70,70,70,0.4)" : "rgba(0,0,0,0)",
                width: "100%",
                height: "50%",
                alignItems: "center",
                justifyContent: "center",
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                borderBottomWidth: 1,
                borderBottomColor: "rgba(255, 255, 255,0.5)"
            }}
            onPress={handleUserToggle}
            >
            <AddFriendsIcon width={'21'} height={'21'} />
            </TouchableOpacity>

            <TouchableOpacity style={{
                backgroundColor: QRCodeToggle ? "rgba(70,70,70,0.4)" : "rgba(0,0,0,0)",
                width: "100%",
                height: "50%",
                alignItems: "center",
                justifyContent: "center",
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50
            }}

            onPress={handleQRToggle}
            >
            <OutlineScanIcon width={'29'} height={'21'} />
            </TouchableOpacity>
            

        </View>
    )
}


export default SearchMenuToggleContent