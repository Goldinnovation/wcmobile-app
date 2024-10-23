import { useEffect, useState } from "react";
import { View, Text, Modal, Image, Platform} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Slider from '@react-native-community/slider';
import BallonIcon from "../../icons/BallonIcon";
import BallonIconColor from "../../icons/BallonIconColor";
import CalenderIcon from "../../icons/calenderIcon";
import DayNightIcon from "../../icons/DayNightIcon";
import PuzzleIcon from "../../icons/puzzleIcon";
import LocationPin from "../../icons/locationPin";
import OnlineIcon from "../../icons/OnlineIcon";
import VirtualIcon from "../../icons/virtualIcon";
import * as Location from "expo-location"
import { useDispatch } from "react-redux";
import { userLocationAction } from "../../store/Actions/userLocationAction";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";


interface state {
  callFIlter: boolean;
  onClose: () => void;
}

type ModeType = "date" | "time" | "datetime"

const ExploreFilter: React.FC<state> = ({ callFIlter, onClose }) => {
  const [eventType, setEventType] = useState("");
  const [togglePopUp, setTogglePopUp] = useState(false);
  const [value, setValue] = useState(null);
  const [TimeValue, setTimeValue] = useState(null)
  const [isFocus, setIsFocus] = useState(false);
  const [timeIsFocus, settimeisFocus] = useState(false)
  const [date, setDate] = useState(new Date())
  const [openDate, setOpenDateInfo] = useState(false)
  const [slidevalue, setSlideValue] = useState(0)
  const [eventMoodtoggle, setEventMoodToggle] = useState(false) 
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [location, setLocation] = useState({})
  const dispatchLocation = useDispatch()
  const {userLocationState} = useSelector((state: RootState) => state.userLocationReduxStore)
  const [locationName, setLocationName] = useState("Location")
  const [postalCode, setPostalCode] = useState("Code")
  const [userCountry, SetUserCountry] = useState("Country")
  const [userCity, setUserCity] = useState("City")
  const [trigger, setTrigger] = useState(false)


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    // console.log(date);
    setOpenDateInfo(true)
    setDate(date)
    hideDatePicker();
  };


  const handleClickEventMood = () => {
    setEventMoodToggle(!eventMoodtoggle)
  }
 
  // console.log(callFIlter);

  const data = [
    { label: 'Exhibition', value: '1' },
    { label: 'Party', value: '2' },
    { label: 'Movie', value: '3' },
    { label: 'Activity', value: '4' },
    { label: 'Festival', value: '5' },
    { label: 'Shows', value: '6' },
    { label: 'Comedy', value: '7' },
  ];

  const TimeData = [
    { label: 'Now', value: '1' },
    { label: 'Morning', value: '2' },
    { label: 'Afternoon', value: '3' },
    { label: 'Evening', value: '4' },
    

   
  ];


  // if(userLocationState.length > 0){
  //   console.log('Trigger Init ');
  //   setLocationName(userLocationState[0].name)
  //   setPostalCode(userLocationState[0].postalCode)
  //   setUserCity(userLocationState[0].city)
  //   SetUserCountry(userLocationState[0].country)
  
  // }
 


  




  useEffect(() => {
    if (callFIlter) {
      setTogglePopUp(!togglePopUp);
    }

    const setfunction = () => {
      setLocationName(userLocationState[0].name)
      setPostalCode(userLocationState[0].postalCode)
      setUserCity(userLocationState[0].city)
      SetUserCountry(userLocationState[0].country)
      // setTrigger(true)
    }


    (userLocationState?.length == 1 &&  trigger === false) && (() => {
     
      setfunction()
      setTrigger(true)
    })();
   
  }, [trigger]);



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
                height: 440,
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
                    backgroundColor: eventMoodtoggle ? "rgba(255, 1, 1,0.7)" : "transparent",
                    justifyContent: "center", 
                    alignItems: "center", 
                    padding: 2,
                    width: "90%",
                    height: 70,
                    borderWidth: 1, 
                    borderColor: eventMoodtoggle ? "black" : "rgba(255, 255, 255,0.5)",
                    borderRadius: 5

                    


                   }}>
                    <TouchableOpacity
                    onPress={handleClickEventMood}
                    >
                    {
                      
                      eventMoodtoggle 
                      ?   
                      // <Image
                      // source={require("../../assets/bal2.png")}
                      // style={{height: 55, width: 55,
                      //    opacity:eventMoodtoggle && 1
                      //   }}/>
                      <BallonIconColor height={"55"} width={"55"}/>

                     : 
                    //  <Image
                    //  source={require("../../assets/bal1.png")}
                    //  style={{height: 55, width: 55,
                    //     opacity:eventMoodtoggle ? 1 : 0.5
                    //    }}
                    // />
                    <BallonIcon height={"55"} width={"55"} lineColor={"#ffffff"}/>

                    }
                    

                    </TouchableOpacity>
                    
           
                   </View>
                    {/* Event Mood - Physical Events - Text section - Explore Filter */}
                   <View style={{
                    padding: 3,
                    marginTop: 2,
                   


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
                    {/* <Image
                        source={require("../../assets/gal1.png")}
                        style={{height: 50, width: 50, opacity: 0.5}}
                       /> */}
                       <OnlineIcon height={"55"} width={"55"}/>
           
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
                    {/* <Image
                        source={require("../../assets/sat1.png")}
                        style={{height: 47, width: 47, opacity:0.5}}
                       /> */}
                      <VirtualIcon height={"55"} width={"55"}/>

           
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
                    width: "15%",
                    // backgroundColor: "grey",
                    justifyContent:"center",
                    padding: 4,
                    position: "absolute",
                    left: "3%",
                    top: "20%",
                    zIndex: 3

                  }}>
                      {/* <Image
                      source={require("../../assets/k2.png")}
                      style={{height: 15, width: 15}}
                      /> */}
                      <CalenderIcon height={"15"} width={"15"} />
                    </View>
                  {/* Select Date - Selector -  Explore filter  */}

                  <View style={{
                    width: "100%",
                    // backgroundColor: "orange",
                    // justifyContent: "center",
                    alignItems:"center",
                    flexDirection: "row",
                    gap: 6, 
                    padding: 4


                  }}>
                     {/* <Text>selected: {date.toLocaleString()}</Text> */}
                     
                            
                            <View style={{
                              // backgroundColor: "red",
                              width: "50%",
                              // height: 100,
                              // position: "absolute", 
                              // zIndex: 7
                            }}>
                             <View style={{
                              height: 30, 
                              // backgroundColor: "red",
                              width: "100%",
                              borderColor: isDatePickerVisible ? "blue" : 'gray',
                              borderWidth: 0.5,
                              borderRadius: 8,
                              // paddingHorizontal: 8,
                              backgroundColor: "black",
                              // alignItems: "center", 
                              justifyContent: "center"



                             }}>
                          {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
                             <TouchableOpacity
                            style={{
                              // width: "30%",
                              // backgroundColor: "orange",
                              alignItems: "center", 
                              justifyContent: "center"
                            }}
                             onPress={showDatePicker}
                             >
                              {
                                openDate
                                ? <Text style={{color: "white", fontSize: 13}}> {date.toLocaleDateString()}</Text>
                                :  <Text style={{ color: "white", fontSize: 11, opacity: 0.5}}>00.00.0000</Text>
                              }
                            
                             </TouchableOpacity>


                             </View>

                              <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                              />
                               
                              
                            </View>

                            <View style={{
                              width: "15%",
                              // backgroundColor: "grey",
                              justifyContent:"center",
                              padding: 4,
                              position: "absolute",
                              left: "55%",
                              top: "26%",
                              zIndex: 3

                            }}>
                                
                                <DayNightIcon height={"15"} width={"15"}/>
                              </View>
                             <View style={{
                              width: "48.2%",
                              // backgroundColor: "red",


                             }}>
                              <View style={{

                                  // width: "100%"
                              }}>
                                 <Dropdown
                                style={[styles.dropdownTime, timeIsFocus && { borderColor: 'blue' }]}
                                placeholderStyle={styles.placeholderStyleTime}
                                selectedTextStyle={styles.selectedTextStyleTime}
                                // inputSearchStyle={styles.inputSearchStyle}
                                itemContainerStyle={styles.itemContainerStylesTime}
                                containerStyle={styles.ContainerStyles}
                                // iconStyle={styles.iconStyle}
                                activeColor="rgba(255, 255, 255,0.1)"
                                itemTextStyle={styles.itemTextStyleTime}
                                data={TimeData}
                                // search
                                maxHeight={200}
                                labelField="label"
                                valueField="value"
                                placeholder={!timeIsFocus ? 'period of time' : '...'}
                                searchPlaceholder="Search..."
                                value={TimeValue}
                                onFocus={() => settimeisFocus(true)}
                                onBlur={() => settimeisFocus(false)}
                                onChange={(itemTime: any) => {
                                  setTimeValue(itemTime.value);
                                  settimeisFocus(false);
                                }}
                        
                        />
                                
                              </View>
                            
                            

                            

                             </View>
                            


                            {/* Time - Area - Explore filter  */}
                          

                           
                          
                    {/* <Text>2</Text> */}
                    </View>
                  
                </View>

              {/* Select Eventtype - Content Area -  Explore filter  */}

                <View style={{
                  // backgroundColor: "purple",
                  height: 40,
                  flexDirection: "row",
                  padding: 4

                }}>
                  {/* Select Eventtype - Icon Img-  Explore filter  */}
                  <View style={{
                    width: "15%",
                    // backgroundColor: "grey",
                    justifyContent:"center",
                    padding: 4,
                    position: "absolute",
                    left: "2.5%",
                    top: "25%",
                    zIndex: 3
                  }}>
                     
                      <PuzzleIcon width={"15"} height={"15"}/>
                    </View>
                  {/* Select Eventtype - Selector -  Explore filter  */}

                  <View style={{
                    width: "100%",
                    // backgroundColor: "orange",
                    alignItems: "center",
                    justifyContent: "center"

                  }}>
                    {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
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
                placeholder={!isFocus ? 'Select an Event Type' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item: any) => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
         
        />
                   
                    </View>
                </View>


              


              </View>

              </View>
              

               {/* Location + Maximum Distance - Explore filter   */}
              <View style={{
                 // backgroundColor: "orange",
                 padding: 4
              }}>
                {/* Location + Maximum Distance Header - Explore Filter */}

              <View style={{
                // backgroundColor: "green",
                marginBottom: 4, 
                marginTop: 2
              }}><Text style={{
                color:"white",
                fontSize: 12,
                fontWeight: 200,

              }}>Specify your Location and desired Radius</Text>
              </View>

              {/* Location + Maximum Distance Content Area - Explore Filter */}

              <View style={{
                // backgroundColor: "pink", 
                height: 120,
                padding: 5,
                // flexDirection: "row",
                gap: 2
              }}>

                {/* Location Area - ExploreFilter */}
               <View style={{
                width: "100%",
                height: 50,
                // backgroundColor: "green",
                flexDirection: "row"

               }}>
               


                <View style={{ 
                  // backgroundColor: "skyblue", 
                  width:"40%",
                  padding: 4,
                  justifyContent:"center",

                }}>
                  <Text style={{color:"white"}}>Location</Text> 
                </View>

                <View style={{
                // backgroundColor: "purple",
                	width: "60%",
                  justifyContent:"center",
                  padding: 4,


               }}>
                <TouchableOpacity
                >
                  <Text
                  style={{color:"white", textAlign:"right", opacity: 0.9}}
                  >My Current Location</Text>
                </TouchableOpacity>
                <View style={{
                  flexDirection: "row",
                  // backgroundColor:"pink",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 3
                }}>
                  <View style={{
                    // backgroundColor: "red",
                    marginBottom: 18
                  }}>
                  {/* <Image
                        source={require("../../assets/p1.png")}
                        style={{height: 11, width: 11,}}
                       /> */}
                       <LocationPin height={"11"} width={"11"}/>
                       
                  </View>
                  <View style={{
                    // backgroundColor: "orange",
                    // width: "90%"
                  }}>
                  <Text
                  style={{color:"white", textAlign:"right", opacity: 0.7}}
                  >
                   {locationName}, {postalCode} {userCity}, {userCountry}</Text>
                  </View>
                 
                  
                </View>
               </View>

                
               </View>
               

               {/* Maximum Distance Area - ExploreFilter */}
               <View style={{
                width: "100%",
                height: 100, 
                // backgroundColor: "orange"

               }}>
                  <View style={{
                    //  backgroundColor: "red",
                    width: "100%",
                    height: 30,
                    padding: 4,
                    justifyContent: "center"

                  }}>
                    <Text style={{color:"white"}}>Maximum Distance</Text>
                  </View>
                  <View style={{
                    height: 50,
                    // backgroundColor: "skyblue",
                    justifyContent: "center",
                    padding: 4,
                  }}>
                   <Slider
                        style={{width: 300, height: 40}}
                        minimumValue={0}
                        maximumValue={25}
                        step={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="rgba(89,89,89,1)"
                        value={slidevalue}
                        onValueChange={setSlideValue}
                      />
                  </View>

                  <View style={{
                    // height: 20,
                    // backgroundColor:"red"
                    padding: 4
                  }}><Text style={{color: "white"}}>
                    {slidevalue}km
                    </Text>
                    </View>
               </View>

              </View>


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
                <Text style={{color: "white"}}>Start Transition</Text>
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
    paddingTop: 106,
  },
  popup: {
      backgroundColor: 'rgba(0, 0, 0, 0.71)',
      borderWidth:1,
      borderColor: "rgba(255, 255, 255,0.5)",
    width: 350,  // flex: 1,
     height: 596,
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
    width: "100%",
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor:  "black"//"rgba(255, 255, 255,0.8)",
  },

  dropdownTime: {
    height: 30,
    width: "100%",
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor:  "black"
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
    fontSize: 11,
    color: "white",
    opacity: 0.5,
    marginLeft: 29

  },
  placeholderStyleTime: {
     fontSize: 11,
    color: "white",
    opacity: 0.5, 
    marginLeft: 25
  }, 
  selectedTextStyle: {
    fontSize: 14,
    // backgroundColor:"red",
    color: "white",
    marginLeft: 29

    
  },

  selectedTextStyleTime: {
    fontSize: 13,
    // backgroundColor:"red",
    color: "white",
    marginLeft: 25
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

  itemContainerStylesTime: {
    height: 50,
    //  backgroundColor: "grey",
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
  itemTextStyleTime: {
    color: "white",
    fontSize: 10
  },
  styleDatePicker: {
    backgroundColor: "black",
    width: 200,
    borderWidth: 1,
    borderColor:"rgba(18,18,18,0.98)",
    
    
  }, 
  slider: {
    
  }
 



});

export default ExploreFilter;
