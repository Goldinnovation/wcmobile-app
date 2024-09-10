import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Image } from "react-native";
import WorldIcon from "../../../icons/worldIcon";

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

interface EventDescriptionProps {
  item: eventProps;
  handleCategoryReq: (e: string, eId: string, item: eventProps) => void;
}

const EventDescription: React.FC<EventDescriptionProps> = ({
  item,
  handleCategoryReq,
}) => {
  const { categoryLayoutState } = useSelector(
    (state: RootState) => state.OpenCategoryLayout
  );
  const dispatchIcon = useDispatch();

  return (
    <View
      style={{
        //  backgroundColor: "blue",
        top: categoryLayoutState === item.eventId ? "11%" : "2%",
        left: categoryLayoutState === item.eventId ? "2%" : "0%",
        height: categoryLayoutState === item.eventId ? 50 : 0,
      }}
    >
      <View
        style={{
          //   backgroundColor: "orange",
          height: categoryLayoutState === item.eventId ? 17 : 20,
          width: categoryLayoutState === item.eventId ? "100%" : "70%",
          position: "relative",
          left: categoryLayoutState === item.eventId ? "2%" : "2%",
          marginTop: 2,
        }}
      >
        <Text
          style={{
            fontSize: 13,
            fontWeight: "500",
            color: "white",
          }}
        >
          Event: {item.eventTitle}
        </Text>
      </View>

      <View
        style={{
          // backgroundColor: "red",
          height: categoryLayoutState === item.eventId ? 25 : 35,
          width: categoryLayoutState === item.eventId ? "60%" : "74%",
          position: "relative",
          left: categoryLayoutState === item.eventId ? "2%" : "2%",
        }}
      >
        <Text style={{ color: "white", fontSize: 11 }}>
          {item.eventDescriptionContent}
        </Text>
      </View>

      <View
        style={{
          // backgroundColor: "green",
          width: "100%",
          flexDirection:
            categoryLayoutState === item.eventId ? "row-reverse" : "row",
          gap: 5,
          height: categoryLayoutState === item.eventId ? 23 : 30,
          alignItems: "center",
          position: "relative",
          top: categoryLayoutState === item.eventId ? "5%" : "1%",
          left: categoryLayoutState === item.eventId ? "8%" : "8%",
        }}
      >
        <View
          style={{
            // backgroundColor: "yellow",
            flexDirection: "row",
            gap: 8,
            height: categoryLayoutState === item.eventId ? 23 : 30,
            alignItems: "center",
            width: categoryLayoutState === item.eventId ? "55.5%" : "60%",
            left: categoryLayoutState === item.eventId ? "-18%" : "2%",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor:
                categoryLayoutState === item.eventId
                  ? "rgba(0, 48, 131, 0.9)"
                  : "rgba(0, 0, 0,0.4)",
              //  backgroundColor: isOpen === item.eventId ? "rgba(0, 101, 255,0.5)" : "rgba(204,204,204,0.2)",
              borderRadius: 4,
              alignItems: "center",
              height: 20,
              width: categoryLayoutState === item.eventId ? 78 : 78,
              flexDirection: "row",
              justifyContent: "center",
              // borderWidth: categoryLayoutState === item.eventId ? 1 : 0,
              borderColor:
                categoryLayoutState === item.eventId
                  ? "rgba(204,204,204,0.2)"
                  : "rgba(0, 101, 255,0.3)",
            }}
            onPress={() =>
              handleCategoryReq(item.eventType, item.eventId, item)
            }
          >
            <Text style={{ color: "white" }}>#{item.eventType}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor:
                categoryLayoutState === item.eventId
                  ? "rgba(0, 0, 0,0.4)"
                  : "rgba(0, 0, 0,0.4)",
              borderRadius: 4,
              alignItems: "center",
              height: 20,
              width: categoryLayoutState === item.eventId ? 78 : 78,
              flexDirection: "row",
              justifyContent: "center",
              // borderWidth: categoryLayoutState === item.eventId ? 1 : 1,
              // borderColor:
              //   categoryLayoutState === item.eventId
              //     ? "rgba(68, 182, 120,0.3)"
              //     : "rgba(68, 182, 120,0.3)",
            }}
          >
            <Text style={{ color: "white" }}>#Rock</Text>
          </TouchableOpacity>

          
        </View>

        <View
          style={{
            backgroundColor:
              categoryLayoutState === item.eventId
                ? "rgba(0, 0, 0,0.4)"
                : "rgba(0, 0, 0,0.7)",
            borderRadius: 4,
            alignItems: "center",
            display: categoryLayoutState === item.eventId ? "flex" : "none",
            //  display: isOpen === item.eventId ? "flex" : "none",
            height: 20,
            width: categoryLayoutState ? 98 : 98,
            flexDirection: "row",
            position: "relative",
            padding: 1,
            gap: 5,
            borderWidth: categoryLayoutState === item.eventId ? 0 : 1,
            borderColor:
              categoryLayoutState === item.eventId
                ? "rgba(255, 255, 250,0.2)"
                : "rgba(255, 255, 250,0.3)",
            top: categoryLayoutState === item.eventId ? "0%" : "-1770%",
            left: categoryLayoutState === item.eventId ? "10.5%" : "27%",
            justifyContent: "center",
          }}
        >
         
          <WorldIcon height={"12"} width={"12"} />
          <Text style={{ color: "white" }}>WorldWide</Text>
        </View>
      </View>
    </View>
  );
};

export default EventDescription;
