import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import ArrowIcon from "../icons/arrowIcon";
import SettingIcon from "../icons/settingIcon";

export default function SettingScreen() {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const [aboutState, setAboutState] = useState(false)
    const [defaultState, setDefaulState] = useState(true)


    const handleWorthsecInfotoggle = () =>  {
        setDefaulState(!defaultState)
        setAboutState(!aboutState)
    
    }   

    const handlesetting = () => {
        setAboutState(false)

        setDefaulState(true)
    }

  return (
    <View style={styles.container}>
        {/* Header */}
      <View style={{
        height: 50, 
        // backgroundColor: "pink",
        display: "flex",
        // justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
      }}>
        <TouchableOpacity
        style={{
            position: "absolute",
            top: "10%",
            left: "3%",
            zIndex: 3,
            width: "10%",
            height: 40,
            // backgroundColor: "green",
            alignItems: "center",
            justifyContent: "center"
        }}
        onPress={() => navigation.goBack()}
        >
            {/* <Image
          source={require("../assets/arr1.png")}
          style={{height: 25, width: 25,}}
          /> */}
          <ArrowIcon width={"25"} height={"25"}/>

        </TouchableOpacity>
        <View
        style={{
            width: "100%",
            height: 50,
            // backgroundColor: "blue",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 20
        }}
        >      

        <TouchableOpacity style={{
            backgroundColor: "rgba(68,68,68,1)",
            height: 40.,
            width: 40,
            borderRadius: 50,
            alignItems: "center", 
            justifyContent: "center",
            opacity: 0.8
        }}
        onPress={() =>handlesetting()}
        >
            
          <SettingIcon width={"25"} height={"25"} />
        </TouchableOpacity>      
           
        </View>

      </View>

        {/* Content */}
      <View style={{
        // backgroundColor: "pink", 
        height: 600,
        // alignItems: "center",
        // gap: 60
      }}>


        {aboutState && (
            <View
            style={{
                backgroundColor: "pink", 
       
            justifyContent: "center",
            alignItems: "center",
            gap: 60
            }}
            >
             <View><Text>Pic</Text></View>
             <View><Text>content</Text></View>
            </View>
        )}
        {defaultState && (
            <View style={{
            // backgroundColor: "pink", 
            height: 600,
            justifyContent: "center",
            alignItems: "center",
            gap: 60
            }}>
            <TouchableOpacity style={{
            // backgroundColor: "rgba(141,141,141,1)",
            height: 40,
            width: "70%",
            borderRadius: 30,
            alignItems: "center", 
            justifyContent: "center",
             borderWidth: 1,
            borderColor: "rgba(141,141,141,1)"

        }}
        onPress={() => handleWorthsecInfotoggle()}
        >
            <View style={{
                position: "absolute", 
                zIndex: 3,
                top: "15%",
                left: "6.5%"
            }}>
                <Image
                source={require("../assets/kl1.png")}
                style={{height: 25, width: 25,}}
                />
            </View>
            <View>
                <Text style={{color: "white", fontSize: 20}}>About Worthsec</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity
        style={{
            // backgroundColor: "rgba(141,141,141,1)",
            height: 40,
            width: "70%",
            borderRadius: 30,
            alignItems: "center", 
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "rgba(141,141,141,1)"

        }}
        >
            <View style={{
                position: "absolute", 
                zIndex: 3,
                top: "19%",
                left: "6%"
            }}>
                <Image
                source={require("../assets/go1.png")}
                style={{height: 25, width: 25,}}
                />
         </View>
            <View>
            <Text style={{color: "white", fontSize: 20}}>Log Out</Text>

            </View>
               
        </TouchableOpacity>
            
            </View>
        )}

       
        
      </View>

    
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: "rgba(35, 32, 32, 0.99)",
      flex: 1,
    //   justifyContent: "center",
      paddingTop: 50,

    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
      },
 

})