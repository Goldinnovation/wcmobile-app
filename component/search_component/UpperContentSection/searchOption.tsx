


import { View, TouchableOpacity, Text } from "react-native"
import SearchLoopIcon from "../../../icons/searchLoopIcon"
import OutlineScanIcon from "../../../icons/outlineScanIcon"
import AddFriendsIcon from "../../../icons/addFriendsIcon"
import { TextInput } from "react-native"



interface SearchNQRCodeProps{
    QRCodeToggle: boolean
    addUserToggle: boolean
    handleToggleSearchMenu: () => void
    setInputValue: (text: string) => void
    inputValue: string
    inputConditions: boolean
    placeHolderText: string

}

const SearchOption: React.FC<SearchNQRCodeProps> = ({
    QRCodeToggle,
    addUserToggle,
     handleToggleSearchMenu,
     setInputValue,
     inputValue,
     inputConditions,
     placeHolderText

    }) => {
    return(

        <View style={{
            width: "99%",
            height: "50%", 
            backgroundColor: "rgba(255, 255, 255,0.1)",
            borderRadius: 50,
            // backgroundColor: "red",

            borderWidth: 1, 
            borderColor: "rgba(255, 255, 255,0.5)",
            flexDirection: "row",
            // shadowOffset: { width: 0, height: 2 },
            // shadowOpacity: 1,
            // shadowRadius: 1,

        }}>
            <View style={{
                width: "12%",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.8,
                backgroundColor: "rgba(70,70,70,0.3)",
                // backgroundColor: "red",
                borderTopLeftRadius: 50,
                borderBottomLeftRadius: 50,
               
            }}> 


                {
                    addUserToggle 
                    ? <SearchLoopIcon width={'29'} height={'21'} />

                    :  <Text style={{
                        color: "white", 
                        fontSize: 22 

                    }}>#</Text>
                }
           
            </View>
            <View style={{
                width: "68%",
                backgroundColor: "rgba(203,203,203,0.1)",
                 
                
            }}
            > 
              <TextInput
                style={{ 
                    height: "99%",

                    // borderWidth: 1,
                    paddingLeft: 5,
                    // margin: 30,
                    width: "100%", 
                    color: "white",
                    // backgroundColor: "#c7c7c7",
                    // borderRadius: 7,
                    // marginTop: 20,
                     borderLeftWidth: 1,
                    borderLeftColor: "rgba(255, 255, 255,0.5)",
                    borderRightWidth: 1,
                    borderRightColor: "rgba(255, 255, 255,0.5)"

                }}
                onChangeText={setInputValue}
                value={inputValue}
                placeholder={placeHolderText}
                placeholderTextColor="rgba(255, 255, 255,0.5)" 
                editable={inputConditions}
                selectTextOnFocus={inputConditions}
                // secureTextEntry={true}
            />
            
            </View>
            <TouchableOpacity style={{
            width: "20%",
            // height: "50%", 
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(70,70,70,0.3)",
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            // borderWidth: 1, 
            borderColor: "rgba(255, 255, 255,0.1)",
            // borderLeftWidth: 3,
            
            // borderStartColor: "rgba(255, 255, 255,0.5)"
            // borderStartColor: "red"
            borderStyle: "solid"

           

        }}
        onPress={() => handleToggleSearchMenu()}
        >
            {
                QRCodeToggle 
                
                ? <OutlineScanIcon width={'29'} height={'21'} />

                : <AddFriendsIcon width={'21'} height={'21'} />

            }
        

        </TouchableOpacity>
        </View>
    )
}
export default SearchOption