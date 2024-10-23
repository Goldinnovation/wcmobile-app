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
import FilterBtn from "./exploreFilter/filterbtn";
import EventMode from "./exploreFilter/EventMode";
import EventTypeNDate from "./exploreFilter/EventTypeNDate";
import FilterLocation from "./exploreFilter/filterLocation";


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


                {/* Content Section */}
            <View
              style={{
                // backgroundColor: "rgba(57, 135, 111,0.5)",
                height: 440,
              }}
            >
              {/* Event Mood - Explore Filter */}
              <EventMode />
             
              
               
              
            

              {/* Select Eventtype + Date - Explore filter  */}
              <EventTypeNDate/>
              

               {/* Location + Maximum Distance - Explore filter   */}
         
              <FilterLocation/>
            </View>


                 {/* Filter btn - Explore filter   */}
           
            <FilterBtn onClose={onClose}/>


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
