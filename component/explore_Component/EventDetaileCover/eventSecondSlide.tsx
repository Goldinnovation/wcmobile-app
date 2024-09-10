import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import EventSecondSlideMenuBar from "./eventSecondSlideMenubar";
import EventSecondSlideContent from "./eventSecondSlideContent";

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

interface EventDetailsProps {
  data: eventProps;
  state: {
    eventDescription: boolean;
    eventDetails: boolean;
    eventSound: boolean;
    eventOptionHeader: string;
  };
  handleEventInfo: (e: string) => void;
}

const EventMoreInfoSlide: React.FC<EventDetailsProps> = ({
  data,
  state,
  handleEventInfo,
}) => {
  const item = data;
  const redstate = state;
  const { categoryLayoutState } = useSelector(
    (state: RootState) => state.OpenCategoryLayout
  );

  return (
    <View
      style={{
        // backgroundColor: "black",
        marginLeft: categoryLayoutState === item.eventId ? -10 : 10,
        marginRight: categoryLayoutState === item.eventId ? 10 : 10,
        paddingLeft: categoryLayoutState === item.eventId ? 3 : 3,
        paddingRight: categoryLayoutState === item.eventId ? 3 : 3,
        padding: categoryLayoutState === item.eventId ? 3 : 3,
        width: categoryLayoutState === item.eventId ? 364 : 364,
        height: categoryLayoutState === item.eventId ? 340 : 437,
      }}
    >
      <View
        style={{
          backgroundColor:
            categoryLayoutState === item.eventId
              ? "rgba(149,149,149,0.3)"
              : "rgba(149,149,149,0.3)", //rgba(149,149,149,0.3)
          position: "absolute",
          width: categoryLayoutState === item.eventId ? 353 : 360,
          height: categoryLayoutState === item.eventId ? 330 : 420,
          marginLeft: categoryLayoutState === item.eventId ? 10 : 0,
          // marginRight: 3,
          top: "0%",
          left: "3%",
          borderRadius: 9,
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255,0.5)",
          //  shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: categoryLayoutState === item.eventId ? 0.2 : 0.2,
          shadowRadius: 4,

          elevation: 5,
        }}
      >
        {/* Second Slider Data  */}
        <EventSecondSlideContent data={item} state={redstate} />
      </View>
      {/* Menu bar second slide */}

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 30,
          display: categoryLayoutState === item.eventId ? "none" : "flex",
          position: "relative",
          zIndex: 3,
          top: 455,
        }}
      >
        <EventSecondSlideMenuBar data={item} handleEventInfo={handleEventInfo} />
      </View>
    </View>
  );
};

export default EventMoreInfoSlide;
