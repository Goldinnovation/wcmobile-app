import React from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userCategoryLayoutAction } from "../../../store/Actions/userLayoutAction";

interface eventProps {
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

interface eventCategoryProps {
  data: eventProps;
}

const EventCategoryCloseBtn: React.FC<eventCategoryProps> = ({ data }) => {
  const dispatchCategoryLayout = useDispatch();
  const item = data;

  const handleCategoryClose = () => {
    dispatchCategoryLayout(userCategoryLayoutAction(""));
  };

  return (
    <View
      style={{
        width: "100%",
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        key={item.eventId}
        style={{
          height: 25,
          backgroundColor: "black",
          width: "20%",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => handleCategoryClose()}
      >
        <Text
          style={{
            color: "red",
            fontWeight: "bold",
            opacity: 0.7,
          }}
        >
          {/* {item.eventType} */}x
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EventCategoryCloseBtn;
