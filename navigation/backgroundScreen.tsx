import { View, Text, TouchableOpacity, Image } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import UploadProfilePicIcon from "../icons/uploadProfilePicIcon";
import { useNavigation } from "@react-navigation/native";





const BackgroundScreen = () => {
      const navigation = useNavigation();

      const handleBackgroundScreen = () => {

        console.log("init")
        navigation.navigate('UserExploreScreen' as never)
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
        



             <View style={{
                // backgroundColor: "green",
                width: wp("90%"),
                height: hp("10%"),
                borderRadius: 7,
               

             }}>
                  <Image
                            source={require("../assets/profileImg/4b.gif")}
                            style={{
                            width: wp("90%"),
                            height:  hp("10%"),
                            borderRadius: 7,
                            borderWidth: 1, 
                            borderColor: "white",
                            opacity: 0.7

                            // width: scale(110),
                            // height: verticalScale(26),
                            // borderRadius: 100,
                            }}
                            />
             </View>


             <View style={{
                // backgroundColor: "pink",
                width: wp("90%"),
                height: hp("10%"),
                borderRadius: 7


             }}>
                  <Image
                            source={require("../assets/profileImg/4i.gif")}
                            style={{
                            width: wp("90%"),
                            height:  hp("10%"),
                            borderRadius: 7,
                            borderWidth: 1, 
                            borderColor: "white",
                            opacity: 0.7

                            // width: scale(110),
                            // height: verticalScale(26),
                            // borderRadius: 100,
                            }}
                            />
             </View>

             <View style={{
                // backgroundColor: "blue",
                width: wp("90%"),
                height: hp("10%"),
                borderRadius: 7


             }}>
                   <Image
                            source={require("../assets/profileImg/4IER.gif")}
                            style={{
                            width: wp("90%"),
                            height:  hp("10%"),
                            borderRadius: 7,
                            borderWidth: 1, 
                            borderColor: "white", 
                            opacity: 0.7
                            // width: scale(110),
                            // height: verticalScale(26),
                            // borderRadius: 100,
                            }}
                            />
             </View>

            


        </View>

        <View style={{
                // backgroundColor: "pink",
            width: wp("100%"),
            height: hp("20%"),
            justifyContent: "center",
            alignItems: "center",
            // padding: 5,
            // marginLeft: 2,
            // marginRight: 2
        }}>
        <TouchableOpacity
            style={{
                backgroundColor: "rgba(24,116,205, 0.7)",
                width: "70%",
                height: 50,
                borderWidth: 2,
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
                borderColor: "rgba(2, 35, 214, 0.2)",
            }}
            onPress={() => handleBackgroundScreen()}
     
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
