import { useEffect, useState } from "react";
import { View, Text, Modal } from "react-native";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { StyleSheet } from "react-native";
import { Button } from "react-native";

interface state {
  callFIlter: boolean;
  onClose: () => void;
}

const ExploreFilter: React.FC<state> = ({ callFIlter, onClose }) => {
  const [eventType, setEventType] = useState("");
  const [togglePopUp, setTogglePopUp] = useState(false);

  console.log(callFIlter);

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
                height: 60,
                justifyContent: "center",
                alignContent: "center",
                padding: 1,
              }}
            >
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: 400,
                    color: "white",
                  }}
                >
                  Filter PAD
                </Text>
              </View>
              <View
                style={{
                  margin: 2,
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
                  Filter for more Events in your Area{" "}
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "rgba(57, 135, 111,0.5)",
                height: 550,
              }}
            >
              <View
                style={{
                  marginLeft: 5,
                  position: "relative",
                  // top: "-20%",
                  left: "15%",
                }}
              >
                <SelectList
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
                    height: 300,
                  }}
                  dropdownItemStyles={
                    {
                      // marginHorizontal: 10
                    }
                  }
                  dropdownTextStyles={{
                    color: "black",
                  }}
                />
              </View>
            </View>
            <View
              style={{
                backgroundColor: "skyblue",
                height: 100,
              }}
            >
              <Text>
                <Button title="Close" onPress={onClose} />
              </Text>
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
    backgroundColor: "rgba(0, 0, 0, 0.95)", // Semi-transparent background
    //   justifyContent: 'center',
    //   alignItems: 'center',
    paddingTop: 40,
  },
  popup: {
    //   backgroundColor: 'pink',
    flex: 1,
    //  height: 100,
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
