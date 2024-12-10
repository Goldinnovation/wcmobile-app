import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
// import img from "../assets/7.jpg"
import UserScanIcon from '../icons/userScanIcon'
import FireIcon from '../icons/fireIcon'
import SettingIcon from '../icons/settingIcon'
// import QrCodePlaceholder from '../icons/qrCodePlaceHolder'
import UserIcon from '../icons/userIcon'
import CameraIcon from '../icons/cameraIcon'
import AddFriendsIcon from '../icons/addFriendsIcon'
import ArrowIcon from '../icons/arrowIcon'
import PlusIcon from '../icons/plusIcon'
import { getUserData } from '../api/userScreen_Api/getUserData'

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import QrcodePageStructure from '../component/user_component/qrcodepageStructure'
import UserBgIcon from '../icons/UserBgIcon'
import UserIconOutline from '../icons/userIconOutline'
import UserIconHeadMenu from '../icons/userIconHeadMenu'
import CloseMenuIcon from '../icons/closeMenuIcon'
import MenuSquare from '../icons/menuSquare'
import FriendsIcon from '../icons/friendsIcon'

export default  function UserScreen() {
  const [qrCodeToggle, setQrCodeToggle] = useState(false)
  const [eventToggle, setEventToggle] = useState(true)
  const [userFetchedData, setUserData] = useState<any>(null)
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [menutoggle, setMenuToggle] = useState(false)

  const [userSetting, setUserSetting] = useState(false)

  const handleQrCodeToggle =  () => {
    setEventToggle(false)
    setQrCodeToggle(true)
  }

  const handleEventToggle =  () => {
    setEventToggle(true)
    setQrCodeToggle(false)


  }

  const handleSettingClick = () => {
    setUserSetting(!userSetting)

  }

  const handleMenuToggle = () => {
    setMenuToggle(!menutoggle)
  }


  useEffect(() =>{

    const callUserData = async() => {
      const userData = await getUserData()

      setUserData(userData)
        
    }

    callUserData()

  }, [])

 


  return (
    <View style={styles.container}> 
        <View style={{
          height: "100%",
          backgroundColor: "black"

        }}>
          
          {/* Head Section Gif Background */}
            <View style={{
              height:"22%", 
              
              backgroundColor: "black",
              position: "relative"
            }}>
              <View style={{
                // marginTop: 50
              }}>
               <Image
            style ={{width: "100%", height:"100%", opacity: 0.7}}
            source={{ uri : `${ userFetchedData?.picture.gifUrl}`}}
          />

              </View>
              <View style={{
                // backgroundColor: "green", 
                 marginTop: 40,
                 width: "100%",
                 height: "20%", 
                 display: "flex", 
                 flexDirection: "row",
                 alignItems: "center",
                 justifyContent: "flex-end",
                 paddingRight: "2%", 
                 position: "absolute"

                 
              }}>
                <TouchableOpacity style={{
                  // backgroundColor: "pink",
                  width: "10%", 
                  height: "100%", 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center"
                }}
                onPress={() => navigation.goBack()}
                
                >
                <Text style={{
                fontSize: 20, 
                fontWeight: "bold", 
                color: "red"
              }}>X</Text>

                </TouchableOpacity>
               
               
              </View>
            </View>


            {/* ProfileImage and selectable option */}
            <View style={{
               height:"23%", 
              // backgroundColor: "green"
            }}>
              {/* Profile Area  */}
              <View style={{
              height:"70%", 
              backgroundColor: "black", 
              position: "relative", 
              display: "flex",
              alignItems:"center",
              justifyContent: "center"
              }}>

                <View style={{
                  // backgroundColor: "yellow", 
                  height: "30%", 
                  width: "80%", 
                  marginTop: "15%", 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems:"center", 
                  opacity: 0.8
                }}>
                  
                    <Text style={{
                      textAlign: "center", 
                      color: "white", 
                      fontSize: 20
                    }}>
                    {userFetchedData?.userName}
                    </Text>
                 
                 
                
                </View>

              <View style={{
                // backgroundColor: "green",
                width: "30%", 
                height: "85%",
                borderRadius: 100, 
                position: "absolute", 
                top: "-40%",
                // left: "35%", 
                zIndex: 3

              }}>
                
                <Image
                  source={require("../assets/7.jpg")}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 100,
                    // marginLeft: 20,
                    // position: "relative",
                    // top: isOpen === item.eventId ? "-30%" : "-30%",
                    marginTop: 1,
                  }}
                />
                

              </View>

              </View>

              {/* option Area */}
              <View style={{
                 height:"30%", 
                 width:"100%",
              // backgroundColor: "pink", 
              // borderTopWidth: 1, 
              // borderTopColor: "rgba(176,176,176,0.5)", 
              display: "flex", 
              flexDirection:"row",
              justifyContent: !menutoggle ?"space-between":  "flex-start",
              alignItems:"center",
              gap: menutoggle ? 15 : 0,
              // borderBottomWidth: 1, 
                  // borderBottomColor: "rgba(176,176,176,0.5)",

              }}>

                <TouchableOpacity style={{
                  // backgroundColor: "grey", 
                  width: "13%", 
                  height: "75%",
                  borderTopRightRadius: 50,
                  borderBottomRightRadius: 50,
                  borderWidth: 1,
                  borderColor: "white",
                  borderLeftColor: "black",
                  borderRightColor: "white", 
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center"



                }}

                onPress={handleMenuToggle}
                >
                <MenuSquare height='20' width='20' />

                </TouchableOpacity>


                <View style={{
                  backgroundColor: "black", 
                  width: "43%", 
                  height: "75%", 
                  borderRadius: 50, 
                  display:  menutoggle ? "none" : "flex", 
                  justifyContent: "center", 
                  alignItems: "center",
                  borderWidth: 1, 
                  borderColor:"white"
                  


                }}>
                  <Text style={{
                    color:"white"
                  }}>Profile</Text>
                </View>
               

               {menutoggle ? (
                 <View style={{
                  height: "75%", 
                  width:"87%",
                  // backgroundColor: "green", 
                  // justifyContent:"center", 
                  // borderRadius: 50,
                  // borderColor: "white", 
                  display: "flex",
                  flexDirection: "row",
                  alignItems:"center",
                                    justifyContent:"space-around", 

                  borderWidth: 1,
                  borderTopLeftRadius: 50, 
                  borderBottomLeftRadius: 50, 
                  borderBottomColor: "white",
                  borderTopColor: "white",
                  borderLeftColor: "white"
                  // borderLeftWidth: 1, 
                  // borderLeftColor:"rgba(176,176,176,0.5)",
                  
                }}

                >

               
               <View>
                <UserScanIcon height='23' width='23'/>


               </View>
               <View>
               
               <FriendsIcon height='21' width='21'/>

               </View>
               <View>
               
               <SettingIcon height='21' width='21'/>

               </View>
               
               


              
                {/* <UserScanIcon height='22' width='22'/> */}

                </View> 

                
               ): (
                  <View style={{
                  //  backgroundColor: "grey", 
                   width: "13%", 
                   height: "75%", 
                   
                   borderTopLeftRadius: 50,
                   borderBottomLeftRadius: 50,
                   borderWidth: 1,
                   borderLeftColor: "white",
                   borderTopColor: "white",
                   borderBottomColor: "white",

                       //  borderColor: "white",
                  //  borderRightColor: "pink",
                   display: "flex", 
                   justifyContent: "center", 
                   alignItems: "center"
                }}>

              <SettingIcon height='20' width='20'/>


                </View>
               )}
               
                {/* <View style={{
                  //  backgroundColor: "grey", 
                   width: "13%", 
                   height: "80%", 
                   borderTopLeftRadius: 50,
                   borderBottomLeftRadius: 50,
                   borderWidth: 1,
                   borderLeftColor: "white",
                   borderTopColor: "white",
                   borderBottomColor: "white",

                       //  borderColor: "white",
                  //  borderRightColor: "pink",
                   display: "flex", 
                   justifyContent: "center", 
                   alignItems: "center"
                }}>

                  <UserScanIcon height='22' width='22'/>

                </View> */}
                
              </View>
              
              </View>

              {/* Selected Option Section Area */}
            <View style={{
              height:"55%", 
              // backgroundColor: "pink", 
              padding:"1%",
              position: "relative", 

            }}>

              {/* <TouchableOpacity style={{
                // backgroundColor: "yellow",
                position: "absolute", 
                width: "15%", 
                height: "15%", 
                top: "85%",
                left: "-1%", 
                zIndex: 3, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                opacity: 0.7

              }}
              onPress={handleSettingClick}
              > 
                 <SettingIcon height='25' width='25'/>


              </TouchableOpacity> */}


              { userSetting && (
                <View style={{
                  // backgroundColor: "yellow",
                  position: "absolute", 
                  width: "70%", 
                  height: "15%", 
                  top: "81%",
                  left: "16.5%",
                  display:"flex", 
                  flexDirection: "row",
                  alignItems: "center", 
                  gap: 1,

                  justifyContent: "space-around"

              }}>

               
                <View style={{
                  width: "40%",
                  height: "100%", 
                  backgroundColor: "black",
                  display:"flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  gap: 3, 
                  borderWidth: 1, 
                  borderColor: "white", 
                  borderRadius: 7
                }}>
                   <View>
                  <UserBgIcon height='25' width='25'/> 

                </View>
                <View>
                <Text style={{
                  color: "white", 
                  fontSize:8
                }}>Background Image </Text>
                </View>
                </View>
                <View style={{
                   width: "40%",
                   height: "100%", 
                   backgroundColor: "black",
                   display:"flex", 
                   alignItems: "center", 
                   justifyContent: "center",
                   gap: 2, 
                   borderWidth: 1, 
                   borderColor: "white", 
                   borderRadius: 7
                }}>
                    <View>
                  <UserIconOutline height='25' width='25'/> 

                </View>

                <View>
                <Text style={{
                  color: "white", 
                  fontSize:8
                }}>Profile Image </Text>
                </View>
                
                </View>
               

              </View>
              )}

             


            

             {/* {
              eventToggle
              ? 
              <View style={{
                // backgroundColor:"green", 
                width: "100%", 
                height: "100%"

              }}><Text>3</Text></View>
             */}
            
              
              {/* :  */}
              <View style={{
                // backgroundColor:"skyblue", 
                width: "100%", 
                height: "100%", 
                display:"flex", 
                // justifyContent: "center",
                // marginTop: "9%", 
                alignItems: "center", 
                position: "relative"

              }}>
                <View style={{
                  height: "80%", 
                  width:"100%",
                  display:"flex", 
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                  <QrcodePageStructure userData={userFetchedData}/>
                </View> 
                 {/* <QrCodePlaceholder height='255' width='255'/> */}

                 

              </View>
             {/* } */}

            
            </View>

        </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: "black",
      // background: "transparent"
      // flex: 1,
      height: "100%",
    //   justifyContent: "center",
      // paddingTop: 50,

    },
 
 

})
