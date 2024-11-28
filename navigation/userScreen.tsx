import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
// import img from "../assets/7.jpg"
export default  function UserScreen() {
  return (
    <View style={styles.container}> 
        <View style={{
          height: "100%",
          backgroundColor: "black"

        }}>
          {/* Head Section Gif Background */}
            <View style={{
              height:"22%", 
              
              backgroundColor: "orange"
            }}><Text>1</Text></View>


            {/* ProfileImage and selectable option */}
            <View style={{
               height:"23%", 
              // backgroundColor: "green"
            }}>
              {/* Profile Area  */}
              <View style={{
              height:"70%", 
              backgroundColor: "black", 
              position: "relative", 
              display: "flex",
              alignItems:"center",
              justifyContent: "center"
              }}>

              <View style={{
                // backgroundColor: "green",
                width: "30%", 
                height: "85%",
                borderRadius: 100, 
                position: "absolute", 
                top: "-40%",
                // left: "35%", 
                zIndex: 3

              }}>
                
                <Image
                  source={require("../assets/7.jpg")}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 100,
                    // marginLeft: 20,
                    // position: "relative",
                    // top: isOpen === item.eventId ? "-30%" : "-30%",
                    marginTop: 1,
                  }}
                />
                

              </View>

              </View>

              {/* option Area */}
              <View style={{
                 height:"30%", 
                 width:"100%",
              // backgroundColor: "grey", 
              borderTopWidth: 1, 
              borderTopColor: "rgba(176,176,176,0.5)", 
              display: "flex", 
              flexDirection:"row",
              borderBottomWidth: 1, 
                  borderBottomColor: "rgba(176,176,176,0.5)",

              }}>
                <View style={{
                  height: "100%", 
                  width:"50%",
                  // backgroundColor: "pink", 
                  justifyContent:"center", 
                  alignItems:"center"
                }}>
                <Text style={{
                  color: "white"
                }}>1</Text>

                </View>
                <View style={{
                  height: "100%", 
                  width:"50%",
                  // backgroundColor: "yellow", 
                  justifyContent:"center", 
                  alignItems:"center",
                  borderLeftWidth: 1, 
                  borderLeftColor:"rgba(176,176,176,0.5)",
                  
                }}>
                <Text style={{
                   color: "white"

                }}>2</Text>

                </View>
                
              </View>
              
              </View>

              {/* Selected Option Section Area */}
            <View style={{
              height:"55%", 
              backgroundColor: "black"
            }}><Text>3</Text></View>

        </View>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: "pink",
      // flex: 1,
      height: "100%",
    //   justifyContent: "center",
      // paddingTop: 50,

    },
 
 

})
