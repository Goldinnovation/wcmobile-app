import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
// import img from "../assets/7.jpg"
import UserScanIcon from '../icons/userScanIcon'
import FireIcon from '../icons/fireIcon'
import SettingIcon from '../icons/settingIcon'
import QrCodePlaceholder from '../icons/qrCodePlaceHolder'
import UserIcon from '../icons/userIcon'
import CameraIcon from '../icons/cameraIcon'
import AddFriendsIcon from '../icons/addFriendsIcon'
import ArrowIcon from '../icons/arrowIcon'
import PlusIcon from '../icons/plusIcon'

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";

export default  function UserScreen() {
  const [qrCodeToggle, setQrCodeToggle] = useState(false)
  const [eventToggle, setEventToggle] = useState(true)
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();


  const handleQrCodeToggle =  () => {
    setEventToggle(false)
    setQrCodeToggle(true)
  }

  const handleEventToggle =  () => {
    setEventToggle(true)
    setQrCodeToggle(false)


  }
  return (
    <View style={styles.container}> 
        <View style={{
          height: "100%",
          backgroundColor: "black"

        }}>
          {/* Head Section Gif Background */}
            <View style={{
              height:"22%", 
              
              backgroundColor: "orange"
            }}>
              <View style={{
                // backgroundColor: "green", 
                 marginTop: 50,
                 width: "100%",
                 height: "20%", 
                 display: "flex", 
                 flexDirection: "row",
                 alignItems: "center",
                 justifyContent: "flex-end",
                 paddingRight: "2%"
                 
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
                  {
                    eventToggle
                    ?  <Text style={{
                      textAlign: "center", 
                      color: "white"
                    }}>
                    Who looks outside, dreams.
                   
                    who looks inside, awakes.
                    </Text>
                    : 
                    <Text style={{
                      textAlign: "center", 
                      color: "white", 
                      fontSize: 20
                    }}>
                    Caro1
                    </Text>
                    
                  }
                 
                
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
              // backgroundColor: "grey", 
              borderTopWidth: 1, 
              borderTopColor: "rgba(176,176,176,0.5)", 
              display: "flex", 
              flexDirection:"row",
              borderBottomWidth: 1, 
                  borderBottomColor: "rgba(176,176,176,0.5)",

              }}>
                <TouchableOpacity style={{
                  height: "100%", 
                  width:"50%",
                  // backgroundColor: "pink", 
                  justifyContent:"center", 
                  alignItems:"center", 
                  opacity: 0.8
                }}

                onPress={handleEventToggle}
                >
               
                  <PlusIcon height='20' width='20'/>


                </TouchableOpacity>
                <TouchableOpacity style={{
                  height: "100%", 
                  width:"50%",
                  // backgroundColor: "yellow", 
                  justifyContent:"center", 
                  alignItems:"center",
                  borderLeftWidth: 1, 
                  borderLeftColor:"rgba(176,176,176,0.5)",
                  
                }}
                onPress={handleQrCodeToggle}

                >
                {/* <Text style={{
                   color: "white"

                }}>2</Text> */}
                <UserScanIcon height='20' width='20'/>

                </TouchableOpacity>
                
              </View>
              
              </View>

              {/* Selected Option Section Area */}
            <View style={{
              height:"55%", 
              // backgroundColor: "pink", 
              padding:"1%",
              position: "relative", 

            }}>

              <View style={{
                // backgroundColor: "yellow",
                position: "absolute", 
                width: "15%", 
                height: "15%", 
                top: "85%",
                left: "85%", 
                zIndex: 3, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                opacity: 0.7

              }}> 
                 <SettingIcon height='25' width='25'/>


              </View>


            

             {
              eventToggle
              ? 
              <View style={{
                // backgroundColor:"green", 
                width: "100%", 
                height: "100%"

              }}><Text>3</Text></View>
            
            
              
              : 
              <View style={{
                backgroundColor:"skyblue", 
                width: "100%", 
                height: "100%", 
                display:"flex", 
                // justifyContent: "center",
                marginTop: "14%", 
                alignItems: "center", 
                position: "relative"

              }}>
                 <QrCodePlaceholder height='255' width='255'/>

                 

              </View>
             }

            
            </View>

        </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: "pink",
      // flex: 1,
      height: "100%",
    //   justifyContent: "center",
      // paddingTop: 50,

    },
 
 

})
