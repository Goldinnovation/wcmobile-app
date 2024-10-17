import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import AddFriendsIcon from '../../icons/addFriendsIcon'
import PuzzleIcon from '../../icons/puzzleIcon'
import OutlineScanIcon from '../../icons/outlineScanIcon'
import SearchLoopIcon from '../../icons/searchLoopIcon'
import SearchContent from './BelowContentSection/searchContent'
import QrCodeContent from './BelowContentSection/qrContent'
import SearchMenuToggleContent from './searchMenu'
import SearchNQRCodeBar from './UpperContentSection/SearchNQRCodeBar'
import SearchOption from './UpperContentSection/searchOption'

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
    <View style={ {
        height: "100%",
    }}>

        {/* Upper part:  Search Section, user can search through other user name or use the QR Code methode */}
        <View style={{
            height: "15%",
            // backgroundColor: "orange",
            alignItems: "center",
            padding: 5,
            flexDirection: "row",
            // gap: 10



        }}>
           

           
            <SearchOption
            QRCodeToggle = {QRCodeToggle}
            addUserToggle ={addUserToggle}
            handleToggleSearchMenu = {handleToggleSearchMenu}
            setInputValue={setInputValue}
            inputValue={inputValue}
            inputConditions={inputConditions}
            
            />

            


            { searchMenuToggle  &&
            (
                
                <SearchMenuToggleContent 
                QRCodeToggle={QRCodeToggle}
                addUserToggle={addUserToggle}
                handleQRToggle={handleQRToggle} 
                handleUserToggle={handleUserToggle} />
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



// const styles = StyleSheet.create({
//     container: {
//     //   backgroundColor: "red",
//     //   flex: 1,
//      height: "100%",
//     //   justifyContent: "center",
//     //   paddingTop: 50,

//     },
 
 

// })
