import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import SearchContent from "./BelowContentSection/searchContent";
import QrCodeContent from "./BelowContentSection/qrContent";
import SearchMenuToggleContent from "./searchMenu";
import SearchOption from "./UpperContentSection/searchOption";
import { Button } from "react-native";
import { useRef } from "react";





export default function SearchpageStructure() {
  const [searchMenuToggle, setSearchMenuToggle] = useState(false);
  const [addUserToggle, setAddUserToggle] = useState(true);
  const [QRCodeToggle, setQrCodeToggle] = useState(false);
  const [inputConditions, setInputConditions] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [searchContent, setSearchContent] = useState(true);
  const [qrCodeContent, setQrCodeContent] = useState(false);
  const [foundUser, setFoundUser] = useState(false)
  const [barCodeType, setbarCodeType] = useState(null)
  const [barCodeData, setBarCodeData] = useState(null)
  const [placeHolderText, setPlaceHolderText] = useState("Search for your Friends")
  const childRef = useRef<any>(null);

  const handleToggleSearchMenu = () => {
    setSearchMenuToggle(!searchMenuToggle);
  };




  const handleUserisFound = ({type, data}: any) => {
    console.log('User is founded');
    console.log('handleUserisFound Data: ', data);
    console.log('handleUserisFound type: ', type);
    setFoundUser(true)
    setbarCodeType(type)
    setBarCodeData(data)

  
    

  }

  const handleQCloseEvent = () => {
    setFoundUser(false)
    if(childRef.current){
      childRef.current.handleAkivateScann();
    }
  }
  const handleQRToggle = () => {
    setAddUserToggle(false);
    setSearchContent(false);
    setQrCodeToggle(true);
    setQrCodeContent(true);
    setInputConditions(false);
    setSearchMenuToggle(false);
    setInputValue("");
    setPlaceHolderText("")
  };

  const handleUserToggle = () => {
    setQrCodeToggle(false);
    setQrCodeContent(false);
    setAddUserToggle(true);
    setSearchContent(true);
    setInputConditions(true);
    setSearchMenuToggle(false);
    setPlaceHolderText("Search for your Friends")
  };
  return (
    <View
      style={{
        height: "100%",
      }}
    >
      {
          foundUser 
          &&
          <View style={{
            width: "100%", 
            height: "100%",
            // backgroundColor: "pink", 
            backgroundColor: "rgba(0, 0, 0, 0.4)", 
            // flex: "100%", 
            // position: "absolute",
            zIndex: 3


          }}>
              <Text style={{color: "white"}}>Founded type: {barCodeType}</Text>
              <Text style={{color: "white"}}>Founded Data: {barCodeData}</Text>
              <Button title="close" onPress={handleQCloseEvent}></Button>
          </View>
         
          }
    

    

    
    
      {/* Upper part:  Search Section, user can search through other user name or use the QR Code methode */}
      <View
        style={{
          height: "15%",
          // backgroundColor: "orange",
          alignItems: "center",
          padding: 5,
          flexDirection: "row",
          // gap: 10
        }}
      >
        {/* Displays the  Search Input Option that the user can use to search for other users  */}
        <SearchOption
          QRCodeToggle={QRCodeToggle}
          addUserToggle={addUserToggle}
          handleToggleSearchMenu={handleToggleSearchMenu}
          setInputValue={setInputValue}
          inputValue={inputValue}
          inputConditions={inputConditions}
          placeHolderText={placeHolderText}
        />
            {/* Menu for selecting the search option */}
        {searchMenuToggle && (
          <SearchMenuToggleContent
            QRCodeToggle={QRCodeToggle}
            addUserToggle={addUserToggle}
            handleQRToggle={handleQRToggle}
            handleUserToggle={handleUserToggle}
          />
        )}
      </View>

      {/* Below part: Displays the choosen Method content & Result */}
      <View
        style={{
          height: "85%",
          zIndex: -1,
          // backgroundColor: "green",
          alignItems: "center",
          padding: 10,
          flexDirection: "row",
          // gap: 10
        }}
      >
          
        


        {QRCodeToggle ? (
          // QR code Content

          <QrCodeContent ref={childRef}  handleUserisFound={handleUserisFound} />
        ) : (
          // Search Content

          <SearchContent />
        )}
      </View>
    </View>
  );
}

