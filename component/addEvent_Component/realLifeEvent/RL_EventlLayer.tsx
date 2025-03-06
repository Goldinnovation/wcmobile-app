import { View, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TextInput } from "react-native";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const RL_EventlLayer = () => {
  const [inputConditions, setInputConditions] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [openTimeInfo, setOpenTimeInfo] = useState(false);
  const [timeData, setTimeData] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDateInfo] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [slidevalue, setSlideValue] = useState(0);

  const [placeHolderText, setPlaceHolderText] = useState(
    "Search for your Friends"
  );

  const handleConfirm = (date: any) => {
    // console.log(date);
    setOpenDateInfo(true);
    setDate(date);
    hideDatePicker();
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleTimeConfirmPick = (timeData: any) => {
    // const updateTimeData = timeData.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    // console.log('updateTimeData', updateTimeData);
    setOpenTimeInfo(true);
    setTimeData(timeData);
    hideTimePicker();
  };

  const hideTimePicker = () => {
    setIsTimePickerVisible(false);
  };

  const showTimePicker = () => {
    setIsTimePickerVisible(true);
  };

  const data = [
    { label: "Art", value: "1" },
    { label: "Party", value: "2" },
    { label: "Movie", value: "3" },
    { label: "Show", value: "4" },
    { label: "Festival", value: "5" },
    { label: "Mess", value: "6" },
    { label: "Open Air", value: "7" },
  ];

  return (
    <View
      style={{
         //  backgroundColor: "pink",
        height: hp(70),
        width: wp(100),
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      {/* Page Title  */}
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
          Event Information
        </Text>
      </View>
      {/* Event NAME */}
      <View
        style={{
          height: hp(10),
          width: wp(98),
          //   backgroundColor: "green",
          display: "flex",
          alignItems: "center",
          //  justifyContent: "center",
          //  gap: 5,
        }}
      >
        <View
          style={{
            //  backgroundColor: "blue",
            height: hp(4),
            width: wp(96),
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
            Choose your Event Name
          </Text>
        </View>
        <TextInput
          style={{
            height: hp(4.5),

            borderWidth: 1,
            paddingLeft: 5,
            // margin: 30,
            width: wp(89),
            color: "black",
            backgroundColor: "#c7c7c7",
            borderRadius: 7,
            // marginTop: 20,
            // borderLeftWidth: 1,
            // borderLeftColor: "rgba(255, 255, 255,0.5)",
            // borderRightWidth: 1,
            // borderRightColor: "rgba(255, 255, 255,0.5)",
          }}
          onChangeText={setInputValue}
          value={inputValue}
          placeholder={placeHolderText}
          placeholderTextColor="rgba(255, 255, 255,0.5)"
          editable={inputConditions}
          selectTextOnFocus={inputConditions}
          // secureTextEntry={true}
        />
      </View>

      {/* Event Date and Time */}

      <View
        style={{
          height: hp(10),
          width: wp(98),
          //  backgroundColor: "pink",
          display: "flex",
          alignItems: "center",
        }}
      >
        <View
          style={{
            //  backgroundColor: "blue",
            height: hp(4),
            width: wp(96),
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
            Pick a Date & Time
          </Text>
        </View>

        <View
          style={{
            // backgroundColor: "orange",
            height: hp(4.5),
            width: wp(89),
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Date */}
          <View
            style={{
              //   backgroundColor: "brown",
              width: wp(46),
              height: hp(4.5),
              // position: "absolute",
              // zIndex: 7
            }}
          >
            <View
              style={{
                height: hp(4.5),
                //   backgroundColor: "blue",
                width: wp(56),
                borderColor: isDatePickerVisible ? "blue" : "gray",
                borderWidth: 0.5,
                borderRadius: 7,
                // paddingHorizontal: 8,
                // alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#c7c7c7",
              }}
            >
              {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
              <TouchableOpacity
                style={{
                  // width: "30%",
                  // backgroundColor: "orange",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={showDatePicker}
              >
                {openDate ? (
                  <Text style={{ color: "color", fontSize: 13 }}>
                    {" "}
                    {date.toLocaleDateString()}
                  </Text>
                ) : (
                  <Text
                    style={{ color: "white", fontSize: hp(1.5), opacity: 0.5 }}
                  >
                    00.00.0000
                  </Text>
                )}
              </TouchableOpacity>
            </View>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>

          {/* Time */}
          <View
            style={{
              // backgroundColor: "blue",
              width: wp(24),
              // height: 100,
              // position: "absolute",
              // zIndex: 7
            }}
          >
            <View
              style={{
                height: hp(4.5),
                backgroundColor: "#c7c7c7",
                width: "100%",
                borderColor: isTimePickerVisible ? "blue" : "gray",
                borderWidth: 0.5,
                borderRadius: 7,

                // paddingHorizontal: 8,
                //   backgroundColor: "red",
                // alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
              <TouchableOpacity
                style={{
                  // width: "30%",
                  //  backgroundColor: "orange",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={showTimePicker}
              >
                {openTimeInfo ? (
                  <Text style={{ color: "color", fontSize: 13 }}>
                    {" "}
                    {timeData.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </Text>
                ) : (
                  <Text
                    style={{ color: "white", fontSize: hp(1.5), opacity: 0.5 }}
                  >
                    00:00
                  </Text>
                )}
              </TouchableOpacity>
            </View>

            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleTimeConfirmPick}
              onCancel={hideTimePicker}
            />
          </View>
        </View>
      </View>

      {/* Event Type */}
      <View
        style={{
          height: hp(10),
          width: wp(98),
          //   backgroundColor: "green",
          display: "flex",
          alignItems: "center",
          //  justifyContent: "center",
          //  gap: 5,
        }}
      >
        <View
          style={{
            //  backgroundColor: "blue",
            height: hp(4),
            width: wp(96),
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
            Select your Event-Type
          </Text>
        </View>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "white" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          itemContainerStyle={styles.itemContainerStyles}
          containerStyle={styles.ContainerStyles}
          iconStyle={styles.iconStyle}
          activeColor="rgba(255, 255, 255,0.1)"
          itemTextStyle={styles.itemTextStyle}
          dropdownPosition={"bottom"}
          data={data}
          // search
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? `Select a event type` : "..."}
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

      <View
        style={{
          height: hp(10),
          width: wp(98),
          //   backgroundColor: "green",
          display: "flex",
          alignItems: "center",
          //  justifyContent: "center",
          //  gap: 5,
        }}
      >
        <View
          style={{
            //  backgroundColor: "blue",
            height: hp(4),
            width: wp(96),
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
            Select your Event-Genre
          </Text>
        </View>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "white" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          itemContainerStyle={styles.itemContainerStyles}
          containerStyle={styles.ContainerStyles}
          iconStyle={styles.iconStyle}
          activeColor="rgba(255, 255, 255,0.1)"
          itemTextStyle={styles.itemTextStyle}
          dropdownPosition={"bottom"}
          data={data}
          // search
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? `Select a event type` : "..."}
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

      <View
        style={{
          height: hp(10),
          width: wp(98),
          //   backgroundColor: "green",
          display: "flex",
          alignItems: "center",
          //  justifyContent: "center",
          //  gap: 5,
        }}
      >
        <View
          style={{
            // backgroundColor: "blue",
            height: hp(4),
            width: wp(96),
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
            Select your invitation-Type 
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "green",
            height: hp(11),
            width: wp(89),
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View
            style={{
              backgroundColor: "pink",
              height: hp(7),
              width: wp(15),
              borderWidth: 1,
              borderRadius: 50,
              borderColor: "white",
            }}
          >
            <Text>1</Text>
          </View>

          <View
            style={{
              backgroundColor: "rgba(252,252,252,1)",
              height: hp(7),
              width: wp(15),
              borderWidth: 1,
              borderRadius: 50,
              borderColor: "white",
            }}
          >
            <Text>1</Text>
          </View>

          <View
            style={{
              backgroundColor: "rgba(252,252,252,1)",
              height: hp(7),
              width: wp(15),
              borderWidth: 1,
              borderRadius: 50,
              borderColor: "white",
            }}
          >
            <Text>1</Text>
          </View>
        </View>
       
      </View>
      {/* <View
        style={{
          height: hp(10),
          width: wp(98),
          backgroundColor: "grey",
        }}
      >
        <Text>3</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    width: wp(89),
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
    borderBottomColor: "rgba(255, 255, 255, 0.76)",
  },

  ContainerStyles: {
    borderRadius: 8,
    marginTop: 15,
    backgroundColor: "rgba(18, 18, 18, 0.77)", //"rgba(255, 255, 255,0.98)"
    borderColor: "white",
  },
  itemTextStyle: {
    color: "white",
  },
});

export default RL_EventlLayer;
