import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import HeartFavorBtn from "../Buttons/HeartFavorBtn";
import EventDescription from "./eventDescription";
import {useRef, memo} from "react"
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

interface EventDescriptionAreaProps {
  data: eventProps;
  index: number;
  handleCategoryReq: (e: string, eId: string, item: eventProps) => void;
}

const EventDescriptionArea: React.FC<EventDescriptionAreaProps> = ({
  data,
  index,
  handleCategoryReq,
}) => {
  const { categoryLayoutState } = useSelector(
    (state: RootState) => state.OpenCategoryLayout
  );

  const item = data;
  



  return (
    <View
      style={{
        //  backgroundColor: "rgba(207,207,208,0.7)",
        width: "100%",
        flexDirection: "row",
        height: 90,
        top: categoryLayoutState === item.eventId ? "-5%" : "-3%",
      }}
    >
      {/* Event Description - Explorepage */}
      <View
        style={{
          //  backgroundColor: "rgba(106, 190, 110,0.7)",
          width: "80%",
          display: "flex",
        }}
      >
        <EventDescription item={item} handleCategoryReq={handleCategoryReq} />
      </View>

      {/* Icon Area -  Explorepage */}
      <View
        style={{
          //  backgroundColor: "rgba(221,221,221,0.5)",
          width: "20%",
          gap: 7,
        }}
      >
        <HeartFavorBtn item={item} />
      </View>
    </View>
  );
};

export default EventDescriptionArea;
