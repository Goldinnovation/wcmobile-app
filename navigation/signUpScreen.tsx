

import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useState } from 'react';

const SignUpScreen = () => {
      const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
       const [email, setonChangeEmail] = useState("");
        const [password, setonChangePassword] = useState("");
    
  return (
    <View style={{
        height: "100%",
        // flex: 1,
        backgroundColor: "green",
        paddingTop: 40,
    }}>

        <LinearGradient
        colors={['black','grey', '#000059', "black"]}
        style={styles.gradient}
        start={{ x: 0, y: 1}}
        end={{ x: 0, y: 0 }}
        >

        <View
                        style={{
                        height: "5%",
                        width: "100%",
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
                            width: "15%",
                            // backgroundColor: "orange",
                            display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row"
                        }}
                        // onPress={handleQCloseEvent}
                        onPress={() => navigation.goBack()}
    
                        >
                        <Text style={{
                        color: "red", 
                        fontSize: 23, 
                        fontWeight: "bold"
                        
                        }}>X</Text>
                        </TouchableOpacity>
                        
        </View>

        <View style={{
                //  backgroundColor: "green",
        
                 width: scale(350), //"100%"
                 height: verticalScale(500),
                 justifyContent: "center",
              }}>
              
                <View style={ {
                //   backgroundColor: "pink",
                  height: verticalScale(350),
                   gap: 20,
                   paddingTop: 0,
                   marginTop: 100,
                   alignItems: "center",
                   display: "flex", 
                   flexDirection: "column",
                   justifyContent: "center"
        
                }}>
                   <View style={{
                    // backgroundColor: "green",
                  }}> 
                    {/* // <Text style={{
                    //   fontWeight: "bold",
                    //   fontSize: 27,
                    //   textAlign: "center",
                    //   color: "white",
                    // }}>Worthsec</Text> */}
{/*                  
                  <Image
                          source={require("../assets/emsfw.png")}
                          style={{
                            width: scale(280),
                            height: verticalScale(65),
                            // borderRadius: 100,
                          }}
                  /> */}
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 38,
                      textAlign: "center",
                      color: "white",
        
                    }}
                  >
                    Sign up
                  </Text>
                   </View> 
                  <View style={{
                    // backgroundColor: "orange",
                    marginTop: "2%"
                  }}>
                  <Text
                    style={{
                      fontWeight: "300",
                      fontSize: 18,
                      textAlign: "center",
                      color: "white",
        
                    }}
                  >
                    Create your Account
                  </Text>
        
                  </View>
                 
                 
                  <TextInput
                    style={{
                        height: 40,

                        borderWidth: 1,
                        padding: 5,
                        // margin: 30,
                        width: "80%",
                        backgroundColor: "#c7c7c7",
                        borderRadius: 7,
                        marginTop: 20,
                    }}
                    onChangeText={setonChangeEmail}
                    value={email}
                    placeholder="Username"
                    placeholderTextColor="#000" 
                  />
                   <TextInput
                    style={{
                        height: 40,

                        borderWidth: 1,
                        padding: 5,
                        // margin: 30,
                        width: "80%",
                        backgroundColor: "#c7c7c7",
                        borderRadius: 7,
                        // marginTop: 20,
                    }}
                    onChangeText={setonChangeEmail}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor="#000" 
                  />
                  <TextInput
                    style={{
                        height: 40,
                        borderWidth: 1,
                        padding: 5,
                        width: "80%",
                        // margin: 30,
                        backgroundColor: "#c7c7c7",
                        borderRadius: 7,
                    }}
                    onChangeText={setonChangePassword}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#000" 
                  />
                   <TextInput
                    style={{
                        height: 40,
                        borderWidth: 1,
                        padding: 5,
                        width: "80%",
                        // margin: 30,
                        backgroundColor: "#c7c7c7",
                        borderRadius: 7,
                    }}
                    onChangeText={setonChangePassword}
                    value={password}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    placeholderTextColor="#000" 
                  />
                  {/*  */}
                </View>
                <View style={{
                   // backgroundColor: "orange",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 90,
                }}>
                  <TouchableOpacity style={{
                    backgroundColor: "grey",
                    height: 40,
                    width: "60%",
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center",
                  }} >
                    <Text style={{
                        color: "white"
                    }}>Sign up</Text>
                  </TouchableOpacity>
                </View>
        
                <View style={{
                    //  justifyContent: "center",
                    //  alignItems: "center",
                     height: 100,
                    //  backgroundColor: "grey",
                     display: "flex", 
                     flexDirection: "row", 
                     alignItems: "center",
                     justifyContent: "center",
                     gap: 5
                }}>
                    <View style={{
                        //  backgroundColor: "pink",
                    }}>
                    <Text style={{
                         color: "white",
                        //  textDecorationLine: "underline",
                    }}>Already have an account?</Text>
                    </View>
                  <TouchableOpacity style={{
                    //   backgroundColor: "green",
                  }}
                  
                  onPress={() => navigation.goBack()}
                  >
                    <Text style={{
                         color: "rgba(179,179,179,1)",
                        //  textDecorationLine: "underline",
                    }}> Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
        </LinearGradient>
        
      
    </View>
  )
}

const styles = StyleSheet.create({

    gradient: {
        ...StyleSheet.absoluteFillObject,
        paddingTop: 50,
      },
})



export default SignUpScreen
