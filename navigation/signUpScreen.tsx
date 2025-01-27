

import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { userSignUp } from '../api/signUpScreen_Api/userSignUp';
import { BlurView } from 'expo-blur';

const SignUpScreen = () => {
      const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
      const [email, setonChangeEmail] = useState("");
      const [password, setonChangePassword] = useState("")
      const [username, setUserName] = useState("")
      const [repeatedPassword, setRepeatedPassword] = useState("")
      const [flashback, setFlashback] = useState("")
      const [flashbackMessage, setFlashbackMessage] = useState("")
      const [approvalMessage, setApprovalMessage] = useState(false)






      const hanldeSubmit = async() => { 
        
        console.log("data is send");

        const signUpState = await userSignUp(username, email, password)
        const message = signUpState
        

         console.log('message', message);
    

        if(message ===  "new user created"){
          
          console.log('in new user');
          setApprovalMessage(true)
          setTimeout(() => {
            
            setApprovalMessage(false)
            navigation.goBack()
          },1000)
        }else if(message === "User already Exist"){

             console.log('init exist');
          setFlashback("userExist")
          setFlashbackMessage("UserName already Exist")
        } 
         


        }

      const handlePasswordInput = () => {
        
        if(password !== "" && password === repeatedPassword){
          setFlashback("")
          hanldeSubmit()

       }else{
            setFlashback("password")
            setFlashbackMessage("Password don't match")
       }

      }

      const handleEmailInput = () => {
        if(email !== "" 
          // && email.includes("@")
        ){
          handlePasswordInput()
        }else{
          setFlashback("email")
          setFlashbackMessage("Invalid Email field")
        }


      }


      const handleEmailUsernameInputCheck = () => {


        if(username !== ""){
          handleEmailInput()
        }else{
          setFlashback("username")
          setFlashbackMessage("Please fill out the Username field")

        }



      }

      const handleInputData= () => {
        handleEmailUsernameInputCheck()
      
      }



     
  return (
    <View style={{
        height: "100%",
        // flex: 1,
        backgroundColor: "green",
        paddingTop: 40,
        borderTopWidth: 1, 
        borderColor: "rgba(179,179,179,1)",
        borderRadius: 11
    }}>

        <LinearGradient
        colors={['black','grey', '#000059', "black"]}
        style={styles.gradient}
        start={{ x: 0, y: 1}}
        end={{ x: 0, y: 0 }}
        >

          {/* Close btn */}

        
          
          
        <View style={{
                //  backgroundColor: "green",
        
                 width: wp("100%"), //"100%"
                 height: hp("100%"),
                //  justifyContent: "center",
                // paddingTop: hp("5%"),
              }}>
                {/* close btn */}
                <View
                        style={{
                        height:  hp("4.5%"),
                        // height: verticalScale(50),
                        width: wp("100%"),
                        // width: scale(350),
                        // marginTop: verticalScale(40),
                        // backgroundColor: "skyblue",
                        // position: "absolute",
                        // top: "1%",
                        // left: "80%",
                        // zIndex: 3,
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "row", 
                        alignItems: "center",

                        }}
                    >
                        <TouchableOpacity style={{
                            height: hp("1%"),
                            width: wp("30%"),
                            backgroundColor: "grey",
                            display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        borderRadius: 50,
                        }}
                        // onPress={handleQCloseEvent}
                        // onPress={() => navigation.goBack()}
    
                        >
                        <View>

                        </View>
                        </TouchableOpacity>
                        
              </View>


              {/* created Accound Pop Up */}

            {
              approvalMessage && (
              <View style={{
                backgroundColor: "rgba(14,14,14,0.71)",
                height: hp("90%"),
                width: wp("100%"),
                justifyContent: "center",
                alignItems: "center",
                position: "absolute", 
                top: "5%",
                left: "0%",
                  
                  zIndex: 5
              }}>
              <BlurView intensity={100} style={{
                  // flex: 1,
                  height: hp("15%"),
                  width: wp("90%"),
                  padding: 20,
                  margin: 16,
                  justifyContent: 'center',
                  overflow: 'hidden',
                  borderRadius: 20,
                  // position: "absolute", 
                  // top: "5%",
                  // left: "0%",
     
                  zIndex: 5
                }}>
                <Text style={{color: "white", textAlign: "center"}}>Congratulations!! You have successfully created your Account</Text>

                </BlurView>

              </View>
              
              )  
            }   
               
               
              
                <View style={ {
                  // backgroundColor: "pink",
                  // height: verticalScale(350),
                  height: hp("55%"),
                  width: wp("100%"),
                   gap: hp("3%"),
                  //  paddingTop: 0,
                  //  marginTop: 50,
                   marginTop: hp("2%"),

                   alignItems: "center",
                   display: "flex", 
                   flexDirection: "column",
                   justifyContent: "center", 
                  //  marginBottom: hp("1%")

        
                }}>
                   <View style={{
                    // backgroundColor: "green",
                  }}> 
                
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
                        height: hp("4.5%"),

                        borderWidth: 1,
                        padding: 5,
                        // margin: 30,
                        width: wp("80%"),
                        backgroundColor: "#c7c7c7",
                        borderRadius: 7,
                        marginTop: 20,
                    }}
                    onChangeText={setUserName}
                    value={username}
                    placeholder="Username"
                    placeholderTextColor="#000" 
                  />
                   <TextInput
                    style={{
                        height: hp("4.5%"),

                        borderWidth: 1,
                        padding: 5,
                        // margin: 30,
                        width:  wp("80%"),
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
                        height: hp("4.5%"),
                        borderWidth: 1,
                        padding: 5,
                        width: wp("80%"),
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
                        height: hp("4.5%"),
                        borderWidth: 1,
                        padding: 5,
                        width: wp("80%"),
                        // margin: 30,
                        backgroundColor: "#c7c7c7",
                        borderRadius: 7,
                        // borderColor: flashback === "password" ?  "red" : "none" 
                        marginBottom: hp("1%")

                    }}
                    onChangeText={setRepeatedPassword}
                    value={repeatedPassword}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    placeholderTextColor="#000" 
                  />
                  {/*  */}

               
                  {flashback && (
                      <View>
                        {flashback === "password" ?
                        (
                          <View>
                                  <Text style={{
                                    color: "white"
                                  }}>
                                  {flashbackMessage}
                                  </Text>
                          </View>
                        ): flashback === "username" ?
                        (
                          <View>
                            <Text style={{
                               color: "white"
                          }}>{flashbackMessage}</Text>
                          </View>
                        ):
                        flashback === "userExist" ? 
                         (
                          <View>
                              <Text style={{
                               color: "white"
                          }}>{flashbackMessage}</Text>

                          </View>
                        ): flashback === "email" && 
                        (
                          <View>
                              <Text style={{
                               color: "white"
                          }}>{flashbackMessage}</Text>
                          </View>
                        )

                      }
                     
                    </View>
                  )}

                
                </View>

                <View style={{
                  //  backgroundColor: "orange",
                  justifyContent: "center",
                  alignItems: "center",
                  // height: verticalScale(90),
                  height: hp("9%"),
                  width: wp("100%"),
                  marginTop: hp("1%")
                }}>
                  <TouchableOpacity style={{
                    backgroundColor: "grey",
                    height: hp("5%"),
                    width: wp("60%"),
                    borderRadius: 100,
                    alignItems: "center",
                    justifyContent: "center",
                  }} 
                  onPress={() => handleInputData()}
                  >
                    <Text style={{
                        color: "white"
                    }}>Sign up</Text>
                  </TouchableOpacity>
                </View>
        
                <View style={{
                    //  justifyContent: "center",
                    //  alignItems: "center",
                     height: hp("15%"),
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
        // paddingTop: verticalScale(40),
        flex: 1,
        
      },
})



export default SignUpScreen
