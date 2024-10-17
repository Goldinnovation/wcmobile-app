import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import AddFriendsIcon from '../../icons/addFriendsIcon'
import PuzzleIcon from '../../icons/puzzleIcon'
import OutlineScanIcon from '../../icons/outlineScanIcon'
import SearchLoopIcon from '../../icons/searchLoopIcon'
import SearchContent from './UpperContentSection/searchContent'
import QrCodeContent from './BelowContentSection/qrContent'

export default function SearchpageStructure() {
    const [searchMenuToggle, setSearchMenuToggle] = useState(false)
    const [addUserToggle, setAddUserToggle] = useState(true)
    const [QRCodeToggle, setQrCodeToggle] = useState(false)
    const [inputConditions, setInputConditions] = useState(true)
    const [inputValue, setInputValue] = useState("")
    const [searchContent, setSearchContent] = useState(true)
    const [qrCodeContent, setQrCodeContent] = useState(false)


    const handleToggleSearchMenu = () => {
        setSearchMenuToggle(!searchMenuToggle)
    }

    const handleQRToggle = () => {

        console.log('qr code toggle ');
        setAddUserToggle(false)
        setSearchContent(false)
        setQrCodeToggle(true)
        setQrCodeContent(true)
        setInputConditions(false)
        setSearchMenuToggle(false)
        setInputValue("")


    }

    const handleUserToggle = () => {
        
        setQrCodeToggle(false)
        setQrCodeContent(false)
        setAddUserToggle(true)
        setSearchContent(true)
        setInputConditions(true)
        setSearchMenuToggle(false)
    }
  return (
    <View style={styles.container}>

        {/* Upper part:  Search Section, user can search through other user name or use the QR Code methode */}
        <View style={{
            height: "15%",
            // backgroundColor: "orange",
            alignItems: "center",
            padding: 5,
            flexDirection: "row",
            // gap: 10



        }}>
            <View style={{
                width: "99%",
                height: "50%", 
                backgroundColor: "rgba(255, 255, 255,0.1)",
                borderRadius: 50,
                borderWidth: 1, 
                borderColor: "rgba(255, 255, 255,0.5)",
                flexDirection: "row",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 1,

            }}>
                <View style={{
                    width: "12%",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0.8,
                    backgroundColor: "rgba(70,70,70,0.3)",
                    borderTopLeftRadius: 50,
                	borderBottomLeftRadius: 50,
                    borderRightWidth: 1,
                    borderRightColor: "rgba(255, 255, 255,0.5)"
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
                    backgroundColor: "rgba(203,203,203,0.1)"
                }}> 
                  <TextInput
                    style={{ 
                        height: "99%",

                        // borderWidth: 1,
                        paddingLeft: 5,
                        // margin: 30,
                        width: "100%",
                        color: "white"
                        // backgroundColor: "#c7c7c7",
                        // borderRadius: 7,
                        // marginTop: 20,
                    }}
                    onChangeText={setInputValue}
                    value={inputValue}
                    placeholder="Search for other users"
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
                borderWidth: 1, 
                borderColor: "rgba(255, 255, 255,0.1)",
                borderLeftWidth: 1,
                borderLeftColor: "rgba(255, 255, 255,0.5)"
               

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

            


            { searchMenuToggle  &&
            (
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
            )}
           
        </View>

        {/* Below part: Displays the choosen Method content & Result */}
        <View style={{
             height: "85%",
             zIndex: -1,
             backgroundColor: "green",
             alignItems: "center",
             padding: 10,
             flexDirection: "row",
             // gap: 10
        }}>

            {
                QRCodeToggle ?
                // QR code Content
                
                <QrCodeContent/>

                : 
                // Search Content

                <SearchContent/>
                

            }
           


        </View>
        
      
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
    //   backgroundColor: "red",
    //   flex: 1,
     height: "100%",
    //   justifyContent: "center",
    //   paddingTop: 50,

    },
 
 

})
