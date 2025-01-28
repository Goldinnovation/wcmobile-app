


import { View, Text, TouchableOpacity, Image } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import UploadProfilePicIcon from "../icons/uploadProfilePicIcon";

const UploadProfileImageScreen = () => {
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
                marginTop: 70,
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
                height: hp("15%"),
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

            <View style={{
                // backgroundColor: "grey", 
                width: wp("35%"),
                height: hp("15%"),
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1, 
                borderColor: "white",
                borderRadius: 7, 
            }}>

                 <UploadProfilePicIcon  width={'63'} height={'65'}  />
            </View>
             <View style={{
                // backgroundColor: "yellow", 
                width: wp("60%"),
                height: hp("10%"),
                justifyContent: "center",
                alignItems: "center",
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
                          
                >
                <Text
                style={{
                    color: "white"
                }}
                >
                    choose a file
                </Text>
            </TouchableOpacity>
            </View>

         

                </View>





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

                </View>

                <View style={{
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

