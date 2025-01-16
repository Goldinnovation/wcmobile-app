import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import SearchContent from "./BelowContentSection/searchContent";
import QrCodeContent from "./BelowContentSection/qrContent";
import SearchMenuToggleContent from "./searchMenu";
import SearchOption from "./UpperContentSection/searchOption";
import { Button } from "react-native";
import { useRef } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userQrDataReq } from "../../api/userScreen_Api/userQrDataReq";
import { memo } from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import UserQRCard from "./UserCardSection/userCard";

interface UserDataprops {
  userId: string; // Add other properties if needed
  picture: any;
  userName: string;
}

const SearchpageStructure = () => {
  const [searchMenuToggle, setSearchMenuToggle] = useState(false);
  const [addUserToggle, setAddUserToggle] = useState(true);
  const [QRCodeToggle, setQrCodeToggle] = useState(false);
  const [inputConditions, setInputConditions] = useState(true);
  const [inputValue, setInputValue] = useState("");
  // const [searchContent, setSearchContent] = useState(true);
  // const [qrCodeContent, setQrCodeContent] = useState(false);
  const [foundUser, setFoundUser] = useState(false);
  const [barCodeType, setbarCodeType] = useState(null);
  const [barCodeData, setBarCodeData] = useState(null);
  const [placeHolderText, setPlaceHolderText] = useState(
    "Search for your Friends"
  );

  const [userFollowState, setUserFollowState] = useState(false)
  const childRef = useRef<any>(null);
  const [userData, setUserData] = useState<UserDataprops | null>(null);

  const handleToggleSearchMenu = () => {
    setSearchMenuToggle(!searchMenuToggle);
  };

  const handleQRCodeRequest = async (endpoint: string) => {
    const userFetchedData = await userQrDataReq(endpoint);
    setUserData(userFetchedData);
  };

  const handleUserisFound = async ({ type, data }: any) => {
    console.log("User is founded");
    console.log("handleUserisFound Data: ", data);
    console.log("handleUserisFound type: ", type);
    setFoundUser(true);
    setbarCodeType(type);
    setBarCodeData(data);
    if (data !== null || data !== undefined) {
      handleQRCodeRequest(data);
    }
  };

  const handleQCloseEvent = () => {
    setFoundUser(false);
    if (childRef.current) {
      childRef.current.handleAkivateScann();
    }
  };

  const handleUserFollowedOtherUser = () => {
    setFoundUser(false);
    setUserFollowState(true)
    setTimeout(() => {
      setUserFollowState(false)
      handleUserToggle()
    },1000)

    // if (childRef.current) {
    //   childRef.current.handleAkivateScann();
    // }

  }

  const handleQRToggle = () => {
    setAddUserToggle(false);
    // setSearchContent(false);
    setQrCodeToggle(true);
    // setQrCodeContent(true);
    setInputConditions(false);
    setSearchMenuToggle(false);
    setInputValue("");
    setPlaceHolderText("");
  };

  const handleUserToggle = () => {
    setQrCodeToggle(false);
    // setQrCodeContent(false);
    setAddUserToggle(true);
    // setSearchContent(true);
    setInputConditions(true);
    setSearchMenuToggle(false);
    setPlaceHolderText("Search for your Friends");
  };
  return (
    <View
      style={{
        height: "100%",
      }}
    >

      {/* Displays Card when User is found */}
      {foundUser && (
        <View
          style={{
            width: "100%",
            height: "100%",
            // backgroundColor: "pink",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            // flex: "100%",
            // position: "absolute",
            zIndex: 3,
          }}
        >
          {(userData as any) ? (
            <View
              style={{
                height: "100%",
                width: scale(350),
                // backgroundColor:"pink",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <UserQRCard data={userData}  handleQCloseEvent={handleQCloseEvent} handleUserFollowedOtherUser={handleUserFollowedOtherUser} />

             
              
            </View>
          ) : (
            <View></View>
          )}
        </View>
      )}

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

          <QrCodeContent ref={childRef} handleUserisFound={handleUserisFound} userFollowState={userFollowState} userData={userData} />
        ) : (
          // Search Content

          <SearchContent />
        )}
      </View>
    </View>
  );
};

export default memo(SearchpageStructure);
