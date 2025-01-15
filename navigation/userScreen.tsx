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
import QrcodePageStructure from '../component/user_component/qrCode/qrcodepageStructure'
import UserBgIcon from '../icons/UserBgIcon'
import UserIconOutline from '../icons/userIconOutline'
import UserIconHeadMenu from '../icons/userIconHeadMenu'
import CloseMenuIcon from '../icons/closeMenuIcon'
import MenuSquare from '../icons/menuSquare'
import FriendsIcon from '../icons/friendsIcon'
import FriendsPageStructure from '../component/user_component/friends/friendspageStructure'
import SettingPageStructure from '../component/user_component/setting/settingpageStructure'
import WelcomePageStructure from '../component/user_component/Welcome/welcomepageStructure'
import UserOutline from '../icons/userOutLine'



export default  function UserScreen() {
  const [qrCodeToggle, setQrCodeToggle] = useState(false)
  const [eventToggle, setEventToggle] = useState(true)
  const [userFetchedData, setUserData] = useState<any>(null)
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [menutoggle, setMenuToggle] = useState(false)
  const [friendsToggle,setFriendsToggle] = useState(false)
  const [settingToggle, setSettingToggle] = useState(false)
  const [title, setTitle] = useState("Welcome")
  const [welcomeToggle, setWelcomeToggle] = useState(true)

  // const [userSetting, setUserSetting] = useState(false)

  const handleQrCodeToggle =  () => {
    setEventToggle(false)
    setFriendsToggle(false)
    setSettingToggle(false)
    setQrCodeToggle(true)
    setMenuToggle(false)
    setWelcomeToggle(false)
    setTitle("QR Code")

  }

  const handleEventToggle =  () => {
    setEventToggle(true)
    setQrCodeToggle(false)



  }

  const handleSettingClick = () => {
    
    setEventToggle(false)
    setFriendsToggle(false)
    setSettingToggle(false)
    setQrCodeToggle(false)
    setSettingToggle(true)
    setMenuToggle(false)
    setWelcomeToggle(false)

    setTitle("Setting")

  }

  const handleFriendsToggle =  () => {

    setEventToggle(false)
    setSettingToggle(false)
    setQrCodeToggle(false)
    setSettingToggle(false)
    setFriendsToggle(true)
    setMenuToggle(false)
    setWelcomeToggle(false)

    setTitle("Friends")
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
                  backgroundColor: "rgba(199,199,199,0.2)", 
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
                  alignItems: "center",
                  opacity: 0.8



                }}

                onPress={handleMenuToggle}
                >
                <MenuSquare height='20' width='20' />

                </TouchableOpacity>


                <View style={{
                   backgroundColor: "rgba(199,199,199,0.2)", 
                  width: "43%", 
                  height: "75%", 
                  borderRadius: 50, 
                  display:  menutoggle ? "none" : "flex", 
                  justifyContent: "center", 
                  alignItems: "center",
                  borderWidth: 1, 
                  borderColor:"white",
                  opacity: 0.8

                  


                }}>
                  <Text style={{
                    color:"white"
                  }}>{title}</Text>
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
                  backgroundColor: "rgba(199,199,199,0.2)", 

                  borderWidth: 1,
                  borderTopLeftRadius: 50, 
                  borderBottomLeftRadius: 50, 
                  borderBottomColor: "white",
                  borderTopColor: "white",
                  borderLeftColor: "white",
                  opacity: 0.8


                  // borderLeftWidth: 1, 
                  // borderLeftColor:"rgba(176,176,176,0.5)",
                  
                }}

                >

               
               <TouchableOpacity
               
               onPress={handleQrCodeToggle}
               >
                <UserScanIcon height='23' width='23'/>


               </TouchableOpacity>
               <TouchableOpacity
                onPress={handleFriendsToggle}
               >
               
               <FriendsIcon height='21' width='21'/>

               </TouchableOpacity>
               <TouchableOpacity
                onPress={handleSettingClick}
               >
               
               <SettingIcon height='21' width='21'/>

               </TouchableOpacity>
               
               


              
                {/* <UserScanIcon height='22' width='22'/> */}

                </View> 

                
               ): (
                  <View style={{
                  //  backgroundColor: "grey", 
                   width: "13%", 
                   height: "75%", 
                   backgroundColor: "rgba(199,199,199,0.2)", 

                   borderTopLeftRadius: 50,
                   borderBottomLeftRadius: 50,
                   borderWidth: 1,
                   borderLeftColor: "white",
                   borderTopColor: "white",
                   borderBottomColor: "white",
                   opacity: 0.8,

                       //  borderColor: "white",
                  //  borderRightColor: "pink",
                   display: "flex", 
                   justifyContent: "center", 
                   alignItems: "center"
                }}>
                  { qrCodeToggle ?  <UserScanIcon height='20' width='20'/> :

                    friendsToggle ? <FriendsIcon height='20' width='20'/> : 

                    settingToggle ? <SettingIcon height='20' width='20'/> : 
                    welcomeToggle && 
                    <View style={{
                      width: "100%", 
                      height: "100%",
                      display: "flex", 
                      justifyContent: "center", 
                      alignItems: "center", 
                      // backgroundColor:"blue",
                      position: "relative"
                    }}>
                      <View style={{
                        backgroundColor:"#17ff00",
                        width: "20%",
                        height: "20%", 
                        position: "absolute", 
                        left: "60%",
                        top: "60%", 
                        borderRadius: 50, 
                        zIndex: 3

                      }}></View>
                     <UserOutline  height='20' width='20'/> 

                    </View>
                  }

              


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



              { settingToggle ?
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
               

                </View>:
                friendsToggle ? <FriendsPageStructure/> :
                qrCodeToggle ? <QrcodePageStructure userData={userFetchedData}/>: 
                welcomeToggle && <WelcomePageStructure data={userFetchedData?.userName}/>
                


              }

             


            

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
