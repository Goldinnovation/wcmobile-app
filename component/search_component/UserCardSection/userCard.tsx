import React from "react"
import { View, Image, TouchableOpacity, Text } from "react-native"
import { scale, verticalScale, moderateScale } from "react-native-size-matters";



interface userQrCardProps{
data: any, 
handleQCloseEvent: () => void;
handleUserFollowedOtherUser: () => void
// children?: React.ReactNode;

}

const UserQRCard: React.FC<userQrCardProps> = ({data, handleQCloseEvent, handleUserFollowedOtherUser}) => {

    const userData = data 

    return(
        <View
                style={{
                  height: "75%",
                  width: scale(320),
                //   backgroundColor: "green",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                 

                }}
              >
                  

                <View
                  style={{
                    
                    height: "100%",
                    width: scale(320),
                    // borderRadius: 7,
                    // justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <View style={{
                      //  position: "absolute",
                      //  top: "20%", 
                      //  left: "0%",
                      //  zIndex: 13
                      height: "100%",
                      width: scale(320),
                       
                  }}>
                    <Image
                      style={{ width: "100%", height: "100%", opacity: 0.7,borderRadius: 7,
                        
                      }}
                      source={{ uri: `${userData?.picture.gifUrl}` }}
                    />
                  </View>

                  <View
                    style={{
                      height: "100%",
                      width: scale(320),
                      // backgroundColor: "green",
                      position: "absolute",
                      top: "0%",
                      left: "0%",
                      borderColor: "rgba(255, 255, 255,0.5)",
                      borderWidth: 1,
                      borderRadius: 7,
                      zIndex: 3,
                    }}
                  >
                    
                    {/* Profile Image Section */}

                    <View
                    style={{
                      height: "10%",
                      width: scale(320),
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
                        width: scale(40),
                        // backgroundColor: "orange",
                        display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row"
                    }}
                    onPress={handleQCloseEvent}

                    >
                    <Text style={{
                      color: "red", 
                      fontSize: 23, 
                      fontWeight: "bold"
                      
                    }}>X</Text>
                    </TouchableOpacity>
                   
                  </View>

                  <View style={{
                    height: "70%",
                    width: scale(320),
                    // backgroundColor: "pink",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative"
                  }}>

                {/* Profile Image */}
                    <View
                      style={{
                        height: "55%",
                        width: scale(320),
                        // backgroundColor: "orange",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* <Image
                              style ={{width: "40%", height:"100%", opacity: 0.7}}
                              source={{ uri : `${ userData?.picture.pictureUrl}`}}
                              /> */}
                      <Image
                        source={require("../../../assets/7.jpg")}
                        style={{
                          width: scale(130),
                          height: verticalScale(120),
                          borderRadius: 100,
                        }}
                      />
                    </View>

                    {/* Profile Content Section */}
                    <View
                      style={{
                        height: "15%",
                        width: scale(320),
                        // backgroundColor: "skyblue",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 25,
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        {userData?.userName}
                      </Text>
                    </View>

                  </View>

                    {/* Button Section */}
                    <View
                      style={{
                        height: "10%",
                        width: scale(320),
                        // backgroundColor: "grey",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 1,
                        position: "relative",
                        top: "-5%",
                        left: "0%",
                        zIndex: 3,
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          height: "90%",
                          width: scale(150),
                          borderRadius: 50,
                          backgroundColor: "rgba(149,149,149,0.3)",
                          borderColor: "rgba(255, 255, 255,0.5)",
                          borderWidth: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onPress={handleUserFollowedOtherUser}
                      >
                        
                          <Text
                            style={{
                              color: "white",
                            }}
                          >
                            Follow
                          </Text>
                      </TouchableOpacity>
                
                    </View>


                  </View>


                </View>

              

              </View>
    )
}

export default UserQRCard