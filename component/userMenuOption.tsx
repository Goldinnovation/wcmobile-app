import { View, Text, StyleSheet, Modal, Button,TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";

export default function UserMenuOptions() {
    const[show, setShow] = useState(false)


    const handletoggle = () => {
     
        setShow(!show)
        
    }

    return(
        <View >
            <TouchableOpacity 
           
            //  onPressIn={handletoggle}
              >
               
                    <Image source={require('../assets/star.png')} 
                    style={{
                        width: 30, 
                        height: 30
                    }}
                
                />
                </TouchableOpacity>
            <Modal
             transparent={true}
             visible={show}
        

             
             >
              
                
            </Modal>
        </View>
    )
}


