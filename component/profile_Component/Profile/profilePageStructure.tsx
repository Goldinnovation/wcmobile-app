import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import SettingIcon from '../../../icons/settingIcon';
import FavorIcon from '../../../icons/favorIcon';
import { useDispatch } from 'react-redux';
import { profileLayoutUpdatePageAction } from '../../../store/Actions/ProfileUpdateAction';
import HearthFrequenz from '../../../icons/hearthFrequenz';
import SupportIcon from '../../../icons/supportIcon';


export default function ProfilePageStructure(){
    const dispatchProfilePageState = useDispatch()

    const handleProfileUpdate = (e: string) => {
        dispatchProfilePageState(profileLayoutUpdatePageAction(e))
    }

  return (
    <View style={styles.container}>
        <View style={{
            // backgroundColor: "orange",
            flex: 1,
            padding: 6,
            gap: 10,
        }}>

        <View style={{
            position: "absolute",
            top: "40%",
            zIndex:3,
            left: "38%"

        }}>
        <Image
          source={require("../../../assets/7.jpg")}
          style={{
            width: 100,
            height: 105,
            borderRadius: 100,
            // marginLeft: 20,
            // position: "relative",
            // top: isOpen === item.eventId ? "-30%" : "-30%",
            marginTop: 1,
          }}
        />
        </View>
         <View style={{
            // backgroundColor:"blue",
            height: 290,
            flexDirection: "row",
            alignItems: "flex-end",
            gap: 10,
            justifyContent: "center",

            
         }}>
            <View style={{
                height: 150,
                backgroundColor:"#ac0d11",
                width: "45%",
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.6,
                gap: 5
            }}> 
             <TouchableOpacity
                
                onPress={() => handleProfileUpdate("Favor")}
                >
                <HearthFrequenz width={'61'} height={'61'} lineColor={"white"}/>
            	
                </TouchableOpacity>
                <Text style={{
                    color: "white"
                }}>Feedback</Text>
            </View>
            <View  style={{
                height: 150,
                width: "45%",
                backgroundColor:"#199229",
                borderRadius: 7,
                 alignItems: "center",
                justifyContent: "center",
                opacity: 0.6,
                gap: 5
            }}>
                <SupportIcon width={'51'} height={'61'} />

                <Text style={{
                    color: "white"
                }}>Support</Text>
            </View>
            

         </View>
         <View style={{
            // backgroundColor:"red",
            height: 300,
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 10,
            justifyContent: "center",
            borderRadius: 7
         }}>
             <View style={{
                height: 150,
                backgroundColor:"#0a41d2",
                width: "45%",
                borderRadius: 7,
                 alignItems: "center",
                justifyContent: "center",
                opacity: 0.7,
                gap: 5
            }}> 
             <SettingIcon width={'51'} height={'61'} />

             <Text style={{
                    color: "white"
                }}>Support</Text>
            </View>
            <View  style={{
                height: 150,
                width: "45%",
                backgroundColor:"#ffc309",
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.6,
                gap: 5

            

            }}>
                <TouchableOpacity
                
                onPress={() => handleProfileUpdate("Favor")}
                >
                <FavorIcon width={'61'} height={'61'} lineColor={"white"}/>

                </TouchableOpacity>
                <Text style={{
                    color: "white"
                }}>Support</Text>
            </View>
         </View>



        </View>
      
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: "pink",
    //   marginBottom: 20
    },
  
   
  });
  