import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import SettingIcon from '../../../icons/settingIcon';
import FavorIcon from '../../../icons/favorIcon';
import { useDispatch } from 'react-redux';
import { profileLayoutUpdatePageAction } from '../../../store/Actions/ProfileUpdateAction';
import HearthFrequenz from '../../../icons/hearthFrequenz';
import SupportIcon from '../../../icons/supportIcon';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import InboxIcon from '../../../icons/inboxIcon';

export default function ProfilePageStructure(){
    const dispatchProfilePageState = useDispatch()
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();


    const handleProfileUpdate = (e: string) => {
        dispatchProfilePageState(profileLayoutUpdatePageAction(e))
    }


    const handleFeedBackPage = (e: string) => { 
        console.log('feedback');
    }

  return (
    <View style={styles.container}>
        <View style={{
            // backgroundColor: "orange",
            flex: 1,
            padding: 6,
            gap: 10,
        }}>

        <TouchableOpacity style={{
            position: "absolute",
            top: "40%",
            zIndex:3,
            left: "38%"

        }}
        onPress={() => navigation.push("UserScreen")}
        >
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
        </TouchableOpacity>
         <View style={{
            // backgroundColor:"blue",
            height: 290,
            flexDirection: "row",
            alignItems: "flex-end",
            gap: 10,
            justifyContent: "center",

            
         }}>
            <TouchableOpacity style={{
                height: 150,
                backgroundColor:"#ac0d11",
                width: "45%",
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.8,
                gap: 5,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 4,
                shadowRadius: 2,


            }}
            onPress={() => navigation.push("FeedbackScreen")}
            > 

               
                

                    
                
             <View
                
                
                >
                <HearthFrequenz width={'61'} height={'61'} lineColor={"white"}/>
            	
                </View>
                <Text style={{
                    color: "white"
                }}>Feedback</Text>

                
            </TouchableOpacity>
            <TouchableOpacity  style={{
                height: 150,
                width: "45%",
                backgroundColor:"#199229",
                borderRadius: 7,
                 alignItems: "center",
                justifyContent: "center",
                opacity: 0.8,
                gap: 5,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 4,
                shadowRadius: 2,
            }}
            onPress={() => navigation.push("MessageScreen")}
            
            
            >
                <InboxIcon width={'51'} height={'61'} />

                <Text style={{
                    color: "white"
                }}>Message</Text>
            </TouchableOpacity>
            

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
             <TouchableOpacity style={{
                height: 150,
                backgroundColor:"#0a41d2",
                width: "45%",
                borderRadius: 7,
                 alignItems: "center",
                justifyContent: "center",
                opacity: 0.8,
                gap: 5,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 4,
                shadowRadius: 2,

            }}
            onPress={() => navigation.push("settingScreen")}
            > 
             <SettingIcon width={'51'} height={'61'} />

             <Text style={{
                    color: "white"
                }}>Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{
                height: 150,
                width: "45%",
                backgroundColor:"#ffc309",
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.8,
                gap: 5,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 4,
                shadowRadius: 2,

            

            }}
            onPress={() => navigation.push("FavorScreen")}
            >
                <TouchableOpacity
                  
                >
                <FavorIcon width={'61'} height={'61'} lineColor={"white"}/>

                </TouchableOpacity>
                <Text style={{
                    color: "white"
                }}>Favor</Text>
            </TouchableOpacity>
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
    gradient: {
        ...StyleSheet.absoluteFillObject,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
        // opacity: 0.9,
        gap: 5
      },
  
   
  });
  