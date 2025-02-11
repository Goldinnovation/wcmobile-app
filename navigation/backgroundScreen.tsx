import { View, Text, TouchableOpacity, Image } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import UploadProfilePicIcon from "../icons/uploadProfilePicIcon";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";





const BackgroundScreen = () => {
      const navigation = useNavigation();
      const [thunderToggle, setThunderToggle] = useState(false);
      const [underwaterToggle, setUnderwaterToggle] = useState(false);
      const [firefliesToggle, setFirefliesToggle] = useState(false);
      const [disabletoggle, setDisableToggle] = useState(true);

      const handleBackgroundScreen = () => {

        console.log("init")
        navigation.navigate('UserExploreScreen' as never)
    }
      

    const hanldeBackgroundUpload = (uploadedItem: string, itemName: string) => { 
        console.log('upload', uploadedItem);


        if(itemName === "Thunder") {
            setThunderToggle(!thunderToggle);
            setUnderwaterToggle(false);
            setFirefliesToggle(false);
            setDisableToggle(false);
        }else if(itemName === "Underwater") { 
            setUnderwaterToggle(!underwaterToggle);
            setThunderToggle(false);
            setFirefliesToggle(false);
            setDisableToggle(false);

        }
         else if(itemName === "Fireflies") {
            setFirefliesToggle(!firefliesToggle);
            setThunderToggle(false);
            setUnderwaterToggle(false);
            setDisableToggle(false);

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
            // marginRight: 2, 

            // padding: 2
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
                backgroundColor: "rgba(24,116,205, 0.7)",
                width: wp("20%"),
                height: "5%", 
                borderWidth: 1, 
                borderColor: "rgba(24,116,205, 0.7)",
                // opacity: 0.7

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
                // opacity: 0.7

                // borderRadius: 50
            }}>
                <View style={{
                            backgroundColor: "rgba(24,116,205, 0.7)",
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

                }}>Select a Gif Background </Text>

                <View style={{
                    paddingTop: 10,
                }}>
                            <Text style={{ color: "white", fontWeight: 200, fontSize: 12 }}>
                                You can upload your custom background in the app.
                            </Text>
                            </View>

        </View>


        <View style={{
                // backgroundColor: "orange",
            width: wp("100%"),
            height: hp("50%"),
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-around",
            alignItems: "center",
            // padding: 5,
            // marginLeft: 2,
            // marginRight: 2
            // gap: 10
        }}>
        



             <TouchableOpacity style={{
                // backgroundColor: "green",
                width: wp("90%"),
                height: hp("10%"),
                borderRadius: 7,
                position: "relative"
                

             }}
             onPress={() => hanldeBackgroundUpload("https://firebasestorage.googleapis.com/v0/b/worthsec-3345b.appspot.com/o/userBackground%2F2024-10-21T18%3A28%3A16.498Z_tumblr_n80f38Enls1syw1wdo1_500.gif?alt=media&token=4c4ae519-c4c8-4c7f-8c41-ee481f10ef44", "Thunder")}
             >
                <View style={{
                    position: "absolute",
                    top: "50%", 
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,

                }}>

                    {thunderToggle &&
                      <Text style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 19, 
                        opacity: 0.7
                    }}>Thunder</Text>
                    }
                  
                </View>
                  <Image
                            // source={require("../assets/profileImg/4b.gif")}
                            source={{uri:"https://firebasestorage.googleapis.com/v0/b/worthsec-3345b.appspot.com/o/userBackground%2F2024-10-21T18%3A28%3A16.498Z_tumblr_n80f38Enls1syw1wdo1_500.gif?alt=media&token=4c4ae519-c4c8-4c7f-8c41-ee481f10ef44"}}
                            style={{
                            width: wp("90%"),
                            height:  hp("10%"),
                            borderRadius: 7,
                            borderWidth: thunderToggle ? 1 : 0, 
                            borderColor: thunderToggle ? "white" : "none", 
                            opacity: thunderToggle ? 1 :  0.7

                            // width: scale(110),
                            // height: verticalScale(26),
                            // borderRadius: 100,
                            }}
                            />
             </TouchableOpacity>


             <TouchableOpacity style={{
                // backgroundColor: "pink",
                width: wp("90%"),
                height: hp("10%"),
                // borderRadius: 7, 
                // borderWidth: 1,
                // borderColor: "white",
                position: "relative"


             }}

             onPress={() => hanldeBackgroundUpload("https://firebasestorage.googleapis.com/v0/b/worthsec-3345b.appspot.com/o/userBackground%2F2024-12-09T10%3A37%3A21.460Z_TQUx.gif?alt=media&token=13459fd9-e3c8-4545-9c94-850efffc438a", "Underwater")}
             >
                 <View style={{
                    // backgroundColor: "rgba(0, 0, 0, 0.87)",
                    width:"100%",
                    height:"100%",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: "50%", 
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,

                }}>
                    {underwaterToggle && 
                     <Text style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 19, 
                        opacity: 0.7
                    }}>Underwater</Text>
                    }
                  
                </View>
                  <Image
                            // source={require("../assets/profileImg/4i.gif")}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/worthsec-3345b.appspot.com/o/userBackground%2F2024-12-09T10%3A37%3A21.460Z_TQUx.gif?alt=media&token=13459fd9-e3c8-4545-9c94-850efffc438a"}}

                            style={{
                            width: wp("90%"),
                            height:  hp("10%"),
                            borderRadius: 7,
                            borderWidth: underwaterToggle ? 1 : 0, 
                            borderColor: underwaterToggle ? "white" : "none", 
                            opacity: underwaterToggle ? 1 :  0.7

                            // width: scale(110),
                            // height: verticalScale(26),
                            // borderRadius: 100,
                            }}
                            />
             </TouchableOpacity>

             <TouchableOpacity style={{
                // backgroundColor: "blue",
                width: wp("90%"),
                height: hp("10%"),
                borderRadius: 7, 
                position: "relative"



             }}
             onPress={() => hanldeBackgroundUpload("https://firebasestorage.googleapis.com/v0/b/worthsec-3345b.appspot.com/o/userBackground%2F2024-12-09T12%3A28%3A15.154Z_8vnz.gif?alt=media&token=58439032-c046-492e-bfec-dcaf0df3c225", "Fireflies")}
             
             >
                <View style={{
                    position: "absolute",
                    top: "50%", 
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,

                }}>

                    {firefliesToggle && 
                         <Text style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 19, 
                            opacity: 0.7
                        }}>Fireflies</Text>
                    }
                   
                </View>
                   <Image
                            // source={require("../assets/profileImg/4IER.gif")}
                            source={{uri: "https://firebasestorage.googleapis.com/v0/b/worthsec-3345b.appspot.com/o/userBackground%2F2024-12-09T12%3A28%3A15.154Z_8vnz.gif?alt=media&token=58439032-c046-492e-bfec-dcaf0df3c225"}}
                            style={{
                            width: wp("90%"),
                            height:  hp("10%"),
                            borderRadius: 7,
                            borderWidth: firefliesToggle ? 1 : 0, 
                            borderColor: firefliesToggle ? "white" : "none", 
                            opacity: firefliesToggle ? 1 :  0.7
                            // width: scale(110),
                            // height: verticalScale(26),
                            // borderRadius: 100,
                            }}
                            />
             </TouchableOpacity>

            


        </View>

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
                backgroundColor: !disabletoggle ? "rgba(24,116,205, 0.7)" : "rgba(24,116,205, 0.2)",
                width: "50%",
                height: 50,
                borderWidth: 2,
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
                borderColor: "rgba(2, 35, 214, 0.2)",
            }}
            onPress={() => handleBackgroundScreen()}
            disabled={disabletoggle}
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

export default BackgroundScreen
