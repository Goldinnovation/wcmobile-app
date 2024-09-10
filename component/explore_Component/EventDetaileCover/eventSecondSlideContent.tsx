import React from "react";
import { View, Image, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import EventDescriptionSection from "./eventDescriptionSection";
import EventDetailsSection from "./eventDetailsSection";
import EventSoundSection from "./eventSoundSection";

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

interface seconSlideContentProps {
  data: eventProps;
  state: {
    eventDescription: boolean;
    eventDetails: boolean;
    eventSound: boolean;
    eventOptionHeader: string;
  };
}

const EventSecondSlideContent: React.FC<seconSlideContentProps> = ({
  data,
  state,
}) => {
  const item = data;
  const redstate = state;
  const { categoryLayoutState } = useSelector(
    (state: RootState) => state.OpenCategoryLayout
  );

  return (
    <View
      style={{
        // backgroundColor: "pink",
        height: 190,
      }}
    >
      <View
        style={{
          position: "absolute",

          zIndex: 3,
          top: categoryLayoutState === item.eventId ? "64%" : "490%",
          left: categoryLayoutState === item.eventId ? "2%" : "5%",
        }}
      ></View>

      {/* Event Description Area Header */}
      <View>
        <View
          style={{
            backgroundColor:
              categoryLayoutState === item.eventId
                ? "rgba(20,20,20,0.4)"
                : "rgba(20,20,20,0.4)",
            position: "absolute",
            //  display:categoryLayoutState === item.eventId ? "none" : "flex",
            width: categoryLayoutState === item.eventId ? 350 : 358,
            height: categoryLayoutState === item.eventId ? 80 : 90,
            // borderBottomWidth: 1,
            borderColor: "rgba(255, 255, 255,0.5)",
            borderTopLeftRadius: 9,
            borderTopRightRadius: 9,
            zIndex: 1,
          }}
        ></View>
        <Image
          source={{ uri: item.ImageCoverUpload }}
          style={{
            width: categoryLayoutState === item.eventId ? 350.6 : 358,
            // height: 490,

            height: categoryLayoutState === item.eventId ? 80 : 90,
            borderTopLeftRadius: 9,
            borderTopRightRadius: 9,
            borderBottomWidth: 1,
            borderColor: "rgba(255, 255, 255,0.9)",
            //  paddingRight: 30,
          }}
        />
      </View>

      {/* Event Description Area */}
      {redstate.eventDescription && (
        <EventDescriptionSection data={item} state={redstate} />
      )}

      {/* Event Details Area */}

      {redstate.eventDetails && (
        <EventDetailsSection data={item} state={redstate} />
      )}
      {/* Event Sound Area */}

      {redstate.eventSound && (
        <EventSoundSection data={item} state={redstate} />
      )}
    </View>
  );
};

export default EventSecondSlideContent;
