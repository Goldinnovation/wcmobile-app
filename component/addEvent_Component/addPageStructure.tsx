import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import UploadProfilePicIcon from "../../icons/uploadProfilePicIcon";
import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet } from "react-native";
import { useState } from "react";
import DayNightIcon from "../../icons/DayNightIcon";

const AddPageStructure = () => {
  const [isFocus, setIsFocus] = useState(false);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [value, setValue] = useState(null);

  const data = [
    { label: "Real", value: "1" },
    { label: "Digital", value: "2" },
    { label: "Need & Have", value: "3" },
  ];

//   console.log("value", value);

  return (
    <View
      style={{
        height: "100%",
        // flex: 1,
        backgroundColor: "black",
        // paddingTop: 40,
        borderTopWidth: 1,
        borderColor: "rgba(179,179,179,1)",
        borderRadius: 11,
      }}
    >
      <View
        style={{
          height: "5%",
          width: "100%",
          // backgroundColor: "skyblue",
          // position: "absolute",
          // top: "1%",
          // left: "80%",
          // zIndex: 3,
          marginTop: 10,
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            height: "100%",
            width: "15%",
            // backgroundColor: "orange",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
          // onPress={handleQCloseEvent}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={{
              color: "red",
              fontSize: 23,
              fontWeight: "bold",
            }}
          >
            X
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: "8%",
          // backgroundColor: "red",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 25, textAlign: "center" }}>
          Create your Event
        </Text>
      </View>

      {/* Image Upload or Create Image Section */}

      <View
        style={{
          // backgroundColor: "green",
          height: "30%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            // backgroundColor: "blue",
            height: "20%",
            width: "98%",
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

          <View></View>
        </View>

        <View
          style={{
            // backgroundColor: "grey",
            width: "98%",
            height: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              //  backgroundColor: "yellow",
              height: "80%",
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 7,
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            <UploadProfilePicIcon height="80" width="45" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
            // backgroundColor: "red",
          height: "15%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            // backgroundColor: "blue",
            height: "30%",
            width: "98%",
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
            height: "70%",
            width: "90%",
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
              top: "30%",
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
            data={data}
            // search
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Select an Event Type" : "..."}
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

      {/* Content Are   a */}
      <View
        style={{
        //   backgroundColor: "grey",
          height: "35%",
          display: "flex", 
        //   flexDirection: "column",
          justifyContent: "center", 
          alignItems: "center"
        }}
      >
        {value == 1 ? (
          <View>
            <Text>Event Box Area 1</Text>
            </View>
        ) : value == 2 ? (
          <View>
            <Text>Event Box Area 2</Text>
            </View>
        ) : value == 3 ? (
          <View>
            <Text>Event Box Area 3</Text>
          </View>
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
        
        }
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
    backgroundColor: "black", //"rgba(255, 255, 255,0.8)",
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
    // backgroundColor: "grey",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255,0.1)",
  },

  ContainerStyles: {
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: "rgba(18,18,18,0.98)", //"rgba(255, 255, 255,0.98)"
    borderColor: "blue",
  },
  itemTextStyle: {
    color: "white",
  },
});

export default AddPageStructure;
