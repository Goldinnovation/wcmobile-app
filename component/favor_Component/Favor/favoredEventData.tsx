import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Button,
  Modal,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRef, useMemo, useCallback, useState } from "react";
import { Modalize } from "react-native-modalize";
import type { Modalize as ModalizeType } from "react-native-modalize";
import { StyleSheet } from "react-native";
import CloseMenuIcon from "../../../icons/closeMenuIcon";
import ChangeLayerIcon from "../../../icons/changeLayerIcon";

interface eventFavorData {
  eventId: string;
  eventHost: string;
  eventHostName: string;
  eventTitle: string;
  eventDate: string;
  eventType: string;
  eventDescriptionContent: string;
  eventTime: string;
  ImageCoverUpload: string;
  eventInviteType: number;
  eventAddress: string;
  eventZipcode: string;
  cityType: string;
  selectedRangeofEvents: number;
}

interface FavoredEventDataProps {
  eventData: eventFavorData[] | [];
  handleEventToggle: (item: eventFavorData) => void;
}

const FavoredEventData: React.FC<FavoredEventDataProps> = ({
  eventData,
  handleEventToggle,
}) => {
  const eventFavorData = eventData;
  const [isOpen, setOpen] = useState(false);

  return (
    <View
      style={{
        gap: 0,
      }}
    >
      <View
        style={{
          // marginLeft: 5
          // backgroundColor: "pink",
          // alignItems: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "row",
          padding: 1,
          // height: 50,
          height: "9.5%",
        }}
      >
        <View
          style={{
            width: "80%",
            // backgroundColor: "red",
            paddingLeft: 6,
            // height: 50,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,

              fontWeight: 800,
              color: "white",

              // textAlign: "center",
              opacity: 0.5,
            }}
          >
            Favored Events
          </Text>
        </View>
        <TouchableOpacity
          style={{
            // backgroundColor: "orange",
            width: "20%",
            flexDirection: "row",
            paddingRight: 4,
            justifyContent: "flex-end",
            opacity: 0.5,
          }}
        >
          <ChangeLayerIcon width="24" height="24" />
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView
          scrollEventThrottle={96}
          decelerationRate="normal"
          style={
            {
              // backgroundColor: "blue",
            }
          }
        >
          <View
            style={{
            //   backgroundColor: "green",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 25,
              rowGap: 25,
              padding: 5,
               height: 900
            }}
          >
            {eventFavorData?.map((item, index) => (
              <View key={index} style={{}}>
                <View
                  style={{
                    // backgroundColor: "yellow",
                    width: 170,
                    // height: 210,
                    height: "50.1%",

                    //
                  }}
                >
                  <TouchableOpacity onPress={() => handleEventToggle(item)}>
                    <Image
                      source={{ uri: item.ImageCoverUpload }}
                      style={{
                        height: 150,
                        width: 170,
                        borderRadius: 5,

                        //  paddingRight: 30,
                      }}
                    />
                  </TouchableOpacity>

                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 5,
                    //   backgroundColor: "pink",
                      height: 40,
                    }}
                  >
                    <View
                      style={{
                        // backgroundColor: "red",
                        width: "80%",
                        gap: 3,
                      }}
                    >
                      <View
                        style={
                          {
                            // marginTop: 5
                          }
                        }
                      >
                        <Text style={{ color: "white" }}>
                          {item.eventTitle}
                        </Text>
                      </View>

                      <View
                        style={{
                          // backgroundColor: "red",
                          // borderWidth: 1,
                          borderRadius: 2,
                          // borderColor: "rgba(255, 255, 255,0.5)",
                          width: "59%",
                          height: 15,
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "rgba(0, 0, 0,0.4)",
                        }}
                      >
                        <Text
                          style={{
                            color: "white",
                            textAlign: "center",
                            fontSize: 10,
                          }}
                        >
                          {item.eventType}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "20%",
                        // backgroundColor: "blue",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        source={require("../../../assets/s1.png")}
                        style={{
                          width: 25,
                          // height: 490,

                          height: 25,

                          //  paddingRight: 30,
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default FavoredEventData;

const styles = StyleSheet.create({
  ModalizeStyle: {
    backgroundColor: "pink",
  },
});
