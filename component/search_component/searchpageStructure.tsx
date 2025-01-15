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
  const [searchContent, setSearchContent] = useState(true);
  const [qrCodeContent, setQrCodeContent] = useState(false);
  const [foundUser, setFoundUser] = useState(false);
  const [barCodeType, setbarCodeType] = useState(null);
  const [barCodeData, setBarCodeData] = useState(null);
  const [placeHolderText, setPlaceHolderText] = useState(
    "Search for your Friends"
  );
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
  const handleQRToggle = () => {
    setAddUserToggle(false);
    setSearchContent(false);
    setQrCodeToggle(true);
    setQrCodeContent(true);
    setInputConditions(false);
    setSearchMenuToggle(false);
    setInputValue("");
    setPlaceHolderText("");
  };

  const handleUserToggle = () => {
    setQrCodeToggle(false);
    setQrCodeContent(false);
    setAddUserToggle(true);
    setSearchContent(true);
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

              {/* Middle section */}
              <View
                style={{
                  height: "75%",
                  width: scale(320),
                  // backgroundColor: "green",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                 

                }}
              >
                  

                <View
                  style={{
                    
                    height: "100%",
                    width: scale(320),
                    // borderRadius: 7,
                    // justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <View style={{
                      //  position: "absolute",
                      //  top: "20%", 
                      //  left: "0%",
                      //  zIndex: 13
                      height: "100%",
                      width: scale(320),
                       
                  }}>
                    <Image
                      style={{ width: "100%", height: "100%", opacity: 0.7,borderRadius: 7,
                        
                      }}
                      source={{ uri: `${userData?.picture.gifUrl}` }}
                    />
                  </View>

                  <View
                    style={{
                      height: "100%",
                      width: scale(320),
                      // backgroundColor: "green",
                      position: "absolute",
                      top: "0%",
                      left: "0%",
                      borderColor: "rgba(255, 255, 255,0.5)",
                      borderWidth: 1,
                      borderRadius: 7,
                      zIndex: 3,
                    }}
                  >
                    
                    {/* Profile Image Section */}

                    <View
                    style={{
                      height: "10%",
                      width: scale(320),
                      // backgroundColor: "skyblue",
                      // position: "absolute",
                      // top: "1%",
                      // left: "80%",
                      // zIndex: 3,
                      display: "flex",
                      justifyContent: "flex-end",
                      flexDirection: "row"
                    }}
                  >
                    <TouchableOpacity style={{
                        height: "100%",
                        width: scale(40),
                        // backgroundColor: "orange",
                        display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row"
                    }}
                    onPress={handleQCloseEvent}

                    >
                    <Text style={{
                      color: "red", 
                      fontSize: 23, 
                      fontWeight: "bold"
                      
                    }}>X</Text>
                    </TouchableOpacity>
                   
                  </View>

                  <View style={{
                    height: "70%",
                    width: scale(320),
                    // backgroundColor: "pink",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative"
                  }}>

                {/* Profile Image */}
                    <View
                      style={{
                        height: "55%",
                        width: scale(320),
                        // backgroundColor: "orange",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* <Image
                              style ={{width: "40%", height:"100%", opacity: 0.7}}
                              source={{ uri : `${ userData?.picture.pictureUrl}`}}
                              /> */}
                      <Image
                        source={require("../../assets/7.jpg")}
                        style={{
                          width: scale(130),
                          height: verticalScale(120),
                          borderRadius: 100,
                        }}
                      />
                    </View>

                    {/* Profile Content Section */}
                    <View
                      style={{
                        height: "15%",
                        width: scale(320),
                        // backgroundColor: "skyblue",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 25,
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        {userData?.userName}
                      </Text>
                    </View>

                  </View>

                    {/* Button Section */}
                    <View
                      style={{
                        height: "10%",
                        width: scale(320),
                        // backgroundColor: "grey",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 1,
                        position: "relative",
                        top: "-5%",
                        left: "0%",
                        zIndex: 3,
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          height: "90%",
                          width: scale(150),
                          borderRadius: 50,
                          backgroundColor: "rgba(149,149,149,0.3)",
                          borderColor: "rgba(255, 255, 255,0.5)",
                          borderWidth: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onPress={handleQCloseEvent}
                      >
                        
                          <Text
                            style={{
                              color: "white",
                            }}
                          >
                            Follow
                          </Text>
                      </TouchableOpacity>
                
                    </View>


                  </View>


                </View>

              

              </View>
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

          <QrCodeContent ref={childRef} handleUserisFound={handleUserisFound} />
        ) : (
          // Search Content

          <SearchContent />
        )}
      </View>
    </View>
  );
};

export default memo(SearchpageStructure);
