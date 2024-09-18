import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LinkIcon from "../icons/linkIcon";

export default function FeedbackScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
       
        "rgba(61,61,61,1)",
          'rgba(24,24,24,1)',
          "rgba(30, 54, 82,0.8)",
          "rgba(61,61,61,1)",
       

        ]}
        // colors={['black', 'purple', 'black']}
        // colors={['black',]}

        // colors={['black','silver', 'purple', 'green']}

        // colors={['#000000', '#000000bb', 'rgba(35, 32, 32, 0.447)', '#000000']}
        style={styles.gradient}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <View style={{
             height: '8%' ,
            // backgroundColor: "red",
            justifyContent: "center",
            

        }}>
        <Text style={{color: "white", fontSize: 25, textAlign: "center"}}>Feedback</Text>
        </View>

        {/* Link Section */}
        <View style={{
            height: '90%' ,
            // backgroundColor: "pink",
            padding: 10,
            gap: 1
        }}>
            <TouchableOpacity style={{
                height: "10%",
                // backgroundColor: "red",
                justifyContent: "center",
            }}>
            <Text style={{color: "skyblue", fontSize: 15,textDecorationLine: "underline", textDecorationStyle: "solid"}}>
                I would like to give a Feedback to the App in General
            </Text>
            <View style={{
                position: "absolute", 
                top: "55%",
                left: "16%"
            }}>

            <LinkIcon width="12" height="12"/>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={{
                height: "10%",
                // backgroundColor: "red",
                justifyContent: "center",
            }}>
            <Text style={{color: "skyblue", fontSize: 15,textDecorationLine: "underline", textDecorationStyle: "solid"}}>
            I want to provide feedback on the app's design and layout
            </Text>
            <View style={{
                position: "absolute", 
                top: "55%",
                left: "13%"
            }}>

            <LinkIcon width="12" height="12"/>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={{
                height: "10%",
                // backgroundColor: "red",
                justifyContent: "center",
            }}>
            <Text style={{color: "skyblue", fontSize: 15,textDecorationLine: "underline", textDecorationStyle: "solid"}}>
              I encountered a bug and would like to report it.
            </Text>
            <View style={{
                position: "absolute", 
                top: "45%",
                left: "91%"
            }}>

            <LinkIcon width="12" height="12"/>
            </View>
            </TouchableOpacity>


            <TouchableOpacity style={{
                height: "10%",
                // backgroundColor: "red",
                justifyContent: "center",
            }}>
            <Text style={{color: "skyblue", fontSize: 15,textDecorationLine: "underline", textDecorationStyle: "solid"}}>
             I came up with an idea and would love to share it
            </Text>
            <View style={{
                position: "absolute", 
                top: "45%",
                left: "94%"
            }}>

            <LinkIcon width="12" height="12"/>
            </View>
            </TouchableOpacity>


            <TouchableOpacity style={{
                height: "10%",
                // backgroundColor: "red",
                justifyContent: "center",
            }}>
            <Text style={{color: "skyblue", fontSize: 15,textDecorationLine: "underline", textDecorationStyle: "solid"}}>
             I'd like to share feedback on the app's navigation
            </Text>
            <View style={{
                position: "absolute", 
                top: "45%",
                left: "96%"
            }}>

            <LinkIcon width="12" height="12"/>
            </View>
            </TouchableOpacity>


            <TouchableOpacity style={{
                height: "10%",
                // backgroundColor: "red",
                justifyContent: "center",
            }}>
            <Text style={{color: "skyblue", fontSize: 15,textDecorationLine: "underline", textDecorationStyle: "solid"}}>
            I want to provide feedback on the app's speed and responsiveness
            </Text>
            <View style={{
                position: "absolute", 
                top: "56%",
                left: "32%"
            }}>

            <LinkIcon width="12" height="12"/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{
                height: "10%",
                // backgroundColor: "red",
                // justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                gap: 5
            }}>
          
            <Text style={{color: "skyblue", fontSize: 15,textDecorationLine: "underline", textDecorationStyle: "solid"}}>
            I want to comment on the functionality and features of the app
            </Text>
            <View style={{
                position: "absolute", 
                top: "56%",
                left: "22%"
            }}>

            <LinkIcon width="12" height="12"/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{
                height: "10%",
                // backgroundColor: "red",
                // justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                gap: 5

            }}>
            <Text style={{color: "skyblue", fontSize: 15,textDecorationLine: "underline", textDecorationStyle: "solid"}}>
                I'd like to share my experience

            </Text>
            <LinkIcon width="12" height="12"/>
            </TouchableOpacity>
            <View style={{
                height: "13%",
                // backgroundColor: "red",
                justifyContent: "center",
                gap:2
            }}>
               

               
            <Text style={{color: "white", textAlign:"center", fontSize: 12, opacity: 0.8}}>
                "Thank you so much for taking the time to share your feedback 
                on your experience with Worthsec! Since this is an MVP, 
                your insights are incredibly valuable to us, and we'll 
                do our best to consider them in our next update."
            </Text>
            <Text style={{color: "white", textAlign:"center", fontSize: 12, opacity: 0.8}}> - Emmanuel Neuenhaus</Text>
            </View>


           
           

        </View>
        
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    // flex: 1,
    //   justifyContent: "center",
    paddingTop: 50,
    height: '100%'
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: 10,
    // height: '100%'
  },
});
