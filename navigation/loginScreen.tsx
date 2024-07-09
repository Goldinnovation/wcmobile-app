import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { useState } from "react"
import { Colors } from "react-native/Libraries/NewAppScreen"

export default function LoginScreen() {
    const [email, setonChangeEmail] = useState('') 
    const [password, setonChangePassword] = useState('') 



    return(

        <View style={styles.container}>
                <View style={styles.loginLayer}>
                
                <View style={styles.loginInputLayer}>
                <Text style={{fontWeight: "bold", fontSize: 23, textAlign:"center", color:"white"}}>Login to your Account</Text>

                <TextInput
                style={styles.emailInput}
                onChangeText={setonChangeEmail}
                value={email}
                placeholder="Enter your Email"

                />
                 <TextInput
                style={styles.passwordInput}
                onChangeText={setonChangePassword}
                value={password}
                placeholder="Enter your Password"

                />
                </View>
                <View style={styles.loginBtn_layer} >
                <TouchableOpacity style={styles.loginBtn} >
                <Text>Login</Text>
               </TouchableOpacity>


                </View>
               
                <View style={styles.SignBtn_layer} >

                <TouchableOpacity style={styles.SignUpBtn} >
                <Text style={styles.SignUpBtn_text}>Create a New Account</Text>
               </TouchableOpacity>


                </View>
             
                </View>
        </View>

    )
}



const styles = StyleSheet.create({

    container: {
        // backgroundColor: "pink",
        flex: 1,
        justifyContent: "center"

    }, 
    loginLayer: {
        // backgroundColor: "green",

        width: "100%",
        height: 500,
        // justifyContent: "center"
    


    },
    loginInputLayer: {
        // backgroundColor: "pink", 
        height: 290,
        gap: 30,
        paddingTop: 30 


    },
    emailInput: {
        height: 40,
        
        borderWidth: 1,
        padding: 5,
        margin: 12

    }, 
    passwordInput: {
        height: 40,
        
        borderWidth: 1,
        padding: 5,
        margin: 12
    },
    loginBtn_layer: {
        // backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
    },
    loginBtn: {
        backgroundColor: "grey",
        height: 40,
        width: "60%",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
       
        

    }, 
    SignBtn_layer: {
        // backgroundColor: "purple",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
    }, 
    SignUpBtn: {
        // backgroundColor: "grey",
        height: 40,
        width: "60%",
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
    }, 
    SignUpBtn_text: {
        color: "white", 
        textDecorationLine: "underline"
    }


})