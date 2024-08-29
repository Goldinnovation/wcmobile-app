import { useEffect, useState } from "react";
import { View, Text, Modal, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { TouchableOpacity } from "react-native-gesture-handler";

interface state {
  callFIlter: boolean;
  onClose: () => void;
}

const ExploreFilter: React.FC<state> = ({ callFIlter, onClose }) => {
  const [eventType, setEventType] = useState("");
  const [togglePopUp, setTogglePopUp] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);


  // console.log(callFIlter);

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  useEffect(() => {
    if (callFIlter) {
      setTogglePopUp(!togglePopUp);
    }
  }, []);



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
                //  borderBottomWidth: 1,
                //  borderBottomColor: "rgba(255, 255, 255,0.5)",
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
                  Transition 
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
                height: 400,
              }}
            >
                 {/* Event Mood - Explore Filter */}

              <View style={{
                  // backgroundColor: "orange",
                  padding: 4
              }}>

               {/* Event Mood - Physical Events Header - Explore Filter */}

              <View style={{
                // backgroundColor: "green",
                marginBottom: 4, 
                marginTop: 2
              }}><Text style={{
                color:"white",
                fontSize: 12,
                fontWeight: 200,

              }}>Select an Event Mood </Text>
              </View>

              {/* Event Mood - Physical Events Content Area - Explore Filter */}
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
                

              </View>
              
               
              
            

              {/* Select Eventtype + Date - Explore filter  */}


              <View style={{
                // backgroundColor: "green",
                padding: 4
              }}>

               {/* Select Eventtype + Date - header -  Explore filter  */}

              <View style={{
                // backgroundColor: "green",
                marginBottom: 4, 
                marginTop: 2
              }}><Text style={{
                color:"white",
                fontSize: 12,
                fontWeight: 200,

              }}>Select a Data and an Eventtype</Text>
              </View>

              {/* Select Eventtype + Date - Content Area -  Explore filter  */}

              <View style={{
                //  backgroundColor: "pink", 
                 height: 100,
                 padding: 5,
                //  flexDirection: "row",
                 gap: 8
              }}>

             {/* Select Date - Content Area -  Explore filter  */}

                <View style={{
                  // backgroundColor: "skyblue",
                  height: 40,
                  flexDirection: "row",
                  // gap:5

                }}>
                   {/* Select Date - Icon Img-  Explore filter  */}
                   <View style={{
                    width: "10%",
                    // backgroundColor: "grey",
                    justifyContent:"center",
                    padding: 4
                  }}>
                      <Image
                      source={require("../../assets/k2.png")}
                      style={{height: 22, width: 22}}
                      />
                    </View>
                  {/* Select Date - Selector -  Explore filter  */}

                  <View style={{
                    width: "90%",
                    // backgroundColor: "orange"

                  }}>
                    <Text>2</Text>
                    </View>
                  
                </View>

              {/* Select Eventtype - Content Area -  Explore filter  */}

                <View style={{
                  // backgroundColor: "purple",
                  height: 40,
                  flexDirection: "row",

                }}>
                  {/* Select Eventtype - Icon Img-  Explore filter  */}
                  <View style={{
                    width: "10%",
                    // backgroundColor: "grey",
                    justifyContent:"center",
                    padding: 4
                  }}>
                      <Image
                      source={require("../../assets/pz1.png")}
                      style={{height: 22, width: 22}}
                      />
                    </View>
                  {/* Select Eventtype - Selector -  Explore filter  */}

                  <View style={{
                    width: "90%",
                    // backgroundColor: "orange",
                    alignItems: "center",
                    justifyContent: "center"

                  }}>
                    <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                itemContainerStyle={styles.itemContainerStyles}
                containerStyle={styles.ContainerStyles}
                iconStyle={styles.iconStyle}
                activeColor="rgba(255, 255, 255,0.1)"
                itemTextStyle={styles.itemTextStyle}
                data={data}
                // search
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item: any) => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
          //       renderLeftIcon={() => (
          //         <AntDesign
          //           style={styles.icon}
          //           color={isFocus ? 'blue' : 'black'}
          //           name="Safety"
          //           size={20}
          //         />
          // )}
        />
                   
                    </View>
                </View>


              


              </View>

              </View>
              

               {/* Location + Maximum Distance - Explore filter   */}
              <View style={{
              }}>

              </View>
            </View>


                 {/* Filter btn - Explore filter   */}
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
    paddingTop: 109,
  },
  popup: {
      backgroundColor: 'rgba(0, 0, 0, 0.71)',
      borderWidth:1,
      borderColor: "rgba(255, 255, 255,0.5)",
    width: 350,  // flex: 1,
     height: 570,
    padding: 10,
    borderRadius: 10,
    elevation: 10, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  dropdown: {
    height: 30,
    width: 250,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor:  "black"//"rgba(255, 255, 255,0.8)",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "white"
  },
  selectedTextStyle: {
    fontSize: 16,
    // backgroundColor:"red",
    color: "white"

    
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: "white",
    // backgroundColor:"red"
  },
  itemContainerStyles:{
    // backgroundColor: "grey",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255,0.1)"

   
  },
  ContainerStyles: {
    borderRadius: 8,
    marginTop: 10,
    backgroundColor:  "rgba(18,18,18,0.98)",//"rgba(255, 255, 255,0.98)"
    borderColor: "blue"
  }, 
  itemTextStyle: {
    color: "white",
  }, 
  // activeColor: {
    // backgroundColor: "pink"
  // }


});

export default ExploreFilter;
