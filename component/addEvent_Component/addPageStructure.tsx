import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import UploadProfilePicIcon from "../../icons/uploadProfilePicIcon";
import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import DayNightIcon from "../../icons/DayNightIcon";
import RL_EventlLayer from "./realLifeEvent/RL_EventlLayer";
import Digital_EventLayer from "./digitalEvent/digitalEventLayer";
import NH_EventLayer from "./NHEvent/NH_EventLayer";
import * as ImagePicker from "expo-image-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TextInput } from "react-native";

const AddPageStructure = () => {
  const [isFocus, setIsFocus] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [value, setValue] = useState(null);
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [flashMessage, setFlatMessage] = useState(false);
  const [imageObj, setImageObj] = useState({}) as any;
  const [inputConditions, setInputConditions] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [placeHolderText, setPlaceHolderText] = useState(
    "Search for your Friends"
  );
  const [btnState, setBtnState] = useState(false);
  const [disabletoggle, setDisabletoggle] = useState(true);
  const [updatetoInfoPage_RL, setUpdateToInfoPage_RL] = useState(false);
  const [updatetoInfoPage_Dig, setUpdateToInfoPage_Dig] = useState(false);
  const [updatetoInfoPage_NH, setUpdateToInfoPage_NH] = useState(false);

  const [coverpage, setCoverPage] = useState(true);

  const handleImageUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos", "livePhotos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      setImageObj(result);
      setFlatMessage(true);
      setInterval(() => {
        setFlatMessage(false);
      }, 900);
    }
  };

  const data = [
    { label: "Real", value: "1" },
    { label: "Digital", value: "2" },
    { label: "Need & Have", value: "3" },
  ];

  const handleInfoPage = () => {
    console.log("in info page");
    setCoverPage(false);
    if (value == 1) {
      setUpdateToInfoPage_NH(false);
      setUpdateToInfoPage_Dig(false);
      setUpdateToInfoPage_RL(true);
      
    } else if (value == 2) {
      setUpdateToInfoPage_RL(false);
      setUpdateToInfoPage_NH(false);
      setUpdateToInfoPage_Dig(true);
    } else if (value == 3) {
      console.log('in nh');
      setUpdateToInfoPage_RL(false);
      setUpdateToInfoPage_Dig(false);
      setUpdateToInfoPage_NH(true);
    }
  };

  const handleReturnBacktoCoverPage = () => {
    setUpdateToInfoPage_RL(false);
    setCoverPage(true);
  };

  useEffect(() => {
    const handleUserInteractionStartScreen = () => {
      if (imageUri && value !== null) {
        console.log("init");
        setDisabletoggle(false);
      } else {
        setDisabletoggle(true);
      }
    };

    handleUserInteractionStartScreen();
  }, [imageUri, value]);

  console.log("value", value);

  return (
    <View
      style={{
        height: hp(100),
        // flex: 1,
        backgroundColor: "black",
        // paddingTop: 40,
        borderTopWidth: 1,
        borderColor: "rgba(179,179,179,1)",
        borderRadius: 11,
        marginTop: hp(5),
        // gap: 10
      }}
    >
      {/* Header */}
      <View
        style={{
          height: hp(5),
          width: wp(100),
          // backgroundColor: "skyblue",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            height: hp(6),
            width: wp(15),
            // backgroundColor: "orange",
            marginRight: wp(1),

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // flexDirection: "row",
          }}
          // onPress={handleQCloseEvent}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={{
              color: "red",
              fontSize: wp(7),
              fontWeight: "bold",
            }}
          >
            X
          </Text>
        </TouchableOpacity>
      </View>

      {/* Main */}
      {coverpage ? (
        <View
          style={{
            // backgroundColor: "red",
            height: hp(70),
            width: wp(100),
          }}
        >
          {/* Title Section */}
          <View
            style={{
              height: hp(8),
              // backgroundColor: "pink",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
                textAlign: "center",
                fontWeight: "bold",
                opacity: 0.8,
              }}
            >
              Create your Event
            </Text>
          </View>

          {/* Image Upload or Create Image Section */}

          <View
            style={{
              // backgroundColor: "green",
              height: imageUri ? hp(50) : hp(50),
              width: wp(100),
              display: "flex",
              alignItems: "center",
            }}
          >
            <View
              style={{
                // backgroundColor: "blue",
                height: hp(4),
                width: wp(98),
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  fontWeight: 200,
                }}
              >
                Upload an event cover
              </Text>
            </View>

            <View
              style={{
                // backgroundColor: "grey",
                width: wp(98),
                height: imageUri ? hp(45) : hp(45),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  //  backgroundColor: "yellow",
                  height: hp(43),
                  width: wp(88),
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 7,
                  borderWidth: 1,
                  borderColor: "white",
                }}
                onPress={() => handleImageUpload()}
              >
                {imageUri ? (
                  <Image
                    source={{ uri: imageUri }}
                    style={{
                      width: wp(90),
                      height: hp(44),
                      borderRadius: 7,
                    }}
                  />
                ) : (
                  <UploadProfilePicIcon height="140" width="145" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              // backgroundColor: "orange",
              height: hp(12),
              width: wp(100),
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                // backgroundColor: "blue",
                height: hp(2),
                width: wp(98),
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 12,
                  fontWeight: 200,
                }}
              >
                Choose an event type
              </Text>

              <View></View>
            </View>

            <View
              style={{
                // backgroundColor: "pink",
                height: hp(10),
                width: wp(90),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "7%",
                  //   backgroundColor: "grey",
                  justifyContent: "center",
                  padding: 4,
                  position: "absolute",
                  left: "3%",
                  top: "35%",
                  zIndex: 3,
                }}
              >
                <DayNightIcon height={"15"} width={"15"} />
              </View>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                itemContainerStyle={styles.itemContainerStyles}
                containerStyle={styles.ContainerStyles}
                iconStyle={styles.iconStyle}
                activeColor="rgba(255, 255, 255,0.1)"
                itemTextStyle={styles.itemTextStyle}
                dropdownPosition={"top"}
                data={data}
                // search
                maxHeight={200}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? `Default Mood: Real` : "..."}
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
      ) : updatetoInfoPage_RL ? (
        <RL_EventlLayer />
      ) : updatetoInfoPage_Dig ? (
        <Digital_EventLayer />
      ) : updatetoInfoPage_NH ? (
        <NH_EventLayer />
      ) : null}

      {/* Submit btn Area - Footer */}
      <View
        style={{
          // backgroundColor: "grey",
          height: hp(10),
          display: "flex",
          //   flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
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
          }}
        >
          {!coverpage && (
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(226, 74, 8, 0.91)",
                width: "30%",
                height: 50,
                borderWidth: 2,
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
                borderColor: "rgba(2, 35, 214, 0.2)",
              }}
              onPress={() => handleReturnBacktoCoverPage()}

              // disabled={disabletoggle}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                Go Back
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={{
              backgroundColor: disabletoggle
                ? "rgba(6, 16, 32, 0.56)"
                : "rgba(34, 116, 247, 0.56)",
              width: "50%",
              height: 50,
              borderWidth: 2,
              borderRadius: 7,
              alignItems: "center",
              justifyContent: "center",
              borderColor: "rgba(230, 230, 236, 0.2)",
            }}
            onPress={handleInfoPage}
            disabled={disabletoggle}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
        {/* <TextInput
                        style={{ 
                            height: "99%",
        
                            // borderWidth: 1,
                            paddingLeft: 5,
                            // margin: 30,
                            width: "100%", 
                            color: "white",
                            // backgroundColor: "#c7c7c7",
                            // borderRadius: 7,
                            // marginTop: 20,
                             borderLeftWidth: 1,
                            borderLeftColor: "rgba(255, 255, 255,0.5)",
                            borderRightWidth: 1,
                            borderRightColor: "rgba(255, 255, 255,0.5)"
        
                        }}
                        onChangeText={setInputValue}
                        value={inputValue}
                        placeholder={placeHolderText}
                        placeholderTextColor="rgba(255, 255, 255,0.5)" 
                        editable={inputConditions}
                        selectTextOnFocus={inputConditions}
                        // secureTextEntry={true}
                    /> */}
        {/* {value == 1 ? (
           <RL_EventlLayer/>
        ) : value == 2 ? (
          <Digital_EventLayer/>
        ) : value == 3 ? (
           <NH_EventLayer/>
        ) :
         <View style={{
            // backgroundColor: "green", 
            width: "98%", 
            height: "95%",
            display: "flex", 
        //   flexDirection: "column",
            justifyContent: "center", 
            alignItems: "center"



         }}><Text style={{
            color: "white", 
            fontSize: 18,
            fontWeight: "bold"
         }}>Select your event type to start creating</Text></View>
        
        } */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    width: "100%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "black", //"rgba(255, 255, 255,0.8)"
    // opacity: 0.8 ,
  },

  placeholderStyle: {
    fontSize: 11,
    color: "white",
    opacity: 0.5,
    marginLeft: 29,
  },

  selectedTextStyle: {
    fontSize: 14,
    // backgroundColor:"red",
    color: "white",
    marginLeft: 29,
  },

  selectedTextStyleTime: {
    fontSize: 13,
    // backgroundColor:"red",
    color: "white",
    marginLeft: 25,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 80,
    fontSize: 16,
    color: "white",
    // backgroundColor:"red"
  },

  itemContainerStyles: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255,0.1)",
  },

  ContainerStyles: {
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "rgba(18, 18, 18, 0.77)", //"rgba(255, 255, 255,0.98)"
    borderColor: "blue",
  },
  itemTextStyle: {
    color: "white",
  },
});

export default AddPageStructure;
