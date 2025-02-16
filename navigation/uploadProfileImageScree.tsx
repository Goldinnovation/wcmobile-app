


import { View, Text, TouchableOpacity, Image } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import UploadProfilePicIcon from "../icons/uploadProfilePicIcon";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { BlurView } from 'expo-blur';
import { uploadProfileImageAPi } from "../api/userFirstLoginSteps/uploadProfileImage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from 'expo-file-system';
import * as ImageManipulator from 'expo-image-manipulator';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';

const UploadProfileImageScreen = () => {
    const [imageUri, setImageUri] = useState<string | null>(null)
    const [flashMessage, setFlatMessage] = useState(false)
    const [imageObj, setImageObj] = useState({}) as any
    const navigation = useNavigation()
    

     


      const wrapFileInToFormdata = async(imageFile: any) => { 
        try{

         
            const formData = new FormData();

            const storedToken = await AsyncStorage.getItem("token");
            const token = storedToken ? JSON.parse(storedToken).token : null;
            const userToken = token.token;

            const imageUrl = imageFile.assets[0].uri
            const imageName = imageFile.assets[0].uri.split('/').pop();
            const imagemimetype = imageFile.assets[0].mimeType


            formData.append('image',{
                uri: imageUrl,
                name: imageName,
                type: imagemimetype
            } as any )
            
   
            formData.append('token',  userToken)


        
        return formData

        }catch(error){
            console.error('Error on resizing Image, function: convertImageToBase64 ', error);
        }
   




      }
    //   Handles the image submittion
      const handleSubmit = async() => {
        console.log('init');
        const imageFile = imageObj
        const encodedFormImageData = await wrapFileInToFormdata(imageFile)
        if(encodedFormImageData){ 
            const imageRes = await uploadProfileImageAPi(encodedFormImageData)
            console.log('image respond from api uploadProfileImageAPi', imageRes );
            imageRes.message == "Image was successfully stored" ? 
            navigation.navigate('BackgroundScreen' as never) : 
            alert("Please repeat your upload, issue accured")

        }
        
      }




    //   Handels the image upload - user can view the image on the page
      const handleImageUpload = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            
          });

      

        
        if (!result.canceled) {
        setImageUri(result.assets[0].uri);
        setImageObj(result)
        setFlatMessage(true)
        setInterval(() => {
            setFlatMessage(false)
        }, 900)

        }


        

      }






  return (
    <View style={{
          backgroundColor: "black",
    flex: 1,
    
    }}>

        <View style={{

            // backgroundColor: "green",
            width: wp("100%"), 
            height: hp("100%"),
            // justifyContent: "center",
            // alignItems: "center",
            paddingTop: 40,
            // marginLeft: 2, 
            // paddingRight: 2
        }}>

            {/* Head */}
              <View style={{
                    // backgroundColor: "green",
                // width: wp("95%"),
                height: hp("10%"),
                // justifyContent: "center",
                // alignItems: "center",
                // marginTop: 70,
                // height: 80,
                display: "flex", 
                flexDirection: "row", 
                // justifyContent: "space-around",
                alignItems: "center",
                marginTop: 20,
                // padding: 5,
                // marginLeft: 2,
                // borderBottomWidth: 1, 
                // borderBottomColor: "white"
        }}>
                    <View style={{
                        // backgroundColor: "pink",
                        width: wp("20%"),
                        height: "100%", 
                        alignItems: "center",
                        justifyContent: "center",

                        // borderRadius: 50

                    }}>

                    <View style={{
                                    backgroundColor: "rgba(24,116,205, 0.7)",
                                    width: wp("20%"),
                                    height: "45%", 
                                    borderRadius: 100, 
                                    borderWidth: 1, 
                                    borderColor:  "rgba(24,116,205, 0.7)", 
                                    alignItems: "center",
                                    justifyContent: "center",


                    }}>
                     <Image
                            source={require("../assets/profileImg/smile.png")}
                            style={{
                            width: 24,
                            height: 24,
                            // width: scale(110),
                            // height: verticalScale(26),
                            // borderRadius: 100,
                            }}
                />
                    
                    
                    </View>
                  


                    </View>


                    {/* Between */}
                     <View style={{
                        // backgroundColor: "green",
                        width: wp("20%"),
                        height: "100%", 
                        justifyContent: "center",
                        alignItems: "center",
                        // borderRadius: 50

                    }}>
                        
                        <View style={{
                        backgroundColor: "rgba(24,116,205, 0.7)",
                        width: wp("20%"),
                        height: "5%", 
                        borderWidth: 1, 
                        borderColor:  "rgba(24,116,205, 0.7)"
                        // borderRadius: 50

                    }}>
                    
                    
                    </View>

                    
                    </View>

                    <View style={{
                        // backgroundColor: "brown",
                        width: wp("20%"),
                        height: "100%", 
                        alignItems: "center",
                        justifyContent: "center",
                        // opacity: 0.7

                        // borderRadius: 50
                    }}>
                         <View style={{
                                    backgroundColor: "rgba(24,116,205, 0.7)",
                                    width: wp("20%"),
                                    height: "45%", 
                                    borderRadius: 100, 
                                    borderWidth: 1, 
                                    borderColor:  "rgba(24,116,205, 0.7)",
                                    alignItems: "center",
                                    justifyContent: "center",

                    }}>
                         <Image
                            source={require("../assets/profileImg/g.png")}
                            style={{
                            width: 25,
                            height: 25,
                            // width: scale(110),
                            // height: verticalScale(26),
                            // borderRadius: 100,
                            }}
                />
                    
                    
                    </View>
                  

                    </View>


                     {/* Between */}
                     <View style={{
                        // backgroundColor: "green",
                        width: wp("20%"),
                        height: "100%", 
                        justifyContent: "center",
                        alignItems: "center",
                        // borderRadius: 50

                    }}>
                          <View style={{
                        // backgroundColor: "white",
                        width: wp("20%"),
                        height: "5%", 
                        borderWidth: 1, 
                        borderColor: "rgba(24,116,205, 0.7)",
                        opacity: 0.7

                        // borderRadius: 50

                    }}>
                    
                    
                    </View>
                    </View>

                    <View style={{
                        // backgroundColor: "skyblue",
                        width: wp("20%"),
                        height: "100%", 
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0.7

                        // borderRadius: 50
                    }}>
                           <View style={{
                                    // backgroundColor: "grey",
                                    width: wp("20%"),
                                    height: "45%", 
                                    borderRadius: 100, 
                                    borderWidth: 1, 
                                    borderColor: "rgba(24,116,205, 0.7)",
                                    alignItems: "center",
                                    justifyContent: "center",


                    }}>
                              <Image
                            source={require("../assets/profileImg/f.png")}
                            style={{
                            width: 24,
                            height: 24,
                            // width: scale(110),
                            // height: verticalScale(26),
                            // borderRadius: 100,
                            }}
                            />
                    
                    
                    </View>
                    </View>
                   
                   

                 </View>


                 {/* Body */}
             <View style={{
                    // backgroundColor: "lightblue",
                // width: wp("95%"),
                height: hp("10%"),
                // justifyContent: "center",
                // alignItems: "center",
                // marginTop: 70,
                // height: 80,
                justifyContent: "center",
                alignItems: "center",
                // marginTop: 70,
                // padding: 5,
                // marginLeft: 2,
                // borderBottomWidth: 1, 
                // borderBottomColor: "white"
        }}>
          <Text style={{
            color: "white",
            fontWeight: "700",
            fontSize: 20,

          }}>Upload a profile picture </Text>

        </View>

        
        <View style={{
                    // backgroundColor: "orange",
                width: wp("100%"),
                height: hp("50%"),
                // justifyContent: "center",
                // alignItems: "center",
                // padding: 5,
                // marginLeft: 2,
                // marginRight: 2
                // gap: 10
        }}>
                <View style={{
                    // backgroundColor: "brown",
                // width: wp("95%"),
                height: hp("39%"),
                // justifyContent: "center",
                // alignItems: "center",
                // marginTop: 70,
                // height: 80,
                display: "flex", 
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                // marginTop: 20,

                // padding: 5,
                // marginLeft: 2,
                // marginRight: 2
                //  borderBottomWidth: 1, 
                // borderBottomColor: "white"
        }}>

            <View style={{
                // backgroundColor: "grey", 
                width: wp("75%"),
                height: hp("35%"),
                justifyContent: "center",
                alignItems: "center",
                borderWidth: imageUri ? 0 : 1, 
                borderColor: "white",
                borderRadius: 7, 
            }}>
            {imageUri ? 
            <Image source={{ uri: imageUri }} style={{
                width: 250,
                height: 250,
                borderRadius: 7 
            }}  /> :
            <UploadProfilePicIcon  width={'163'} height={'165'}  />
            }
            </View>
          

         

                </View>

                <View style={{
                    // backgroundColor: "green",
                // width: wp("95%"),
                height: hp("5%"),
                // justifyContent: "center",
                // alignItems: "center",
                // marginTop: 70,
                // height: 80,
                display: "flex", 
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                marginTop: 20,

                // padding: 5,
                // marginLeft: 2,
                // marginRight: 2
                //  borderBottomWidth: 1, 
                // borderBottomColor: "white"
        }}>

            {/* <View style={{
                // backgroundColor: "grey", 
                width: wp("35%"),
                height: hp("15%"),
                justifyContent: "center",
                alignItems: "center",
                borderWidth: image ? 0 : 1, 
                borderColor: "white",
                borderRadius: 7, 
            }}>
            {image ? 
            <Image source={{ uri: image }} style={{
                width: 130,
                height: 130,
                borderRadius: 7 
            }}  /> :
            <UploadProfilePicIcon  width={'63'} height={'65'}  />
            }
            </View> */}
             <View style={{
                // backgroundColor: "yellow", 
                width: wp("60%"),
                height: hp("10%"),
                justifyContent: "center",
                alignItems: "center",
                gap: 2
                // borderWidth: 1, 
                // borderColor: "white", 
            }}>

               
                
                <TouchableOpacity
                style={{
                    backgroundColor: "rgb(68, 68, 68)",
                    width: "90%",
                    height: 30,
                    borderWidth: 2,
                    borderRadius: 7,
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "rgba(2, 35, 214, 0.2)",
                    
                }}
                onPress={()=> handleImageUpload()}
                >
                <Text
                style={{
                    color: "white"
                }}
                >
                    Upload an Image
                </Text>
            </TouchableOpacity>
            </View>

         

                </View>





                {/* <View style={{
                    // backgroundColor: "lightblue",
                // width: wp("95%"),
                height: hp("10%"),
                // justifyContent: "center",
                // alignItems: "center",
                // marginTop: 70,
                // height: 80,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 40,
                // padding: 5,
                // marginLeft: 2,
                // borderBottomWidth: 1, 
                // borderBottomColor: "white"
        }}>
          <Text style={{
            color: "white",
            fontWeight: "700",
            fontSize: 20,
            textAlign: "center"

          }}>Not Now? Decide for a default profile picture </Text>

                </View> */}

                {/* <View style={{
                    // backgroundColor: "brown",
                width: wp("100%"),
                height: hp("15%"),
                // justifyContent: "center",
                // alignItems: "center",
                // marginTop: 70,
                // height: 80,
                display: "flex", 
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                // padding: 5,
                // marginLeft: 2,
                // marginRight: 2
                //  borderBottomWidth: 1, 
                // borderBottomColor: "white"
        }}>

            <View style={{
                // backgroundColor: "grey", 
                width: wp("33%"),
                height: hp("15%"),
                justifyContent: "center",
                alignItems: "center",
            }}>
                 <View style={{
                    backgroundColor: "green", 
                    borderWidth: 1, 
                    borderColor: "white", 
                    padding: 7,
                    borderRadius: 7, 
                }}>
                
                <Image
                            source={require("../assets/profileImg/8.jpg")}
                            style={{
                            width: 90,
                            height: 100,
                            opacity: 0.8
                            // width: scale(110),
                            // height: verticalScale(26),
                            // borderRadius: 100,
                            }}
                />
                  </View>
            </View>
             <View style={{
                // backgroundColor: "yellow", 
                width: wp("35%"),
                height: hp("15%"),
                justifyContent: "center",
                alignItems: "center",
            }}>
                <View style={{
                    borderWidth: 1, 
                    borderColor: "white", 
                    padding: 7,
                    borderRadius: 7, 
                }}>

               
                  <Image
                            source={require("../assets/profileImg/9.jpg")}
                            style={{
                            width: 90,
                            height: 100,
                            // width: scale(110),
                            // height: verticalScale(26),
                            // borderRadius: 100,
                            }}
                />
                 </View>
            
            </View>

            <View style={{
                // backgroundColor: "green", 
                width: wp("33%"),
                height: hp("15%"),
                justifyContent: "center",
                alignItems: "center",
            }}>
                  <View style={{
                    borderWidth: 1, 
                    borderColor: "white", 
                    padding: 7,
                    borderRadius: 7, 
                }}>
                
                <Image
                            source={require("../assets/profileImg/10.jpg")}
                            style={{
                            width: 90,
                            height: 100,
                            // width: scale(110),
                            // height: verticalScale(26),
                            // borderRadius: 100,
                            }}
                />
            </View>
            </View>

         

                </View> */}
         

        </View>

                    {flashMessage && 
                    <View style={{
                        // backgroundColor: "rgba(14,14,14,0.71)",
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
                                    alignItems: "center",

                                    borderRadius: 20,
                                    // position: "absolute", 
                                    // top: "5%",
                                    // left: "0%",
                        
                                    zIndex: 5
                                }}>
                                <Text style={{
                                    color:"white"
                                }}> successfully uploaded an Image</Text>

                                </BlurView>
                    </View>}
        <View style={{
                    // backgroundColor: "pink",
                width: wp("100%"),
                height: hp("20%"),
                display: "flex", 
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                // padding: 5,
                // marginLeft: 2,
                // marginRight: 2
        }}>
                <TouchableOpacity
            style={{
                backgroundColor:  "rgba(226, 74, 8, 0.91)" ,	
                width: "30%",
                height: 50,
                borderWidth: 2,
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
                borderColor: "rgba(2, 35, 214, 0.2)",
            }}
            onPress={() => navigation.goBack()}

            // disabled={disabletoggle}
            >
            <Text
            style={{
                color: "white"
            }}
            >
            Go Back
            </Text>
        </TouchableOpacity>

              <TouchableOpacity
                style={{
                    backgroundColor: imageUri ? "rgba(24,116,205, 0.7)":  "rgba(24,116,205, 0.2)",
                    width: "50%",
                    height: 50,
                    borderWidth: 2,
                    borderRadius: 7,
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "rgba(2, 35, 214, 0.2)",
                }}
                onPress={() => handleSubmit()}
                disabled={!imageUri}
                >
                <Text
                style={{
                    color: "white"
                }}
                >
                Ready To Go
                </Text>
            </TouchableOpacity>
         

        </View>
      
      

        </View>
       
    </View>
  )
}

export default UploadProfileImageScreen

