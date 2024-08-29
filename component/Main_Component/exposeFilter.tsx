import { useEffect, useState } from "react";
import { View, Text, Modal, Image } from "react-native";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { StyleSheet } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface state {
  callFIlter: boolean;
  onClose: () => void;
}

const ExploreFilter: React.FC<state> = ({ callFIlter, onClose }) => {
  const [eventType, setEventType] = useState("");
  const [togglePopUp, setTogglePopUp] = useState(false);

  // console.log(callFIlter);

  useEffect(() => {
    if (callFIlter) {
      setTogglePopUp(!togglePopUp);
    }
  }, []);

  const data = [
    { key: "1", value: "Mobiles" },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  // console.log(eventType);

  //    console.log(eventType);

  return (
    <View>
      <Modal
        transparent={true}
        visible={callFIlter}
        animationType="slide"
        // onRequestClose={onClose}
      >
        <View style={styles.overlay}>
          <View style={styles.popup}>
            <View
              style={{
                // backgroundColor: "green",
                height: 70,
                justifyContent: "center",
                alignContent: "center",
                padding: 2,
                marginBottom: 5,
                
              
              }}
            >
              <View style={{
                // backgroundColor: "orange",
                 borderBottomWidth: 1,
                 borderBottomColor: "rgba(255, 255, 255,0.5)",
                 padding: 3,
                 height: 77,



              }}>

                  {/* Close BTN - explore filter  */}
              <TouchableOpacity
                        onPress={onClose}
                        style={{
                          // backgroundColor: "green",
                          height: 22,
                          // justifyContent: "center", 
                          alignItems: "center",
                          width: 44,
                          position: "relative", 
                          // top: "-0%",
                          left: "90%", 
                          zIndex: 2
                          
                        
                        }}
                        >
                        <Text style={{color: "red", fontWeight: "bold", fontSize: 19}}>X</Text>
              </TouchableOpacity>

                {/* Header Text  Area- explore Filter  */}
              <View style={{
                // backgroundColor: "orange",
                height: 25
                // flexDirection: "row", 
                
              }}>
                
            
               
               {/* Header Text Content- explore Filter  */}
                <View style={{
                  // width: "96%",
                  // backgroundColor: "red",
                  justifyContent: "center", 
                  alignItems: "center",
                
                  // left: "95%"
                }}>

                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 400,
                    color: "white",
                   
                    // backgroundColor: "orange",
                   opacity: 0.7,
                    borderBottomWidth: 1,
                    borderBottomColor: "white"
                    
                  }}
                >
                  Filter Board
                </Text>

                </View>
              </View>
                  {/* Subtext are of Explore filter  */}
              <View
                style={{
                  // backgroundColor: "red",
                  margin: 2,
                //  height: 20
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 10,
                    fontWeight: 200,
                    color: "white",
                  }}
                >
                  Discover more Events in your Area{" "}
                </Text>
              </View>

              </View>

             
            </View>



            <View
              style={{
                // backgroundColor: "rgba(57, 135, 111,0.5)",
                height: 330,
              }}
            >
              {/* Event Mood - Epxlore Filter */}
              <View style={{
                // backgroundColor: "pink", 
                height: 100,
                padding: 5,
                flexDirection: "row",
                gap: 2

              }}>


                {/* Event Mood - Physical Events - Explore Filter */}
                <View style={{
                  // backgroundColor: "green",
                  height: 90,
                  width: "33%",
                  justifyContent: "center", 
                  alignItems: "center", 
                }}>
                {/* Event Mood - Physical Events - Img section - Explore Filter */}

                   <View style={{
                    // backgroundColor: "red",
                    justifyContent: "center", 
                    alignItems: "center", 
                    padding: 2,
                    width: "90%",
                    height: 70,
                    borderWidth: 1, 
                    borderColor:"rgba(255, 255, 255,0.5)",
                    borderRadius: 5

                    


                   }}>
                    <Image
                        source={require("../../assets/bal1.png")}
                        style={{height: 55, width: 55}}
                       />
           
                   </View>
                    {/* Event Mood - Physical Events - Text section - Explore Filter */}
                   <View style={{
                    padding: 3,
                    marginTop: 2

                   }}>
                    <Text style={{color: "white", fontSize: 9}}>Physical</Text>
                   </View>
                </View>

                 {/* Event Mood - Online Events - Explore Filter */}
                <View
                style={{
                  // backgroundColor: "skyblue",
                  height: 90,
                  width: "33%",
                  justifyContent: "center", 
                  alignItems: "center",
                }}
                >
                  {/* Event Mood - Online Events - Img section - Explore Filter */}

                  <View style={{
                    // backgroundColor: "red",
                    justifyContent: "center", 
                    alignItems: "center", 
                    padding: 2,
                    width: "90%",
                    height: 70,
                    borderWidth: 1, 
                    borderColor:"rgba(255, 255, 255,0.5)",
                    borderRadius: 5

                    


                   }}>
                    <Image
                        source={require("../../assets/gal1.png")}
                        style={{height: 50, width: 50}}
                       />
           
                   </View>
                    {/* Event Mood - Online Events - Text section - Explore Filter */}
                   <View style={{
                    padding: 3,
                    marginTop: 2
                   }}>
                    <Text style={{color: "white", fontSize: 9}}>Online</Text>
                   </View>

                </View>
                 {/* Event Mood - Virtual  Events - Explore Filter */}
                <View
                style={{
                  // backgroundColor: "purple",
                  height: 90,
                  width: "33%",
                  justifyContent: "center", 
                  alignItems: "center",
                }}
                
                >
                 {/* Event Mood - Virtual Events - Img section - Explore Filter */}

                 <View style={{
                    // backgroundColor: "red",
                    justifyContent: "center", 
                    alignItems: "center", 
                    padding: 2,
                    width: "90%",
                    height: 70,
                    borderWidth: 1, 
                    borderColor:"rgba(255, 255, 255,0.5)",
                    borderRadius: 5

                    


                   }}>
                    <Image
                        source={require("../../assets/sat1.png")}
                        style={{height: 47, width: 47}}
                       />
           
                   </View>
                    {/* Event Mood - Virual Events - Text section - Explore Filter */}
                   <View style={{
                    padding: 3,
                    marginTop: 2
                   }}>
                    <Text style={{color: "white", fontSize: 9}}>Virtual</Text>
                   </View>

                </View>
                
              </View>

              {/* Select EVenttype + Date - Explore filter  */}
              <View
                style={{
                  marginLeft: 5,
                  position: "relative",
                  // top: "-20%",
                  left: "15%",
                }}
              >


                {/* <SelectList
                  setSelected={(val: any) => setEventType(val)}
                  data={data}
                  save="value"
                  placeholder="Eventtype"
                  boxStyles={{
                    backgroundColor: "rgba(218,218,218,0.9)",
                    height: 32,
                    width: 160,
                    borderRadius: 7,
                  }}
                  inputStyles={{
                    fontSize: 13,
                    height: 20,
                    padding: 0,
                    // backgroundColor:  "pink",
                    position: "relative",
                    left: "39%",
                    top: "0%",
                  }}
                  dropdownStyles={{
                    backgroundColor: "rgba(218,218,218,0.9)",
                    height: 200,
                    width: 200
                  }}
                  dropdownItemStyles={
                    {
                      marginHorizontal: 10
                    }
                  }
                  dropdownTextStyles={{
                    color: "black",
                  }}
                /> */}
              </View>
               {/* Location + Maximum Distance - Explore filter   */}
              <View></View>
            </View>
            <View
              style={{
                // backgroundColor: "skyblue",
                height: 70,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity 
              onPress={onClose}
              style={{
                height: 35,
                backgroundColor: "rgb(0, 128, 255)",
                width: 200,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
              
              >
                <Text style={{color: "white"}}>Start Filter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent background
      // justifyContent: 'center',
      alignItems: 'center',
    paddingTop: 119,
  },
  popup: {
      backgroundColor: 'rgba(0, 0, 0, 0.71)',
      borderWidth:1,
      borderColor: "rgba(255, 255, 255,0.5)",
    
    width: 350,  // flex: 1,
     height: 500,
    padding: 10,
    borderRadius: 10,
    elevation: 10, // For shadow on Android
    shadowColor: "#000", // For shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default ExploreFilter;
